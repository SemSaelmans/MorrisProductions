<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name'    => ['required', 'string', 'max:100'],
            'email'   => ['required', 'email', 'max:150'],
            'subject' => ['required', 'string', 'in:booking,general,press,other'],
            'message' => ['required', 'string', 'min:20', 'max:2000'],
        ], [
            'name.required'    => 'Vul uw naam in.',
            'email.required'   => 'Vul een geldig e-mailadres in.',
            'email.email'      => 'Dit e-mailadres is ongeldig.',
            'subject.required' => 'Selecteer een onderwerp.',
            'subject.in'       => 'Kies een geldig onderwerp.',
            'message.required' => 'Schrijf een bericht.',
            'message.min'      => 'Uw bericht moet minimaal 20 tekens bevatten.',
        ]);

        try {
            Mail::send('emails.contact', ['contact' => $validated], function ($message) use ($validated) {
                $message->to(config('mail.from.address'))
                    ->subject('Nieuw Contactbericht — ' . $validated['name']);
                $message->replyTo($validated['email'], $validated['name']);
            });
        } catch (\Exception $e) {
            Log::error('Contact mail failed', ['error' => $e->getMessage()]);
        }

        return redirect()->route('contact')->with('success', 'Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.');
    }

    /** Legacy method kept for existing POST /contact/submit route */
    public function submit(Request $request)
    {
        return $this->store($request);
    }
}