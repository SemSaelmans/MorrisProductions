<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserveer — Morris Productions</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
            background: #0a0a0a;
            background-attachment: fixed;
            color: #F5F5DC;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        body::after {
            content: '';
            position: fixed;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
            pointer-events: none;
            z-index: 9999;
        }
        #cursor-glow {
            position: fixed;
            width: 500px; height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
            pointer-events: none;
            z-index: 998;
            transform: translate(-50%, -50%);
            transition: left 0.08s, top 0.08s;
        }
        .topbar {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2.5rem;
            height: 64px;
            background: rgba(20,13,7,0.9);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .topbar-logo { text-decoration: none; line-height: 1; }
        .topbar-logo .logo-eyebrow {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.55rem;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            color: rgba(245,245,220,0.45);
            display: block;
            margin-bottom: 0.15rem;
        }
        .topbar-logo .logo-name {
            font-family: 'Playfair Display', serif;
            font-size: 1.25rem;
            font-weight: 900;
            color: #F5F5DC;
            letter-spacing: -0.02em;
        }
        .topbar-links { display: flex; align-items: center; gap: 0.25rem; }
        .topbar-link {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: rgba(245,245,220,0.5);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: color 0.2s, background 0.2s;
        }
        .topbar-link:hover { color: #F5F5DC; background: rgba(201,168,76,0.1); }
        .topbar-cta {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.62rem;
            font-weight: 700;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: #0A0A0A;
            background: #C9A84C;
            text-decoration: none;
            padding: 0.5rem 1.2rem;
            border-radius: 4px;
            transition: background 0.2s, transform 0.15s;
            margin-left: 0.5rem;
        }
        .topbar-cta:hover { background: #B8943E; transform: translateY(-1px); }
        .topbar-cta.active { background: #B8943E; }
        .page-hero {
            padding: 10rem 4rem 5rem;
            position: relative;
            overflow: hidden;
        }
        .page-hero-glow {
            position: absolute;
            right: -5%; top: 0;
            width: 800px; height: 800px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%);
            pointer-events: none;
        }
        .page-hero-glow-left {
            position: absolute;
            left: -10%; bottom: -10%;
            width: 600px; height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(180,100,30,0.06) 0%, transparent 65%);
            pointer-events: none;
        }
        .page-hero-inner { max-width: 1400px; margin: 0 auto; position: relative; z-index: 2; }
        .page-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #C9A84C;
            background: rgba(201,168,76,0.1);
            border: 1px solid rgba(201,168,76,0.3);
            padding: 0.45rem 1rem;
            border-radius: 100px;
            margin-bottom: 2rem;
            opacity: 0;
            animation: up 0.7s 0.1s forwards;
        }
        .page-eyebrow::before { content: ''; width: 5px; height: 5px; background: #C9A84C; border-radius: 50%; }
        .page-h1 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(3.5rem, 7vw, 7rem);
            font-weight: 900;
            line-height: 0.92;
            letter-spacing: -0.04em;
            color: #F5F5DC;
            margin-bottom: 1.5rem;
            opacity: 0;
            animation: up 0.8s 0.2s forwards;
        }
        .page-sub {
            font-size: 1rem;
            font-weight: 300;
            color: rgba(245,245,220,0.55);
            line-height: 1.8;
            max-width: 560px;
            opacity: 0;
            animation: up 0.8s 0.35s forwards;
        }
        .features-wrap {
            background: linear-gradient(145deg, #1A1208 0%, #0E0B06 50%, #131009 100%);
            border-top: 1px solid rgba(201,168,76,0.2);
            border-bottom: 1px solid rgba(201,168,76,0.2);
            position: relative;
            overflow: hidden;
        }
        .features-wrap::before {
            content: '';
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%,-50%);
            width: 900px; height: 400px;
            border-radius: 50%;
            background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%);
            pointer-events: none;
        }
        .features-inner {
            max-width: 1400px; margin: 0 auto;
            padding: 4rem 4rem;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 1px;
            position: relative; z-index: 2;
        }
        .feat-card {
            padding: 3rem 2.5rem;
            border-left: 1px solid rgba(201,168,76,0.12);
            position: relative;
            overflow: hidden;
        }
        .feat-card:first-child { border-left: none; }
        .feat-card::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #C9A84C, transparent);
            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.5s cubic-bezier(0.23,1,0.32,1);
        }
        .feat-card:hover::after { transform: scaleX(1); }
        .feat-num {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.58rem;
            letter-spacing: 0.2em;
            color: rgba(201,168,76,0.5);
            margin-bottom: 1.5rem;
        }
        .feat-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            font-weight: 900;
            color: #F5F5DC;
            margin-bottom: 0.8rem;
            line-height: 1.1;
        }
        .feat-desc {
            font-size: 0.85rem;
            font-weight: 300;
            color: rgba(245,245,220,0.5);
            line-height: 1.8;
        }
        .stats {
            border-top: 1px solid rgba(201,168,76,0.2);
            border-bottom: 1px solid rgba(201,168,76,0.2);
            background: linear-gradient(145deg, #1A1208 0%, #0E0B06 35%, #131009 60%, #1C1409 100%);
            position: relative;
            overflow: hidden;
        }
        .stats::before {
            content: '';
            position: absolute;
            left: 50%; top: 50%;
            transform: translate(-50%,-50%);
            width: 1000px; height: 400px;
            border-radius: 50%;
            background: radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, rgba(180,120,30,0.06) 40%, transparent 70%);
            pointer-events: none;
        }
        .stats-row {
            max-width: 1400px; margin: 0 auto;
            padding: 2.5rem 4rem;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            position: relative; z-index: 2;
        }
        .stat { padding: 0 2rem; border-left: 1px solid rgba(201,168,76,0.2); }
        .stat-num {
            font-family: 'JetBrains Mono', monospace;
            font-size: 2.2rem;
            font-weight: 700;
            color: #F5F5DC;
            letter-spacing: -0.04em;
            line-height: 1;
            margin-bottom: 0.4rem;
        }
        .stat-num sup { color: #C9A84C; font-size: 1rem; }
        .stat-lbl {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.25em;
            text-transform: uppercase;
            color: rgba(245,245,220,0.45);
        }
        .form-section {
            max-width: 1400px;
            margin: 0 auto;
            padding: 6rem 4rem 8rem;
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 5rem;
            align-items: start;
        }
        .form-wrap {
            background: linear-gradient(145deg, #1A1208 0%, #0E0B06 50%, #131009 100%);
            border: 1px solid rgba(201,168,76,0.12);
            border-radius: 8px;
            padding: 3rem;
            position: relative;
            overflow: hidden;
        }
        .form-wrap::before {
            content: '';
            position: absolute;
            top: -80px; right: -80px;
            width: 350px; height: 350px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%);
            pointer-events: none;
        }
        .form-section-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #C9A84C;
            margin-bottom: 2rem;
        }
        .form-row { margin-bottom: 1.6rem; }
        .form-row-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.2rem;
            margin-bottom: 1.6rem;
        }
        .form-row-3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1.2rem;
            margin-bottom: 1.6rem;
        }
        label {
            display: block;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.58rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(245,245,220,0.5);
            margin-bottom: 0.5rem;
        }
        input, select, textarea {
            width: 100%;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(245,245,220,0.1);
            border-radius: 4px;
            color: #F5F5DC;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            font-weight: 300;
            padding: 0.85rem 1rem;
            transition: border-color 0.25s, background 0.25s;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
        }
        input:focus, select:focus, textarea:focus {
            border-color: rgba(201,168,76,0.6);
            background: rgba(201,168,76,0.04);
        }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.6) sepia(1) saturate(2) hue-rotate(10deg); cursor: pointer; }
        input::placeholder, textarea::placeholder { color: rgba(245,245,220,0.2); }
        select { cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(201,168,76,0.6)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
        select option { background: #1A1208; color: #F5F5DC; }
        textarea { resize: vertical; min-height: 120px; }
        .field-error {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.58rem;
            letter-spacing: 0.1em;
            color: rgba(220,100,80,0.9);
            margin-top: 0.4rem;
        }
        input.is-error, select.is-error, textarea.is-error { border-color: rgba(220,100,80,0.5); }
        .form-divider {
            border: none;
            border-top: 1px solid rgba(201,168,76,0.1);
            margin: 2.5rem 0;
        }
        .btn-submit {
            display: inline-block;
            padding: 0.95rem 2.5rem;
            background: #C9A84C;
            color: #0A0A0A;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
            box-shadow: 0 4px 20px rgba(201,168,76,0.25);
            margin-top: 0.5rem;
        }
        .btn-submit:hover { background: #B8943E; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.35); }
        .success-banner {
            background: rgba(201,168,76,0.1);
            border: 1px solid rgba(201,168,76,0.35);
            border-radius: 6px;
            padding: 1rem 1.4rem;
            margin-bottom: 2rem;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.65rem;
            letter-spacing: 0.1em;
            color: #C9A84C;
        }
        .sidebar { position: sticky; top: 88px; }
        .sidebar-block {
            background: linear-gradient(145deg, #1A1208 0%, #0E0B06 100%);
            border: 1px solid rgba(201,168,76,0.12);
            border-radius: 8px;
            padding: 2.5rem;
            margin-bottom: 1.5rem;
            position: relative;
            overflow: hidden;
        }
        .sidebar-block::before {
            content: '';
            position: absolute;
            bottom: -60px; right: -60px;
            width: 250px; height: 250px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%);
            pointer-events: none;
        }
        .sidebar-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.58rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            color: #C9A84C;
            margin-bottom: 1.5rem;
        }
        .sidebar-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.3rem;
        }
        .sidebar-item:last-child { margin-bottom: 0; }
        .sidebar-dot {
            width: 6px; height: 6px;
            background: #C9A84C;
            border-radius: 50%;
            margin-top: 0.45rem;
            flex-shrink: 0;
        }
        .sidebar-item-title {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: rgba(245,245,220,0.4);
            margin-bottom: 0.25rem;
        }
        .sidebar-item-val {
            font-size: 0.88rem;
            font-weight: 300;
            color: #F5F5DC;
            line-height: 1.5;
        }
        .bottom-cta {
            border-top: 1px solid rgba(201,168,76,0.2);
            background: linear-gradient(145deg, #1A1208 0%, #0E0B06 35%, #131009 60%, #1C1409 100%);
            position: relative;
            overflow: hidden;
        }
        .bottom-cta::before {
            content: '';
            position: absolute;
            top: 50%; left: 30%;
            transform: translate(-50%,-50%);
            width: 1000px; height: 1000px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201,168,76,0.14) 0%, rgba(180,120,30,0.07) 35%, transparent 65%);
            pointer-events: none;
        }
        .bottom-cta::after {
            content: '';
            position: absolute;
            top: 20%; right: 5%;
            width: 500px; height: 500px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%);
            pointer-events: none;
        }
        .bottom-cta-inner {
            max-width: 1400px; margin: 0 auto;
            padding: 7rem 4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
            position: relative; z-index: 2;
        }
        .bottom-cta-h2 {
            font-family: 'Playfair Display', serif;
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-weight: 900;
            line-height: 0.95;
            letter-spacing: -0.03em;
            color: #F5F5DC;
        }
        .bottom-cta-h2 .gold { color: #C9A84C; }
        .bottom-cta-body {
            font-size: 0.9rem;
            font-weight: 300;
            color: rgba(245,245,220,0.55);
            line-height: 1.85;
            max-width: 420px;
        }
        .btn-gold {
            display: inline-block;
            padding: 0.95rem 2.2rem;
            background: #C9A84C;
            color: #0A0A0A;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 4px;
            transition: background 0.2s, transform 0.15s;
            margin-top: 1.5rem;
            display: inline-block;
        }
        .btn-gold:hover { background: #B8943E; transform: translateY(-2px); }
        footer {
            border-top: 1px solid rgba(201,168,76,0.1);
            background: linear-gradient(180deg, rgba(18,11,5,1) 0%, rgba(12,8,4,1) 100%);
            padding: 2.5rem 4rem;
        }
        .footer-row {
            max-width: 1400px; margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .footer-copy {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.15em;
            color: rgba(255,255,255,0.2);
        }
        .footer-nav { display: flex; gap: 2.5rem; }
        .footer-nav a {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.6rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.4);
            text-decoration: none;
            transition: color 0.3s;
        }
        .footer-nav a:hover { color: #C9A84C; }
        @keyframes up {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 1024px) {
            .features-inner { grid-template-columns: 1fr; }
            .feat-card { border-left: none; border-top: 1px solid rgba(201,168,76,0.12); }
            .feat-card:first-child { border-top: none; }
        }
        @media (max-width: 900px) {
            .form-section { grid-template-columns: 1fr; padding: 3rem 1.5rem 5rem; }
            .sidebar { position: static; }
            .page-hero { padding: 9rem 1.5rem 3rem; }
            .form-row-2, .form-row-3 { grid-template-columns: 1fr; }
            .stats-row { grid-template-columns: repeat(2,1fr); gap: 2rem; }
            .bottom-cta-inner { flex-direction: column; align-items: flex-start; padding: 4rem 1.5rem; }
        }
    </style>
</head>
<body>
<div id="cursor-glow"></div>

<nav class="topbar">
    <a href="{{ url('/') }}" class="topbar-logo">
        <span class="logo-eyebrow">Est. 2024</span>
        <span class="logo-name">Morris Productions</span>
    </a>
    <div class="topbar-links">
        <a href="{{ url('/') }}" class="topbar-link">Home</a>
        <a href="{{ url('/services') }}" class="topbar-link">Diensten</a>
        <a href="{{ url('/contact') }}" class="topbar-link">Contact</a>
        <a href="{{ url('/booking') }}" class="topbar-cta active">Reserveer</a>
    </div>
</nav>

<section class="page-hero">
    <div class="page-hero-glow"></div>
    <div class="page-hero-glow-left"></div>
    <div class="page-hero-inner">
        <span class="page-eyebrow">Beschikbaarheid &amp; boeking</span>
        <h1 class="page-h1">Book a<br>Performance.</h1>
        <p class="page-sub">Vertel ons over uw evenement en wij zorgen voor een onvergetelijke muzikale ervaring. Volledig op maat &mdash; geen standaard setlists.</p>
    </div>
</section>

<div class="features-wrap">
    <div class="features-inner">
        <div class="feat-card">
            <div class="feat-num">01 / Voorbereiding</div>
            <h3 class="feat-title">Sound Check</h3>
            <p class="feat-desc">Elke locatie is uniek. Maurice arriveert vroeg voor een professionele soundcheck zodat het geluid perfect zit nog voor uw eerste gast arriveert.</p>
        </div>
        <div class="feat-card">
            <div class="feat-num">02 / Repertoire</div>
            <h3 class="feat-title">Setlist Customisation</h3>
            <p class="feat-desc">Van klassieke evergreens tot moderne hits. Het repertoire wordt volledig afgestemd op uw smaak, sfeer en de bijzondere momenten van uw dag.</p>
        </div>
        <div class="feat-card">
            <div class="feat-num">03 / Advies</div>
            <h3 class="feat-title">Event Consultation</h3>
            <p class="feat-desc">Gratis intakegesprek om uw wensen te bespreken. We denken mee over timing, opbouw en hoe muziek uw programma optimaal kan ondersteunen.</p>
        </div>
    </div>
</div>




<div class="form-section">
    <div>
        <div class="form-wrap">
            @if(session('success'))
                <div class="success-banner">&#10003; &nbsp;{{ session('success') }}</div>
            @endif

            <p class="form-section-label">Aanvraagformulier</p>

            <form method="POST" action="{{ route('booking.store') }}" novalidate>
                @csrf

                <div class="form-row-2">
                    <div>
                        <label for="event_type">Type evenement *</label>
                        <select id="event_type" name="event_type"
                                class="{{ $errors->has('event_type') ? 'is-error' : '' }}">
                            <option value="" disabled {{ old('event_type') ? '' : 'selected' }}>Kies type…</option>
                            <option value="wedding"   {{ old('event_type') === 'wedding'   ? 'selected' : '' }}>Bruiloft</option>
                            <option value="corporate" {{ old('event_type') === 'corporate' ? 'selected' : '' }}>Bedrijfsevenement</option>
                            <option value="private"   {{ old('event_type') === 'private'   ? 'selected' : '' }}>Priv&eacute; gelegenheid</option>
                            <option value="other"     {{ old('event_type') === 'other'     ? 'selected' : '' }}>Anders</option>
                        </select>
                        @error('event_type')<p class="field-error">{{ $message }}</p>@enderror
                    </div>
                    <div>
                        <label for="event_date">Datum evenement *</label>
                        <input type="date" id="event_date" name="event_date"
                               value="{{ old('event_date') }}"
                               class="{{ $errors->has('event_date') ? 'is-error' : '' }}">
                        @error('event_date')<p class="field-error">{{ $message }}</p>@enderror
                    </div>
                </div>

                <div class="form-row">
                    <label for="venue">Locatie / Zaal *</label>
                    <input type="text" id="venue" name="venue"
                           value="{{ old('venue') }}"
                           placeholder="Naam en adres van de locatie"
                           class="{{ $errors->has('venue') ? 'is-error' : '' }}">
                    @error('venue')<p class="field-error">{{ $message }}</p>@enderror
                </div>

                <div class="form-row-2">
                    <div>
                        <label for="audience_size">Aantal gasten *</label>
                        <select id="audience_size" name="audience_size"
                                class="{{ $errors->has('audience_size') ? 'is-error' : '' }}">
                            <option value="" disabled {{ old('audience_size') ? '' : 'selected' }}>Kies range…</option>
                            <option value="1-30"    {{ old('audience_size') === '1-30'    ? 'selected' : '' }}>1 – 30 gasten</option>
                            <option value="31-80"   {{ old('audience_size') === '31-80'   ? 'selected' : '' }}>31 – 80 gasten</option>
                            <option value="81-200"  {{ old('audience_size') === '81-200'  ? 'selected' : '' }}>81 – 200 gasten</option>
                            <option value="200+"    {{ old('audience_size') === '200+'    ? 'selected' : '' }}>200+ gasten</option>
                        </select>
                        @error('audience_size')<p class="field-error">{{ $message }}</p>@enderror
                    </div>
                    <div>
                        <label for="budget">Budgetrange *</label>
                        <select id="budget" name="budget"
                                class="{{ $errors->has('budget') ? 'is-error' : '' }}">
                            <option value="" disabled {{ old('budget') ? '' : 'selected' }}>Kies budget…</option>
                            <option value="<500"      {{ old('budget') === '<500'      ? 'selected' : '' }}>&lt; &euro;500</option>
                            <option value="500-1000"  {{ old('budget') === '500-1000'  ? 'selected' : '' }}>&euro;500 – &euro;1.000</option>
                            <option value="1000-2500" {{ old('budget') === '1000-2500' ? 'selected' : '' }}>&euro;1.000 – &euro;2.500</option>
                            <option value="2500+"     {{ old('budget') === '2500+'     ? 'selected' : '' }}>&euro;2.500+</option>
                        </select>
                        @error('budget')<p class="field-error">{{ $message }}</p>@enderror
                    </div>
                </div>

                <hr class="form-divider">

                <p class="form-section-label">Uw contactgegevens</p>

                <div class="form-row-2">
                    <div>
                        <label for="name">Uw naam *</label>
                        <input type="text" id="name" name="name"
                               value="{{ old('name') }}"
                               placeholder="Voornaam Achternaam"
                               class="{{ $errors->has('name') ? 'is-error' : '' }}">
                        @error('name')<p class="field-error">{{ $message }}</p>@enderror
                    </div>
                    <div>
                        <label for="email">E-mailadres *</label>
                        <input type="email" id="email" name="email"
                               value="{{ old('email') }}"
                               placeholder="u@voorbeeld.nl"
                               class="{{ $errors->has('email') ? 'is-error' : '' }}">
                        @error('email')<p class="field-error">{{ $message }}</p>@enderror
                    </div>
                </div>

                <div class="form-row">
                    <label for="notes">Aanvullende wensen / opmerkingen</label>
                    <textarea id="notes" name="notes"
                              placeholder="Specifieke nummers, dresscode, bijzondere momenten in het programma…"
                              class="{{ $errors->has('notes') ? 'is-error' : '' }}">{{ old('notes') }}</textarea>
                    @error('notes')<p class="field-error">{{ $message }}</p>@enderror
                </div>

                <button type="submit" class="btn-submit">Aanvraag versturen</button>
            </form>
        </div>
    </div>

    <aside class="sidebar">
        <div class="sidebar-block">
            <p class="sidebar-label">Wat u kunt verwachten</p>
            <div class="sidebar-item">
                <div class="sidebar-dot"></div>
                <div>
                    <div class="sidebar-item-title">Reactietijd</div>
                    <div class="sidebar-item-val">Binnen 24 uur een persoonlijke reactie</div>
                </div>
            </div>
            <div class="sidebar-item">
                <div class="sidebar-dot"></div>
                <div>
                    <div class="sidebar-item-title">Intakegesprek</div>
                    <div class="sidebar-item-val">Gratis &amp; vrijblijvend kennismakingsgesprek</div>
                </div>
            </div>
            <div class="sidebar-item">
                <div class="sidebar-dot"></div>
                <div>
                    <div class="sidebar-item-title">Offerte</div>
                    <div class="sidebar-item-val">Transparante prijsopgave zonder verborgen kosten</div>
                </div>
            </div>
            <div class="sidebar-item">
                <div class="sidebar-dot"></div>
                <div>
                    <div class="sidebar-item-title">Beschikbaarheid</div>
                    <div class="sidebar-item-val">Beperkte datums per jaar voor optimale kwaliteit</div>
                </div>
            </div>
        </div>
        <div class="sidebar-block">
            <p class="sidebar-label">Directe lijn</p>
            <div class="sidebar-item">
                <div class="sidebar-dot"></div>
                <div>
                    <div class="sidebar-item-title">E-mail</div>
                    <div class="sidebar-item-val">msaelmans66@gmail.com</div>
                </div>
            </div>
            <div class="sidebar-item">
                <div class="sidebar-dot"></div>
                <div>
                    <div class="sidebar-item-title">Telefoon</div>
                    <div class="sidebar-item-val">+31 6 50 52 59 63</div>
                </div>
            </div>
        </div>
    </aside>
</div>

<section class="bottom-cta">
    <div class="bottom-cta-inner">
        <h2 class="bottom-cta-h2">Liever eerst<br>een <span class="gold">gesprek?</span></h2>
        <div>
            <p class="bottom-cta-body">Heeft u vragen voordat u een aanvraag indient? Neem gerust contact op voor een vrijblijvend gesprek over uw evenement en hoe Maurice dat tot leven kan brengen.</p>
            <a href="{{ url('/contact') }}" class="btn-gold">Stel een vraag</a>
        </div>
    </div>
</section>

<footer>
    <div class="footer-row">
        <span class="footer-copy">&copy; {{ date('Y') }} Morris Productions &mdash; Alle rechten voorbehouden</span>
        <nav class="footer-nav">
            <a href="{{ url('/') }}">Home</a>
            <a href="{{ url('/services') }}">Diensten</a>
            <a href="{{ url('/booking') }}">Reserveer</a>
            <a href="{{ url('/contact') }}">Contact</a>
        </nav>
    </div>
</footer>

<script>
    const glow = document.getElementById('cursor-glow');
    document.addEventListener('mousemove', e => {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
    });
</script>

</body>
</html>
