import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Layout from '../Components/Layout';

export default function Services() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) {
            els.forEach(el => el.classList.add('is-visible'));
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <Layout active="services">
            <Head title="Diensten — Morris Productions">
                <meta name="description" content="Bekijk de diensten van Morris Productions: live muziek voor bruiloften, bedrijfsevenementen en privéfeesten. Altijd volledig op maat." />
                <meta name="keywords" content="livemuziek diensten, bruiloft zanger, bedrijfsevenement entertainment, privéfeest muzikant" />
                <meta property="og:title" content="Diensten — Morris Productions" />
                <meta property="og:description" content="Live muziek voor bruiloften, bedrijfsevents en privéfeesten. Volledig op maat samengesteld." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Morris Productions" />
                <meta property="og:url" content="https://morrisproductions.nl/services" />
                <link rel="canonical" href="https://morrisproductions.nl/services" />
            </Head>
            <style>{`
                .page-wrap { max-width: 1400px; margin: 0 auto; padding: 0 4rem; }
                .page-hero { padding: 9rem 0 4rem; border-bottom: 1px solid rgba(245,245,220,0.06); }
                .back-link {
                    font-family: 'JetBrains Mono', monospace; font-size: 0.62rem;
                    letter-spacing: 0.2em; text-transform: uppercase;
                    color: rgba(201,168,76,0.7); text-decoration: none;
                    display: inline-flex; align-items: center; gap: 0.5rem;
                    margin-bottom: 2.5rem; transition: color 0.25s;
                }
                .back-link:hover { color: #C9A84C; }
                .page-title {
                    font-family: 'Playfair Display', serif;
                    font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 900;
                    color: #F5F5DC; line-height: 1.05; letter-spacing: -0.03em;
                    margin-bottom: 1.2rem;
                    opacity: 0; animation: up 0.9s 0.1s forwards;
                }
                .page-subtitle {
                    font-size: 1rem; font-weight: 300;
                    color: rgba(245,245,220,0.72); max-width: 540px; line-height: 1.7;
                    opacity: 0; animation: up 0.8s 0.25s forwards;
                }
                .section-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; color: #F5F5DC; margin-bottom: 1.5rem; }
                .services-section { padding: 5rem 0 6rem; }
                .services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; align-items: stretch; }
                .service-card {
                    display: flex; flex-direction: column;
                    background: rgba(40,25,12,0.92); padding: 2.8rem;
                    position: relative; overflow: hidden;
                    border-radius: 16px; border: 1px solid rgba(201,168,76,0.25);
                    transition: background 0.4s, transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s;
                }
                .service-card::after {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent);
                    transition: background 0.4s;
                }
                .service-card:hover { background: linear-gradient(135deg, rgba(50,28,10,0.98) 0%, rgba(38,22,10,0.98) 100%); transform: translateY(-5px); box-shadow: 0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,76,0.22); }
                .service-card:hover::after { background: linear-gradient(90deg, transparent, #C9A84C, transparent); }
                .card-icon-wrap {
                    display: inline-flex; align-items: center; justify-content: center;
                    width: 44px; height: 44px;
                    background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.22);
                    border-radius: 10px; margin-bottom: 1.5rem; color: #C9A84C;
                    transition: background 0.3s, border-color 0.3s;
                }
                .service-card:hover .card-icon-wrap { background: rgba(201,168,76,0.16); border-color: rgba(201,168,76,0.4); }
                .card-num { font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,168,76,0.55); margin-bottom: 1rem; display: block; }
                .card-title { font-family: 'Playfair Display', serif; font-size: 1.75rem; font-weight: 900; letter-spacing: -0.02em; line-height: 1.1; margin-bottom: 0.9rem; color: #F5F5DC; }
                .card-desc { font-size: 0.88rem; font-weight: 300; color: rgba(245,245,220,0.72); line-height: 1.75; margin-bottom: 1.4rem; }
                .card-list { list-style: none; margin-bottom: 1.4rem; }
                .card-list li { color: rgba(245,245,220,0.7); padding: 0.42rem 0 0.42rem 1.4rem; font-size: 0.87rem; position: relative; border-bottom: 1px solid rgba(245,245,220,0.04); }
                .card-list li:last-child { border-bottom: none; }
                .card-list li::before { content: '›'; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }
                .card-closing { font-size: 0.85rem; font-weight: 300; font-style: italic; color: rgba(245,245,220,0.55); line-height: 1.65; margin-bottom: 1.5rem; }
                .card-meta {
                    display: flex; flex-direction: column; gap: 0.6rem;
                    padding: 1rem 1.2rem;
                    background: rgba(201,168,76,0.05); border-left: 2px solid rgba(201,168,76,0.3);
                    border-radius: 0 6px 6px 0; margin-bottom: 1.8rem;
                }
                .meta-row { display: flex; flex-direction: column; gap: 0.1rem; }
                .meta-label { font-family: 'JetBrains Mono', monospace; font-size: 0.52rem; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(201,168,76,0.65); }
                .meta-val { font-size: 0.82rem; color: rgba(245,245,220,0.75); }
                .card-cta { margin-top: auto; align-self: flex-start; }
                .rep-section { border-top: 1px solid rgba(245,245,220,0.07); padding: 5rem 0 6rem; }
                .rep-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
                .rep-title { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; color: #F5F5DC; margin-bottom: 1.2rem; }
                .rep-body { font-size: 0.9rem; font-weight: 300; color: rgba(245,245,220,0.72); line-height: 1.85; margin-bottom: 1.8rem; }
                .genre-grid { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-bottom: 1.8rem; }
                .track-list { display: flex; flex-direction: column; margin-bottom: 1.5rem; }
                .track-list .track-item:last-child { border-bottom: 1px solid rgba(245,245,220,0.06); }
                .rep-note { font-size: 0.82rem; font-style: italic; color: rgba(245,245,220,0.55); margin-top: 1rem; line-height: 1.6; }
                .testi-section { border-top: 1px solid rgba(245,245,220,0.07); padding: 5rem 0 6rem; }
                .testi-header { margin-bottom: 3rem; }
                .testi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
                .closing-cta { border-top: 1px solid rgba(245,245,220,0.07); padding: 6rem 0 7rem; text-align: center; }
                .closing-cta-title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 0.95; letter-spacing: -0.04em; color: #F5F5DC; margin-bottom: 1.5rem; }
                .closing-cta-title .azure { color: #C9A84C; text-shadow: 0 0 40px rgba(201,168,76,0.5); animation: goldPulse 3s ease-in-out infinite; }
                @keyframes goldPulse {
                    0%, 100% { text-shadow: 0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2); }
                    50% { text-shadow: 0 0 60px rgba(201,168,76,0.75), 0 0 120px rgba(201,168,76,0.35); }
                }
                .closing-cta-body { font-size: 0.95rem; font-weight: 300; color: rgba(245,245,220,0.72); line-height: 1.85; max-width: 520px; margin: 0 auto 2.5rem; }
                .closing-cta-actions { display: flex; justify-content: center; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
                @keyframes up {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 900px) {
                    .page-wrap { padding: 0 2.5rem; }
                    .page-hero { padding: 7rem 0 3rem; }
                    .services-grid { grid-template-columns: 1fr; }
                    .service-card { padding: 2.2rem; }
                    .rep-section { padding: 4rem 0 5rem; }
                    .rep-inner { grid-template-columns: 1fr; gap: 3rem; }
                    .testi-grid { grid-template-columns: 1fr; }
                    .testi-section { padding: 4rem 0 5rem; }
                    .closing-cta { padding: 5rem 0 6rem; }
                }
                @media (max-width: 640px) {
                    .page-wrap { padding: 0 1.5rem; }
                    .closing-cta-actions { flex-direction: column; align-items: center; }
                }
            `}</style>

            <header className="page-hero">
                <div className="page-wrap">
                    <Link href="/" className="back-link">← Terug naar Home</Link>
                    <span className="section-tag" style={{opacity: 0, animation: 'up 0.7s 0s forwards'}}>Diensten</span>
                    <h1 className="page-title">Mijn Diensten</h1>
                    <p className="page-subtitle">Professionele live optredens voor elk evenement — van bruiloften tot bedrijfsbijeenkomsten, altijd volledig op maat.</p>
                </div>
            </header>

            <section className="services-section" aria-labelledby="services-heading">
                <div className="page-wrap">
                    <div className="services-grid">

                        <article className="service-card reveal" id="bruiloften" aria-labelledby="card-bruiloften">
                            <div className="card-icon-wrap" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="card-num" aria-hidden="true">01 / Bruiloften</span>
                            <h2 className="card-title" id="card-bruiloften">Bruiloften</h2>
                            <p className="card-desc">Maak uw trouwdag onvergetelijk met prachtige live muziek.</p>
                            <ul className="card-list">
                                <li>Ceremonie (binnenkomst, tijdens, uitgang)</li>
                                <li>Cocktailuurtje</li>
                                <li>Receptie en diner</li>
                                <li>Eerste dans begeleiding</li>
                            </ul>
                            <p className="card-closing">Van klassieke liederen tot moderne romantische hits — samen kiezen we het perfecte repertoire voor uw speciale dag.</p>
                            <div className="card-meta">
                                <div className="meta-row"><span className="meta-label">Duur</span><span className="meta-val">Ceremonie t/m receptie (ca. 3–5 uur)</span></div>
                                <div className="meta-row"><span className="meta-label">Tarief</span><span className="meta-val">Op maat — vraag een vrijblijvende offerte</span></div>
                            </div>
                            <Link href="/booking" className="btn-outline card-cta">Vraag beschikbaarheid</Link>
                        </article>

                        <article className="service-card reveal" id="bedrijfsevents" aria-labelledby="card-events" style={{transitionDelay: '0.15s'}}>
                            <div className="card-icon-wrap" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" strokeWidth="1.5"/>
                                    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                            </div>
                            <span className="card-num" aria-hidden="true">02 / Bedrijfsevenementen</span>
                            <h2 className="card-title" id="card-events">Bedrijfsevenementen</h2>
                            <p className="card-desc">Professioneel entertainment voor uw zakelijke bijeenkomsten.</p>
                            <ul className="card-list">
                                <li>Bedrijfsfeesten en galadiner</li>
                                <li>Productlanceringen</li>
                                <li>Conferenties en seminars</li>
                                <li>Netwerkevents</li>
                                <li>Jubilea en mijlpaalevenementen</li>
                            </ul>
                            <p className="card-closing">Professioneel, betrouwbaar en altijd afgestemd op de sfeer van uw evenement.</p>
                            <div className="card-meta">
                                <div className="meta-row"><span className="meta-label">Duur</span><span className="meta-val">Cocktailuur t/m volledige avond (1–4 uur)</span></div>
                                <div className="meta-row"><span className="meta-label">Tarief</span><span className="meta-val">Op maat — vraag een vrijblijvende offerte</span></div>
                            </div>
                            <Link href="/booking" className="btn-outline card-cta">Reserveer voor uw event</Link>
                        </article>

                        <article className="service-card reveal" id="prive" aria-labelledby="card-prive" style={{transitionDelay: '0.3s'}}>
                            <div className="card-icon-wrap" aria-hidden="true">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <span className="card-num" aria-hidden="true">03 / Privé Evenementen</span>
                            <h2 className="card-title" id="card-prive">Privé Evenementen</h2>
                            <p className="card-desc">Voeg een persoonlijke muzikale touch toe aan uw feesten.</p>
                            <ul className="card-list">
                                <li>Verjaardagsfeesten</li>
                                <li>Jubilea en gedenkdagen</li>
                                <li>Tuinfeesten</li>
                                <li>Intieme diners</li>
                                <li>Verlovingsfeesten</li>
                            </ul>
                            <p className="card-closing">Elk evenement is uniek, daarom pas ik mijn optreden aan uw wensen aan.</p>
                            <div className="card-meta">
                                <div className="meta-row"><span className="meta-label">Duur</span><span className="meta-val">Flexibel (1–3 uur, ook losse sets mogelijk)</span></div>
                                <div className="meta-row"><span className="meta-label">Tarief</span><span className="meta-val">Op maat — vraag een vrijblijvende offerte</span></div>
                            </div>
                            <Link href="/booking" className="btn-outline card-cta">Plan een gesprek</Link>
                        </article>

                    </div>
                </div>
            </section>

            <section className="rep-section" id="repertoire" aria-labelledby="rep-heading">
                <div className="page-wrap">
                    <div className="rep-inner">
                        <div className="reveal">
                            <span className="section-tag">Het repertoire</span>
                            <h2 className="rep-title" id="rep-heading">Een breed scala aan muziekstijlen en genres</h2>
                            <p className="rep-body">Op verzoek voegen we graag specifieke nummers toe. Van klassieke opera tot hedendaagse hits — Maurice past het repertoire volledig aan op uw evenement en publiek.</p>
                            <div className="genre-grid">
                                <span className="genre-pill">♪ Klassieke opera &amp; kunstliederen</span>
                                <span className="genre-pill">♪ Jazz &amp; swing</span>
                                <span className="genre-pill">♪ Pop &amp; contemporary</span>
                                <span className="genre-pill">♪ Soul &amp; R&amp;B</span>
                                <span className="genre-pill">♪ Musical nummers</span>
                                <span className="genre-pill">♪ Nederlandse klassiekers</span>
                                <span className="genre-pill">♪ Bossa nova</span>
                                <span className="genre-pill">♪ Op verzoek</span>
                            </div>
                            <Link href="/booking" className="btn-outline">Vraag uw persoonlijk repertoire</Link>
                        </div>
                        <div className="reveal" style={{transitionDelay: '0.15s'}}>
                            <div className="track-list">
                                <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Wat een dag dat was</span><span className="track-note">Bruiloft / Romantisch</span></div></div>
                                <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Fly Me to the Moon</span><span className="track-note">Jazz / Gala</span></div></div>
                                <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Can't Help Falling in Love</span><span className="track-note">Pop / Romantisch</span></div></div>
                                <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Nessun Dorma</span><span className="track-note">Opera / Gala / Ceremonie</span></div></div>
                                <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">The Way You Look Tonight</span><span className="track-note">Jazz / Cocktailuur</span></div></div>
                                <div className="track-item track-more"><span className="track-icon" aria-hidden="true">+</span><div className="track-info"><span className="track-name">300+ nummers beschikbaar</span><span className="track-note">Volledig aanpasbaar op verzoek</span></div></div>
                            </div>
                            <p className="rep-note">Staat uw favoriete nummer er niet bij? Op verzoek leert Maurice graag een specifiek nummer in voor uw evenement.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="testi-section reveal" aria-labelledby="testi-heading">
                <div className="page-wrap">
                    <div className="testi-header">
                        <span className="section-tag">Ervaringen</span>
                        <h2 className="section-title" id="testi-heading">Wat gasten zeggen</h2>
                    </div>
                    <div className="testi-grid">
                        <figure className="testimonial">
                            <blockquote><p>"Maurice las de sfeer van onze trouwdag perfect. De muziek was precies wat we ons hadden voorgesteld — warm, aanwezig, maar nooit opdringerig."</p></blockquote>
                            <figcaption><span className="t-name">Emma &amp; Lars Vermeersch</span><span className="t-role">Bruiloft — Kasteel Broekhuizen, september 2025</span></figcaption>
                        </figure>
                        <figure className="testimonial">
                            <blockquote><p>"Ons jaarlijkse galadiner heeft een heel ander niveau bereikt dankzij Maurice. Gasten hadden het er weken later nog over. Een absolute aanrader."</p></blockquote>
                            <figcaption><span className="t-name">Sofie Declercq</span><span className="t-role">Events Manager, Kinepolis Group — november 2024</span></figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="closing-cta reveal" aria-labelledby="cta-heading">
                <div className="page-wrap">
                    <span className="section-tag" style={{display: 'block'}}>Klaar om te boeken?</span>
                    <h2 className="closing-cta-title" id="cta-heading">Interesse in<br />een <span className="azure">optreden?</span></h2>
                    <p className="closing-cta-body">Neem contact op om de mogelijkheden te bespreken voor uw evenement. Beschikbaarheid is beperkt — elk evenement krijgt volledige persoonlijke aandacht.</p>
                    <div className="closing-cta-actions">
                        <Link href="/booking" className="btn-primary">Plan een gesprek</Link>
                        <Link href="/contact" className="btn-text">Of stel direct een vraag</Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
