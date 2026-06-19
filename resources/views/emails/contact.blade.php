<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nieuw Contactbericht</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #f53003;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 5px;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .field {
            margin-bottom: 15px;
        }
        .field-label {
            font-weight: bold;
            color: #f53003;
        }
        .field-value {
            margin-top: 5px;
        }
        .message-box {
            background-color: white;
            padding: 15px;
            border-left: 4px solid #f53003;
            margin-top: 10px;
        }
        .footer {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            font-size: 12px;
            color: #666;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Nieuw Contactbericht</h1>
    </div>

    <div class="content">
        <p>Er is een nieuw contactbericht binnengekomen via de website:</p>

        <div class="field">
            <div class="field-label">Naam:</div>
            <div class="field-value">{{ $contact['name'] }}</div>
        </div>

        <div class="field">
            <div class="field-label">E-mailadres:</div>
            <div class="field-value">{{ $contact['email'] }}</div>
        </div>

        <div class="field">
            <div class="field-label">Bericht:</div>
            <div class="message-box">
                {{ $contact['message'] }}
            </div>
        </div>
    </div>

    <div class="footer">
        <p>Deze email is automatisch gegenereerd door het contactformulier van Morris Productions.</p>
        <p>Beantwoord deze email direct om contact op te nemen met de afzender.</p>
    </div>
</body>
</html>
