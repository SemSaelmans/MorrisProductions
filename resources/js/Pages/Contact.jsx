import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Layout from '../Components/Layout';

export default function Contact() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    function submit(e) {
        e.preventDefault();
        post('/contact');
    }

    return (
        <Layout active="contact">
            <Head title="Contact — Morris Productions">
                <meta name="description" content="Neem contact op met Morris Productions. Stel een vraag of vraag een vrijblijvende offerte aan voor uw evenement." />
                <meta name="keywords" content="contact Morris Productions, offerte livemuzikant, beschikbaarheid opvragen" />
                <meta property="og:title" content="Contact — Morris Productions" />
                <meta property="og:description" content="Neem contact op met Maurice Saelmans voor vragen of een vrijblijvende offerte." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Morris Productions" />
                <meta property="og:url" content="https://morrisproductions.nl/contact" />
                <link rel="canonical" href="https://morrisproductions.nl/contact" />
            </Head>
            <style>{`
                .page-hero {
                    padding: 10rem 4rem 5rem;
                    position: relative;
                    overflow: hidden;
                }
                .page-hero-glow {
                    position: absolute;
                    left: -5%; top: 0;
                    width: 700px; height: 700px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 65%);
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
                    max-width: 520px;
                    opacity: 0;
                    animation: up 0.8s 0.35s forwards;
                }
                .page-body {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 4rem 4rem 8rem;
                    display: grid;
                    grid-template-columns: 1fr 380px;
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
                input::placeholder, textarea::placeholder { color: rgba(245,245,220,0.2); }
                select { cursor: pointer; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(201,168,76,0.6)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 1rem center; padding-right: 2.5rem; }
                select option { background: #1A1208; color: #F5F5DC; }
                textarea { resize: vertical; min-height: 140px; }
                .field-error {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.58rem;
                    letter-spacing: 0.1em;
                    color: rgba(220,100,80,0.9);
                    margin-top: 0.4rem;
                }
                .is-error { border-color: rgba(220,100,80,0.5) !important; }
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
                    margin-bottom: 1.4rem;
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
                    font-size: 0.9rem;
                    font-weight: 300;
                    color: #F5F5DC;
                    line-height: 1.5;
                }
                .sidebar-item-val a { color: #F5F5DC; text-decoration: none; transition: color 0.2s; }
                .sidebar-item-val a:hover { color: #C9A84C; }
                .social-row { display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1rem; }
                .social-pill {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.58rem;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(245,245,220,0.5);
                    border: 1px solid rgba(245,245,220,0.12);
                    padding: 0.4rem 0.8rem;
                    border-radius: 100px;
                    text-decoration: none;
                    transition: color 0.2s, border-color 0.2s;
                }
                .social-pill:hover { color: #C9A84C; border-color: rgba(201,168,76,0.4); }
                @keyframes up {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 900px) {
                    .page-body { grid-template-columns: 1fr; padding: 2rem 1.5rem 5rem; }
                    .sidebar { position: static; }
                    .page-hero { padding: 9rem 1.5rem 3rem; }
                    .form-row-2 { grid-template-columns: 1fr; }
                }
                @media (max-width: 640px) {
                    .page-hero { padding: 8rem 1rem 2.5rem; }
                    .page-body { padding: 1.5rem 1rem 4rem; }
                    .form-wrap { padding: 1.8rem 1.2rem; }
                    .sidebar-block { padding: 1.5rem 1.2rem; }
                }
            `}</style>

            <section className="page-hero">
                <div className="page-hero-glow"></div>
                <div className="page-hero-inner">
                    <span className="page-eyebrow">Laten we praten</span>
                    <h1 className="page-h1">Get In<br />Touch.</h1>
                    <p className="page-sub">Stel uw vraag, vraag een offerte aan of laat mij weten hoe ik uw evenement kan maken tot iets dat men nooit vergeet.</p>
                </div>
            </section>

            <div className="page-body">
                <div>
                    <div className="form-wrap">
                        {flash?.success && (
                            <div className="success-banner">&#10003;&nbsp; {flash.success}</div>
                        )}
                        <p className="form-section-label">Stuur een bericht</p>
                        <form onSubmit={submit} noValidate>
                            <div className="form-row-2">
                                <div>
                                    <label htmlFor="name">Uw naam *</label>
                                    <input
                                        type="text" id="name"
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}
                                        placeholder="Maurice Saelmans"
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
                                <label htmlFor="subject">Onderwerp *</label>
                                <select
                                    id="subject"
                                    value={data.subject}
                                    onChange={e => setData('subject', e.target.value)}
                                    className={errors.subject ? 'is-error' : ''}
                                >
                                    <option value="" disabled>Kies een onderwerp…</option>
                                    <option value="booking">Boeking &amp; beschikbaarheid</option>
                                    <option value="general">Algemene vraag</option>
                                    <option value="press">Pers &amp; media</option>
                                    <option value="other">Anders</option>
                                </select>
                                {errors.subject && <p className="field-error">{errors.subject}</p>}
                            </div>

                            <div className="form-row">
                                <label htmlFor="message">Bericht *</label>
                                <textarea
                                    id="message"
                                    value={data.message}
                                    onChange={e => setData('message', e.target.value)}
                                    placeholder="Vertel ons over uw evenement, datum, locatie en eventuele wensen…"
                                    className={errors.message ? 'is-error' : ''}
                                />
                                {errors.message && <p className="field-error">{errors.message}</p>}
                            </div>

                            <button type="submit" className="btn-submit" disabled={processing}>
                                {processing ? 'Versturen…' : 'Verstuur bericht'}
                            </button>
                        </form>
                    </div>
                </div>

                <aside className="sidebar">
                    <div className="sidebar-block">
                        <p className="sidebar-label">Directe contactinfo</p>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">E-mail</div>
                                <div className="sidebar-item-val"><a href="mailto:msaelmans66@gmail.com">msaelmans66@gmail.com</a></div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Telefoon</div>
                                <div className="sidebar-item-val"><a href="tel:+31650525963">+31 6 50 52 59 63</a></div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Locatie</div>
                                <div className="sidebar-item-val">Nederland<br />Nationaal beschikbaar</div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Reactietijd</div>
                                <div className="sidebar-item-val">Binnen 24 uur</div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-block">
                        <p className="sidebar-label">Socials</p>
                        <div className="sidebar-item">
                            <div className="sidebar-dot"></div>
                            <div>
                                <div className="sidebar-item-title">Volg Maurice</div>
                                <div className="sidebar-item-val">Bekijk optredens &amp; behind the scenes</div>
                            </div>
                        </div>
                        <div className="social-row">
                            <a href="#" className="social-pill">Instagram</a>
                            <a href="#" className="social-pill">Facebook</a>
                            <a href="#" className="social-pill">YouTube</a>
                            <a href="#" className="social-pill">Spotify</a>
                        </div>
                    </div>
                </aside>
            </div>
        </Layout>
    );
}
