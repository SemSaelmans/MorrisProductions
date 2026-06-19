import { Head, Link } from '@inertiajs/react';
import { useEffect } from 'react';
import Layout from '../Components/Layout';

export default function Home() {
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
        <Layout active="home">
            <Head title="Morris Productions – Maurice Saelmans, Livemuzikant">
                <meta name="description" content="Maurice Saelmans is een professionele livemuzikant met meer dan 40 jaar ervaring. Boek hem voor uw bruiloft, bedrijfsevenement of privéfeest in Nederland." />
                <meta name="keywords" content="livemuzikant, bruiloft muziek, bedrijfsevenement muziek, privéfeest muzikant, zanger gitarist Nederland" />
                <meta property="og:title" content="Morris Productions – Maurice Saelmans, Livemuzikant" />
                <meta property="og:description" content="Professionele live optredens voor bruiloften, bedrijfsevents en privéfeesten. Meer dan 40 jaar muzikale ervaring." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Morris Productions" />
                <meta property="og:url" content="https://morrisproductions.nl/" />
                <link rel="canonical" href="https://morrisproductions.nl/" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Maurice Saelmans",
                    "jobTitle": "Livemuzikant",
                    "description": "Professionele livemuzikant met meer dan 40 jaar ervaring, gespecialiseerd in bruiloften, bedrijfsevenementen en privéfeesten.",
                    "url": "https://morrisproductions.nl",
                    "telephone": "+31650525963",
                    "email": "msaelmans66@gmail.com",
                    "areaServed": "Nederland",
                    "knowsAbout": ["Live muziek", "Gitaar", "Zang", "Bruiloften", "Bedrijfsevenementen", "Privéfeesten"],
                    "brand": { "@type": "Brand", "name": "Morris Productions" }
                })}} />
            </Head>
            <style>{`
                .hero {
                    min-height: 100vh; position: relative;
                    display: grid; grid-template-columns: 1fr 1fr;
                    overflow: hidden; padding: 0;
                }
                .hero-image {
                    display: block; width: 100%; height: 100%;
                    box-shadow: -20px 0 60px rgba(0,0,0,0.8), inset -50px 0 60px rgba(0,0,0,0.3);
                }
                .hero-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
                .hero-content {
                    display: flex; flex-direction: column; justify-content: center;
                    padding: 7rem 5rem 5rem 6rem; position: relative; z-index: 10;
                }
                .hero-role {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.75rem; letter-spacing: 0.45em; text-transform: uppercase;
                    color: #C9A84C; margin-bottom: 1.5rem;
                    opacity: 0; animation: up 0.8s 0.2s forwards;
                }
                .hero-center { margin-bottom: 3rem; }
                .hero-h1 {
                    font-family: 'Playfair Display', serif; font-weight: 900;
                    line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 2rem;
                    opacity: 0; animation: up 0.9s 0.35s forwards;
                }
                .hero-h1 .name-first, .hero-h1 .name-last {
                    display: block; font-size: clamp(2rem, 5vw, 3.5rem);
                    color: #F5F5DC; font-weight: 900;
                }
                .hero-divider {
                    width: 36px; height: 1.5px; background: #C9A84C; margin: 0 0 1.5rem 0;
                    opacity: 0; animation: up 0.8s 0.5s forwards;
                }
                .hero-tagline {
                    font-size: clamp(0.8rem, 1.2vw, 0.95rem); font-weight: 300;
                    color: rgba(245,245,220,0.75); line-height: 1.6; max-width: 420px; margin: 0;
                    opacity: 0; animation: up 0.8s 0.55s forwards;
                }
                .hero-bottom {
                    display: flex; flex-direction: column; gap: 2.5rem;
                    border-top: 1px solid rgba(245,245,220,0.08);
                    padding-top: 3rem; margin-top: 1rem;
                }
                .hero-features {
                    display: flex; align-items: center; flex-wrap: wrap; gap: 0.2rem;
                    opacity: 0; animation: up 0.8s 0.7s forwards;
                }
                .hero-feature {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.58rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
                    color: rgba(245,245,220,0.62); text-decoration: none;
                    padding: 0.3rem 0.55rem; border-radius: 4px;
                    transition: color 0.25s, background 0.25s;
                }
                .hero-feature:hover { color: #C9A84C; background: rgba(201,168,76,0.08); }
                .hero-feature-sep { color: rgba(201,168,76,0.3); font-size: 0.7rem; user-select: none; padding: 0 0.1rem; }
                .hero-actions {
                    display: flex; flex-direction: column; align-items: flex-start; gap: 1rem;
                    opacity: 0; animation: up 0.8s 0.8s forwards;
                }
                .stats {
                    border-top: 1px solid rgba(245,245,220,0.08);
                    border-bottom: 1px solid rgba(245,245,220,0.08);
                }
                .stats-row {
                    max-width: 1400px; margin: 0 auto;
                    padding: 1.5rem 4rem;
                    display: grid; grid-template-columns: repeat(4,1fr);
                }
                .stat { padding: 0 2rem; border-left: 1px solid rgba(201,168,76,0.2); }
                .stat-num { font-family: 'JetBrains Mono', monospace; font-size: 2.2rem; font-weight: 700; color: #F5F5DC; letter-spacing: -0.04em; line-height: 1; margin-bottom: 0.4rem; }
                .stat-num sup { color: #C9A84C; font-size: 1rem; }
                .stat-lbl { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(245,245,220,0.62); }
                .rep-teaser { max-width: 1400px; margin: 0 auto; padding: 6rem 4rem; }
                .rep-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: start; }
                .rep-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; color: #F5F5DC; margin: 0.75rem 0 1.5rem 0; }
                .rep-body { font-size: 0.92rem; font-weight: 300; color: rgba(245,245,220,0.75); line-height: 1.85; margin-bottom: 2rem; }
                .genre-grid { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-bottom: 2rem; }
                .track-list { display: flex; flex-direction: column; }
                .track-list .track-item:last-child { border-bottom: 1px solid rgba(245,245,220,0.06); }
                .s-wrap {
                    background: linear-gradient(180deg, transparent 0%, rgba(52,30,12,0.5) 30%, rgba(52,30,12,0.5) 70%, transparent 100%);
                    position: relative; overflow: hidden; border-radius: 16px; margin: 0 4rem;
                }
                .services { max-width: 1400px; margin: 0 auto; padding: 3rem 4rem 6rem 4rem; }
                .s-header { display: flex; justify-content: center; align-items: center; flex-direction: column; margin-bottom: 4rem; text-align: center; }
                .s-tag { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.35em; text-transform: uppercase; color: #C9A84C; margin-bottom: 1rem; }
                .s-title { font-family: 'Playfair Display', serif; font-size: clamp(3rem, 5.2vw, 5.5rem); font-weight: 900; line-height: 0.95; letter-spacing: -0.03em; color: #fff; }
                .s-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
                .s-card {
                    background: rgba(40,25,12,0.92); padding: 3.5rem;
                    position: relative; overflow: hidden; cursor: pointer;
                    border-radius: 16px; border: 1px solid rgba(201,168,76,0.25);
                    transition: background 0.4s, transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s;
                    display: flex; flex-direction: column;
                }
                .s-card::after {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.35), transparent);
                    transition: background 0.4s;
                }
                .s-card:hover { background: linear-gradient(135deg, rgba(50,28,10,0.98) 0%, rgba(38,22,10,0.98) 100%); transform: translateY(-5px); box-shadow: 0 16px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,76,0.2); }
                .s-card:hover::after { background: linear-gradient(90deg, transparent, #C9A84C, transparent); }
                .s-num { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; color: rgba(201,168,76,0.55); margin-bottom: 2rem; display: block; }
                .s-name { font-family: 'Playfair Display', serif; font-size: 1.9rem; font-weight: 900; letter-spacing: -0.02em; line-height: 1.05; margin-bottom: 1.2rem; color: #F5F5DC; }
                .s-desc { font-size: 0.88rem; font-weight: 300; color: rgba(245,245,220,0.75); line-height: 1.85; margin-bottom: 2rem; }
                .s-cta { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(201,168,76,0.62); text-decoration: none; display: inline-flex; align-items: center; gap: 0.6rem; margin-top: auto; transition: color 0.3s; }
                .s-cta::after { content: '\\2192'; transition: transform 0.3s; }
                .s-card:hover .s-cta { color: #C9A84C; }
                .s-card:hover .s-cta::after { transform: translateX(4px); }
                .cta-wrap { border-top: 1px solid rgba(245,245,220,0.08); }
                .cta-inner { max-width: 1400px; margin: 0 auto; padding: 8rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
                .cta-h2 { font-family: 'Playfair Display', serif; font-size: clamp(3rem, 5.5vw, 5.5rem); font-weight: 900; line-height: 0.92; letter-spacing: -0.04em; color: #F5F5DC; margin-bottom: 2rem; }
                .cta-h2 .azure { color: #C9A84C; text-shadow: 0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2); animation: goldPulse 3s ease-in-out infinite; }
                @keyframes goldPulse {
                    0%, 100% { text-shadow: 0 0 40px rgba(201,168,76,0.5), 0 0 80px rgba(201,168,76,0.2); }
                    50% { text-shadow: 0 0 60px rgba(201,168,76,0.75), 0 0 120px rgba(201,168,76,0.35); }
                }
                .cta-body { font-size: 0.95rem; font-weight: 300; color: rgba(245,245,220,0.75); line-height: 1.9; margin-bottom: 2.5rem; }
                .cta-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 1.2rem; }
                .testi-stack { display: flex; flex-direction: column; gap: 1.5rem; }
                @keyframes up {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 1100px) {
                    .hero-content { padding: 7rem 3.5rem 4rem 4rem; }
                    .cta-inner { gap: 4rem; }
                    .rep-inner { gap: 4rem; }
                }
                @media (max-width: 900px) {
                    .hero { grid-template-columns: 1fr; min-height: auto; }
                    .hero-image { height: 52vh; box-shadow: 0 20px 60px rgba(0,0,0,0.8); }
                    .hero-image img { object-position: top center; }
                    .hero-content { padding: 4rem 2.5rem; }
                    .hero-tagline { max-width: 100%; }
                    .stats-row { padding: 1.5rem 2rem; grid-template-columns: repeat(2,1fr); gap: 0.5rem; }
                    .stat { padding: 0.75rem 1.5rem; }
                    .rep-teaser { padding: 4rem 2.5rem; }
                    .rep-inner { grid-template-columns: 1fr; gap: 3rem; }
                    .s-wrap { margin: 0 1rem; }
                    .services { padding: 3rem 2rem 4rem; }
                    .s-grid { grid-template-columns: 1fr; }
                    .s-card { padding: 2.5rem; }
                    .cta-inner { grid-template-columns: 1fr; gap: 4rem; padding: 5rem 2.5rem; }
                }
                @media (max-width: 640px) {
                    .hero-content { padding: 3rem 1.5rem; }
                    .hero-features { gap: 0.4rem; }
                    .hero-feature-sep { display: none; }
                    .hero-feature { background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.2); border-radius: 20px; padding: 0.35rem 0.8rem; }
                    .stats-row { padding: 1rem 1.25rem; }
                    .stat-num { font-size: 1.7rem; }
                    .cta-inner { padding: 4rem 1.5rem; }
                }
            `}</style>

            <section className="hero" aria-labelledby="hero-heading">
                <picture className="hero-image">
                    <source srcSet="/maurice2.webp" type="image/webp" />
                    <img
                        src="/maurice2.jpg"
                        alt="Maurice Saelmans — livemuzikant op het podium"
                        fetchpriority="high"
                        width="800"
                        height="900"
                    />
                </picture>
                <div className="hero-content">
                    <div className="hero-center">
                        <p className="hero-role">Livemuzikant</p>
                        <h1 className="hero-h1" id="hero-heading">
                            <span className="name-first">Maurice</span>
                            <span className="name-last">Saelmans</span>
                        </h1>
                        <div className="hero-divider" aria-hidden="true"></div>
                        <p className="hero-tagline">Live muziek voor de momenten die herinnerd worden.<br />Elk optreden volledig op maat voor uw verhaal.</p>
                    </div>
                    <div className="hero-bottom">
                        <nav className="hero-features" aria-label="Evenementen">
                            <a href="#bruiloften" className="hero-feature">Bruiloften</a>
                            <span className="hero-feature-sep" aria-hidden="true">|</span>
                            <a href="#bedrijfsevents" className="hero-feature">Bedrijfsevents</a>
                            <span className="hero-feature-sep" aria-hidden="true">|</span>
                            <a href="#prive" className="hero-feature">Privé gelegenheden</a>
                        </nav>
                        <div className="hero-actions">
                            <Link href="/booking" className="btn-primary">Reserveer een optreden</Link>
                            <Link href="/services" className="btn-text">Ontdek het repertoire</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="stats">
                <div className="stats-row">
                    <div className="stat"><div className="stat-num">2000<sup>+</sup></div><div className="stat-lbl">Optredens uitgevoerd</div></div>
                    <div className="stat"><div className="stat-num">40<sup>jr</sup></div><div className="stat-lbl">Jaar muzikale ervaring</div></div>
                    <div className="stat"><div className="stat-num">5<sup>+</sup></div><div className="stat-lbl">Genres &amp; stijlen</div></div>
                    <div className="stat"><div className="stat-num">100<sup>%</sup></div><div className="stat-lbl">Op maat samengesteld</div></div>
                </div>
            </div>

            <section className="rep-teaser" id="repertoire" aria-labelledby="rep-heading">
                <div className="rep-inner">
                    <div className="reveal">
                        <span className="section-tag">Het repertoire</span>
                        <h2 className="rep-title" id="rep-heading">Een stem voor<br />elk verhaal</h2>
                        <p className="rep-body">Van tijdloze jazznummers tot hedendaagse hits — Maurice stemt zijn setlist volledig af op uw evenement en publiek. Geen vaststaand programma, maar een avond die aanvoelt als op maat gemaakt.</p>
                        <Link href="/services" className="btn-primary">Bekijk volledig repertoire</Link>
                    </div>
                    <div className="reveal" style={{transitionDelay: '0.15s'}}>
                        <div className="genre-grid">
                            <span className="genre-pill">♪ Jazz &amp; Soul</span>
                            <span className="genre-pill">♪ Pop &amp; Rock</span>
                            <span className="genre-pill">♪ Klassiek &amp; Musical</span>
                            <span className="genre-pill">♪ Nederlandstalig</span>
                            <span className="genre-pill">♪ Bossa Nova</span>
                            <span className="genre-pill">♪ Op verzoek</span>
                        </div>
                        <div className="track-list">
                            <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Wat een dag dat was</span><span className="track-note">Bruiloft / Romantisch</span></div></div>
                            <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Fly Me to the Moon</span><span className="track-note">Jazz / Gala</span></div></div>
                            <div className="track-item"><span className="track-icon" aria-hidden="true">♫</span><div className="track-info"><span className="track-name">Can't Help Falling in Love</span><span className="track-note">Pop / Romantisch</span></div></div>
                            <div className="track-item track-more"><span className="track-icon" aria-hidden="true">+</span><div className="track-info"><span className="track-name">300+ nummers beschikbaar</span><span className="track-note">Volledig aanpasbaar op verzoek</span></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="s-wrap">
                <section className="services" id="diensten" aria-labelledby="services-heading">
                    <div className="s-header">
                        <div>
                            <p className="s-tag">Wat ik doe</p>
                            <h2 className="s-title" id="services-heading">Drie <span style={{color: '#fff'}}>manieren</span><br />om te raken.</h2>
                        </div>
                    </div>
                    <div className="s-grid">
                        <div className="s-card reveal" id="bruiloften">
                            <span className="s-num" aria-hidden="true">01 / Bruiloften</span>
                            <h3 className="s-name">De dag die<br />nooit vervaagt</h3>
                            <p className="s-desc">Van het intreden tot de eerste dans — muziek die de emotie van uw dag draagt zonder te overheersen. Samengesteld rond uw verhaal.</p>
                            <Link href="/services" className="s-cta">Meer over bruiloften</Link>
                        </div>
                        <div className="s-card reveal" id="bedrijfsevents" style={{transitionDelay: '0.15s'}}>
                            <span className="s-num" aria-hidden="true">02 / Bedrijfsevenementen</span>
                            <h3 className="s-name">Aanwezigheid<br />die overtuigt</h3>
                            <p className="s-desc">Galas, productlanceringen, jaardinners. Live muziek die uw merk versterkt en gasten laat voelen dat dit geen gewone avond is.</p>
                            <Link href="/services" className="s-cta">Meer over events</Link>
                        </div>
                        <div className="s-card reveal" id="prive" style={{transitionDelay: '0.3s'}}>
                            <span className="s-num" aria-hidden="true">03 / Privé Evenementen</span>
                            <h3 className="s-name">Intiem<br />en onvergetelijk</h3>
                            <p className="s-desc">Verjaardagen, jubilea, privé diners. Wanneer het gezelschap klein is en de muziek groot mag zijn.</p>
                            <Link href="/services" className="s-cta">Meer over privé</Link>
                        </div>
                    </div>
                </section>
            </div>

            <section className="cta-wrap" aria-labelledby="cta-heading">
                <div className="cta-inner">
                    <div className="reveal">
                        <h2 className="cta-h2" id="cta-heading">Uw event<br />verdient<br />een <span className="azure">stem.</span></h2>
                        <p className="cta-body">Beschikbaarheid is beperkt. Elk evenement krijgt volledige aandacht — geen vaste setlists, geen standaard optredens. Neem contact op voor een vrijblijvend gesprek over uw dag.</p>
                        <div className="cta-actions">
                            <Link href="/booking" className="btn-primary">Plan een gesprek</Link>
                            <Link href="/contact" className="btn-text">Of stel direct een vraag</Link>
                        </div>
                    </div>
                    <div className="testi-stack reveal" style={{transitionDelay: '0.2s'}}>
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
        </Layout>
    );
}
