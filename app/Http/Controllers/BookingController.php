<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        return Inertia::render('Booking');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'event_type'    => ['required', 'string', 'in:wedding,corporate,private,other'],
            'event_date'    => ['required', 'date', 'after:today'],
            'venue'         => ['required', 'string', 'max:200'],
            'audience_size' => ['required', 'string'],
            'budget'        => ['required', 'string'],
            'name'          => ['required', 'string', 'max:100'],
            'email'         => ['required', 'email', 'max:150'],
            'notes'         => ['nullable', 'string', 'max:2000'],
        ], [
            'event_type.required'    => 'Selecteer een type evenement.',
            'event_type.in'          => 'Kies een geldig evenementtype.',
            'event_date.required'    => 'Selecteer een datum.',
            'event_date.after'       => 'De datum moet in de toekomst liggen.',
            'venue.required'         => 'Vul de locatie in.',
            'audience_size.required' => 'Selecteer een geschat aantal gasten.',
            'budget.required'        => 'Selecteer een budgetrange.',
            'name.required'          => 'Vul uw naam in.',
            'email.required'         => 'Vul een geldig e-mailadres in.',
            'email.email'            => 'Dit e-mailadres is ongeldig.',
        ]);

        try {
            Mail::send('emails.booking', ['booking' => $validated], function ($message) use ($validated) {
                $message->to(config('mail.from.address'))
                    ->subject('Nieuwe Boekingsaanvraag — ' . $validated['name']);
                $message->replyTo($validated['email'], $validated['name']);
            });
        } catch (\Exception $e) {
            Log::error('Booking mail failed', ['error' => $e->getMessage()]);
        }

        return redirect()->route('booking')->with('success', 'Uw aanvraag is ontvangen. We nemen binnen 24 uur contact met u op.');
    }

    /** Legacy method kept for existing POST /booking/submit route */
    public function submit(Request $request)
    {
        return $this->store($request);
    }
}
