import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Booking() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        event_type: '',
        event_date: '',
        venue: '',
        audience_size: '',
        budget: '',
        name: '',
        email: '',
        notes: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/booking');
    }

    return (
        <Layout active="booking">
            <Head title="Reserveer — Morris Productions">
                <meta name="description" content="Boek Maurice Saelmans voor uw evenement. Vul het aanvraagformulier in en ontvang binnen 24 uur een persoonlijke reactie." />
                <meta name="keywords" content="boek livemuzikant, reserveer zanger, aanvraag bruiloft muziek, evenement muzikant boeken" />
                <meta property="og:title" content="Reserveer — Morris Productions" />
                <meta property="og:description" content="Boek Maurice Saelmans voor uw bruiloft, bedrijfsevenement of privéfeest. Binnen 24 uur reactie." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Morris Productions" />
                <meta property="og:url" content="https://morrisproductions.nl/booking" />
                <link rel="canonical" href="https://morrisproductions.nl/booking" />
            </Head>
            <style>{`
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
                }
                .features-inner {
                    max-width: 1400px; margin: 0 auto;
                    padding: 4rem;
                    display: grid;
                    grid-template-columns: repeat(3,1fr);
                    gap: 1px;
                }
                .feat-card {
                    padding: 3rem 2.5rem;
                    border-left: 1px solid rgba(201,168,76,0.12);
                }
                .feat-card:first-child { border-left: none; }
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
                }
                .feat-desc {
                    font-size: 0.85rem;
                    font-weight: 300;
                    color: rgba(245,245,220,0.5);
                    line-height: 1.8;
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
                .form-section-label {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.6rem;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: #C9A84C;
                    margin-bottom: 2rem;
                    display: block;
                }
                .form-row { margin-bottom: 1.6rem; }
                .form-row-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
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
                .is-error { border-color: rgba(220,100,80,0.5) !important; }
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
                .btn-submit:hover:not(:disabled) { background: #B8943E; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.35); }
                .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
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
                }
                .bottom-cta-inner {
                    max-width: 1400px; margin: 0 auto;
                    padding: 7rem 4rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 4rem;
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
                }
                .btn-gold:hover { background: #B8943E; transform: translateY(-2px); }
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
                    .form-row-2 { grid-template-columns: 1fr; }
                    .bottom-cta-inner { flex-direction: column; align-items: flex-start; padding: 4rem 1.5rem; }
                }
                @media (max-width: 640px) {
                    .page-hero { padding: 8rem 1rem 2.5rem; }
                    .features-inner { padding: 2rem 1rem; }
                    .form-section { padding: 2rem 1rem 4rem; }
                    .form-wrap { padding: 1.8rem 1.2rem; }
                    .sidebar-block { padding: 1.5rem 1.2rem; }
                    .bottom-cta-inner { padding: 3rem 1rem; }
                }
            `}</style>

            <section className="page-hero">
                <div className="page-hero-glow"></div>
                <div className="page-hero-inner">
                    <span className="page-eyebrow">Beschikbaarheid &amp; boeking</span>
                    <h1 className="page-h1">Book a<br />Performance.</h1>
                    <p className="page-sub">Vertel ons over uw evenement en wij zorgen voor een onvergetelijke muzikale ervaring. Volledig op maat &mdash; geen standaard setlists.</p>
                </div>
            </section>

            <div className="features-wrap">
                <div className="features-inner">
                    <div className="feat-card">
                        <div className="feat-num">01 / Voorbereiding</div>
                        <h3 className="feat-title">Sound Check</h3>
                        <p className="feat-desc">Elke locatie is uniek. Maurice arriveert vroeg voor een professionele soundcheck zodat het geluid perfect zit nog voor uw eerste gast arriveert.</p>
                    </div>
                    <div className="feat-card">
                        <div className="feat-num">02 / Repertoire</div>
                        <h3 className="feat-title">Setlist Customisation</h3>
                        <p className="feat-desc">Van klassieke evergreens tot moderne hits. Het repertoire wordt volledig afgestemd op uw smaak, sfeer en de bijzondere momenten van uw dag.</p>
                    </div>
                    <div className="feat-card">
                        <div className="feat-num">03 / Advies</div>
                        <h3 className="feat-title">Event Consultation</h3>
                        <p className="feat-desc">Gratis intakegesprek om uw wensen te bespreken. We denken mee over timing, opbouw en hoe muziek uw programma optimaal kan ondersteunen.</p>
                    </div>
                </div>
            </div>

            <div className="form-section">
                <div>
                    <div className="form-wrap">
                        {flash?.success && (
                            <div className="success-banner">&#10003;&nbsp; {flash.success}</div>
                        )}
                        <span className="form-section-label">Aanvraagformulier</span>
                        <form onSubmit={submit} noValidate>
                            <div className="form-row-2">
                                <div>
                                    <label htmlFor="event_type">Type evenement *</label>
                                    <select
                                        id="event_type"
                                        value={data.event_type}
                                        onChange={e => setData('event_type', e.target.value)}
                                        className={errors.event_type ? 'is-error' : ''}
                                    >
                                        <option value="" disabled>Kies type…</option>
                                        <option value="wedding">Bruiloft</option>
                                        <option value="corporate">Bedrijfsevenement</option>
                                        <option value="private">Privé gelegenheid</option>
                                        <option value="other">Anders</option>
                                    </select>
                                    {errors.event_type && <p className="field-error">{errors.event_type}</p>}
                                </div>
                                <div>
                                    <label htmlFor="event_date">Datum evenement *</label>
                                    <input
                                        type="date" id="event_date"
                                        value={data.event_date}
                                        onChange={e => setData('event_date', e.target.value)}
                                        className={errors.event_date ? 'is-error' : ''}
                                    />
                                    {errors.event_date && <p className="field-error">{errors.event_date}</p>}
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="venue">Locatie / Zaal *</label>
                                <input
                                    type="text" id="venue"
                                    value={data.venue}
                                    onChange={e => setData('venue', e.target.value)}
                                    placeholder="Naam en adres van de locatie"
                                    className={errors.venue ? 'is-error' : ''}
                                />
                                {errors.venue && <p className="field-error">{errors.venue}</p>}
                            </div>

                            <div className="form-row-2">
                                <div>
                                    <label htmlFor="audience_size">Aantal gasten *</label>
                                    <select
                                        id="audience_size"
                                        value={data.audience_size}
                                        onChange={e => setData('audience_size', e.target.value)}
                                        className={errors.audience_size ? 'is-error' : ''}
                                    >
                                        <option value="" disabled>Kies range…</option>
                                        <option value="1-30">1 – 30 gasten</option>
                                        <option value="31-80">31 – 80 gasten</option>
                                        <option value="81-200">81 – 200 gasten</option>
                                        <option value="200+">200+ gasten</option>
                                    </select>
                                    {errors.audience_size && <p className="field-error">{errors.audience_size}</p>}
                                </div>
                                <div>
                                    <label htmlFor="budget">Budgetrange *</label>
                                    <select
                                        id="budget"
                                        value={data.budget}
                                        onChange={e => setData('budget', e.target.value)}
                                        className={errors.budget ? 'is-error' : ''}
                                    >
                                        <option value="" disabled>Kies budget…</option>
                                        <option value="&lt;500">&lt; €500</option>
                                        <option value="500-1000">€500 – €1.000</option>
                                        <option value="1000-2500">€1.000 – €2.500</option>
                                        <option value="2500+">€2.500+</option>
                                    </select>
                                    {errors.budget && <p className="field-error">{errors.budget}</p>}
                                </div>
                            </div>

                            <hr className="form-divider" />
                            <span className="form-section-label">Uw contactgegevens</span>

                            <div className="form-row-2">
                                <div>
                                    <label htmlFor="name">Uw naam *</label>
                                    <input
                                        type="text" id="name"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        placeholder="Voornaam Achternaam"
                                        className={errors.name ? 'is-error' : ''}
                                    />
                                    {errors.name && <p className="field-error">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email">E-mailadres *</label>
                                    <input
                                        type="email" id="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        placeholder="u@voorbeeld.nl"
                                        className={errors.email ? 'is-error' : ''}
                                    />
                                    {errors.email && <p className="field-error">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="form-row">
                                <label htmlFor="notes">Aanvullende wensen / opmerkingen</label>
                                <textarea
                                    id="notes"
                                    value={data.notes}
                                    onChange={e => setData('notes', e.target.value)}
                                    placeholder="Specifieke nummers, dresscode, bijzondere momenten in het programma…"
                                    className={errors.notes ? 'is-error' : ''}
                                />
                                {errors.notes && <p className="field-error">{errors.notes}</p>}
                            </div>

                            <button type="submit" className="btn-submit" disabled={processing}>
                                {processing ? 'Versturen…' : 'Aanvraag versturen'}
                            </button>
                        </form>
                    </div>
                </div>

                <aside className="sidebar">
                    <div className="sidebar-block">
                        <p className="sidebar-label">Wat u kunt verwachten</p>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Reactietijd</div>
                                <div className="sidebar-item-val">Binnen 24 uur een persoonlijke reactie</div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Intakegesprek</div>
                                <div className="sidebar-item-val">Gratis &amp; vrijblijvend kennismakingsgesprek</div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Offerte</div>
                                <div className="sidebar-item-val">Transparante prijsopgave zonder verborgen kosten</div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Beschikbaarheid</div>
                                <div className="sidebar-item-val">Beperkte datums per jaar voor optimale kwaliteit</div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-block">
                        <p className="sidebar-label">Directe lijn</p>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">E-mail</div>
                                <div className="sidebar-item-val">msaelmans66@gmail.com</div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Telefoon</div>
                                <div className="sidebar-item-val">+31 6 50 52 59 63</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <section className="bottom-cta">
                <div className="bottom-cta-inner">
                    <h2 className="bottom-cta-h2">Liever eerst<br />een <span className="gold">gesprek?</span></h2>
                    <div>
                        <p className="bottom-cta-body">Heeft u vragen voordat u een aanvraag indient? Neem gerust contact op voor een vrijblijvend gesprek over uw evenement en hoe Maurice dat tot leven kan brengen.</p>
                        <Link href="/contact" className="btn-gold">Stel een vraag</Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
