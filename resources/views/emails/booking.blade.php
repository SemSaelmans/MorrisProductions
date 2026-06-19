<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boekingsaanvraag — Morris Productions</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: #0a0a0a;
            color: #F5F5DC;
            font-family: 'Inter', sans-serif;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(201,168,76,0.2);
        }
        .header h1 {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 900;
            color: #F5F5DC;
            margin-bottom: 10px;
            letter-spacing: -0.02em;
        }
        .header p {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: rgba(245,245,220,0.5);
        }
        .intro {
            font-size: 1rem;
            color: rgba(245,245,220,0.8);
            margin-bottom: 30px;
            line-height: 1.6;
        }
        .field-group {
            margin-bottom: 24px;
            padding: 16px;
            background: rgba(201,168,76,0.05);
            border-left: 2px solid #C9A84C;
            border-radius: 4px;
        }
        .field-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.7rem;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: #C9A84C;
            margin-bottom: 8px;
            display: block;
        }
        .field-value {
            font-size: 1rem;
            color: #F5F5DC;
            line-height: 1.5;
            word-break: break-word;
        }
        .footer {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(201,168,76,0.2);
            text-align: center;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.75rem;
            color: rgba(245,245,220,0.4);
        }
        .accent {
            color: #C9A84C;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Nieuwe Boekingsaanvraag</h1>
            <p>Morris Productions</p>
        </div>

        <p class="intro">Er is een nieuwe boekingsaanvraag binnengekomen via de website.</p>

        <div class="field-group">
            <span class="field-label">Volledige Naam</span>
            <div class="field-value">{{ $booking['full_name'] }}</div>
        </div>

        <div class="field-group">
            <span class="field-label">E-mailadres</span>
            <div class="field-value">{{ $booking['email'] }}</div>
        </div>

        <div class="field-group">
            <span class="field-label">Telefoonnummer</span>
            <div class="field-value">{{ $booking['phone'] }}</div>
        </div>

        <div class="field-group">
            <span class="field-label">Evenementdatum</span>
            <div class="field-value">{{ \Carbon\Carbon::parse($booking['event_date'])->format('d-m-Y') }}</div>
        </div>

        <div class="field-group">
            <span class="field-label">Type Evenement</span>
            <div class="field-value">{{ $booking['event_type'] }}</div>
        </div>

        <div class="field-group">
            <span class="field-label">Locatie Evenement</span>
            <div class="field-value">{{ $booking['event_location'] }}</div>
        </div>

        @if(isset($booking['guest_count']) && $booking['guest_count'])
        <div class="field-group">
            <span class="field-label">Geschat Aantal Gasten</span>
            <div class="field-value">{{ $booking['guest_count'] }}</div>
        </div>
        @endif

        @if(isset($booking['additional_details']) && $booking['additional_details'])
        <div class="field-group">
            <span class="field-label">Aanvullende Details</span>
            <div class="field-value">{{ $booking['additional_details'] }}</div>
        </div>
        @endif

        <div class="footer">
            <p>© 2026 Morris Productions. Alle rechten voorbehouden.</p>
            <p style="margin-top: 12px; opacity: 0.7;">Deze email is automatisch gegenereerd.</p>
        </div>
    </div>
</body>
</html>
