import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';

export default function Layout({ children, active }) {
    const glowRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!window.matchMedia('(pointer: fine)').matches) return;
        const move = e => {
            if (glowRef.current) {
                glowRef.current.style.left = e.clientX + 'px';
                glowRef.current.style.top  = e.clientY + 'px';
            }
        };
        document.addEventListener('mousemove', move);
        return () => document.removeEventListener('mousemove', move);
    }, []);

    return (
        <>
            <style>{`
                *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
                html { scroll-behavior: smooth; }
                body {
                    background: linear-gradient(160deg, #1C1408 0%, #231709 40%, #1A1207 70%, #1E1508 100%);
                    background-attachment: fixed;
                    color: #F5F5DC;
                    font-family: 'Inter', sans-serif;
                    overflow-x: hidden;
                }
                body::after {
                    content: '';
                    position: fixed; inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
                    pointer-events: none; z-index: 9999;
                }
                .skip-link {
                    position: absolute; top: -100%; left: 1rem;
                    background: #C9A84C; color: #0A0A0A;
                    padding: 0.5rem 1.2rem; z-index: 10000;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em;
                    border-radius: 0 0 8px 8px; text-decoration: none;
                    transition: top 0.2s;
                }
                .skip-link:focus { top: 0; }
                :focus-visible { outline: 2px solid #C9A84C; outline-offset: 3px; border-radius: 4px; }
                #cursor-glow {
                    position: fixed; width: 500px; height: 500px; border-radius: 50%;
                    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
                    pointer-events: none; z-index: 998;
                    transform: translate(-50%, -50%);
                    transition: left 0.08s, top 0.08s;
                }
                .topbar {
                    position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
                    display: flex; align-items: center; justify-content: space-between;
                    padding: 0 2.5rem; height: 64px;
                    background: rgba(20,13,7,0.9);
                    backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
                    border-bottom: 1px solid rgba(201,168,76,0.2);
                }
                .topbar-logo { text-decoration: none; line-height: 1; }
                .topbar-logo .logo-eyebrow {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.55rem; letter-spacing: 0.35em; text-transform: uppercase;
                    color: rgba(245,245,220,0.45); display: block; margin-bottom: 0.15rem;
                }
                .topbar-logo .logo-name {
                    font-family: 'Playfair Display', serif;
                    font-size: 1.25rem; font-weight: 900; color: #F5F5DC; letter-spacing: -0.02em;
                }
                .topbar-links { display: flex; align-items: center; gap: 0.25rem; }
                .topbar-link {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.62rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
                    color: rgba(245,245,220,0.5); text-decoration: none;
                    padding: 0.5rem 1rem; border-radius: 8px;
                    transition: color 0.2s, background 0.2s;
                }
                .topbar-link:hover, .topbar-link.active { color: #F5F5DC; background: rgba(201,168,76,0.1); }
                .topbar-link.active { color: #C9A84C; }
                .topbar-cta {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.62rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
                    color: #0A0A0A; background: #C9A84C; text-decoration: none;
                    padding: 0.5rem 1.2rem; border-radius: 8px;
                    transition: background 0.2s, transform 0.15s; margin-left: 0.5rem;
                }
                .topbar-cta:hover { background: #B8943E; transform: translateY(-1px); }
                .topbar-menu-btn {
                    display: none; flex-direction: column; justify-content: center;
                    align-items: center; gap: 5px;
                    width: 36px; height: 36px; background: none; border: none;
                    cursor: pointer; padding: 6px;
                }
                .topbar-menu-btn span {
                    display: block; width: 22px; height: 1.5px;
                    background: rgba(245,245,220,0.7); transition: all 0.3s;
                }
                .section-tag {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.6rem; letter-spacing: 0.35em; text-transform: uppercase;
                    color: #C9A84C; display: block; margin-bottom: 1rem;
                }
                .btn-primary {
                    display: inline-block; padding: 0.85rem 2rem;
                    background: #C9A84C; color: #0A0A0A;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.65rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;
                    text-decoration: none; border-radius: 8px;
                    transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
                    box-shadow: 0 4px 20px rgba(201,168,76,0.3);
                }
                .btn-primary:hover { background: #B8943E; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(201,168,76,0.45); }
                .btn-outline {
                    display: inline-block; padding: 0.7rem 1.5rem;
                    background: transparent; border: 1px solid rgba(201,168,76,0.45);
                    color: #C9A84C; font-family: 'JetBrains Mono', monospace;
                    font-size: 0.62rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase;
                    text-decoration: none; border-radius: 6px;
                    transition: background 0.3s, border-color 0.3s;
                }
                .btn-outline:hover { background: rgba(201,168,76,0.12); border-color: rgba(201,168,76,0.75); }
                .btn-text {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase;
                    color: rgba(245,245,220,0.55); text-decoration: none;
                    display: inline-flex; align-items: center; gap: 0.6rem; transition: color 0.3s;
                }
                .btn-text::after { content: '\\2192'; transition: transform 0.3s; }
                .btn-text:hover { color: #F5F5DC; }
                .btn-text:hover::after { transform: translateX(5px); }
                .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
                .reveal.is-visible { opacity: 1; transform: translateY(0); }
                .testimonial {
                    background: rgba(40,25,12,0.6);
                    border: 1px solid rgba(201,168,76,0.18);
                    border-left: 3px solid rgba(201,168,76,0.5);
                    border-radius: 0 12px 12px 0;
                    padding: 1.8rem 2rem 1.5rem 1.8rem; position: relative;
                }
                .testimonial::before {
                    content: '\\201C'; position: absolute; top: 0.6rem; right: 1.4rem;
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem; line-height: 1; color: rgba(201,168,76,0.15);
                    pointer-events: none;
                }
                .testimonial blockquote p {
                    font-size: 0.88rem; font-weight: 300;
                    color: rgba(245,245,220,0.82); line-height: 1.75;
                    font-style: italic; margin-bottom: 1rem;
                }
                .testimonial figcaption { display: flex; flex-direction: column; gap: 0.15rem; }
                .t-name { font-family: 'JetBrains Mono', monospace; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; color: #C9A84C; }
                .t-role { font-family: 'JetBrains Mono', monospace; font-size: 0.58rem; letter-spacing: 0.08em; color: rgba(245,245,220,0.4); }
                .genre-pill {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 0.58rem; letter-spacing: 0.14em; text-transform: uppercase;
                    color: #C9A84C; background: rgba(201,168,76,0.1);
                    border: 1px solid rgba(201,168,76,0.28);
                    padding: 0.38rem 0.8rem; border-radius: 20px;
                }
                .track-item {
                    display: flex; align-items: center; gap: 1rem;
                    padding: 0.85rem 0.75rem;
                    border-top: 1px solid rgba(245,245,220,0.06);
                    transition: background 0.2s; border-radius: 6px;
                }
                .track-item:hover { background: rgba(201,168,76,0.05); }
                .track-icon { font-size: 1rem; color: rgba(201,168,76,0.5); min-width: 1.5rem; text-align: center; }
                .track-more .track-icon { color: rgba(245,245,220,0.28); }
                .track-info { display: flex; flex-direction: column; gap: 0.12rem; }
                .track-name { font-size: 0.85rem; font-weight: 400; color: rgba(245,245,220,0.85); }
                .track-note { font-family: 'JetBrains Mono', monospace; font-size: 0.54rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(245,245,220,0.4); }
                footer {
                    border-top: 1px solid rgba(201,168,76,0.1);
                    background: linear-gradient(180deg, rgba(18,11,5,1) 0%, rgba(12,8,4,1) 100%);
                    padding: 2.5rem 4rem;
                }
                .footer-row { max-width: 1400px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
                .footer-left { display: flex; flex-direction: column; gap: 0.3rem; }
                .footer-brand { font-family: 'Playfair Display', serif; font-size: 0.9rem; font-weight: 700; color: rgba(245,245,220,0.45); }
                .footer-copy { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.15em; color: rgba(255,255,255,0.2); }
                .footer-nav { display: flex; gap: 2.5rem; }
                .footer-nav a { font-family: 'JetBrains Mono', monospace; font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.3s; }
                .footer-nav a:hover, .footer-nav a.active { color: #C9A84C; }
                @media (max-width: 900px) {
                    .topbar-links { display: none; }
                    .topbar-links.is-open {
                        display: flex; flex-direction: column; align-items: stretch;
                        position: fixed; top: 64px; left: 0; right: 0;
                        background: rgba(20,13,7,0.98); backdrop-filter: blur(18px);
                        border-bottom: 1px solid rgba(201,168,76,0.2);
                        padding: 0.75rem 1rem 1rem; z-index: 999;
                    }
                    .topbar-links.is-open .topbar-link,
                    .topbar-links.is-open .topbar-cta {
                        text-align: center; padding: 0.85rem; margin-left: 0; border-radius: 8px;
                    }
                    .topbar-menu-btn { display: flex; }
                    footer { padding: 2rem 2.5rem; }
                    .footer-row { flex-direction: column; gap: 1.5rem; text-align: center; align-items: center; }
                    .footer-nav { flex-wrap: wrap; justify-content: center; gap: 1.25rem; }
                }
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
                    .reveal { opacity: 1; transform: none; }
                }
            `}</style>

            <a href="#main" className="skip-link">Ga naar inhoud</a>
            <div id="cursor-glow" ref={glowRef} aria-hidden="true"></div>

            <nav className="topbar" role="navigation" aria-label="Hoofdnavigatie">
                <Link href="/" className="topbar-logo">
                    <span className="logo-eyebrow">Muzikant sinds 1986</span>
                    <span className="logo-name">Morris Productions</span>
                </Link>
                <div className={`topbar-links${menuOpen ? ' is-open' : ''}`} id="topbar-links">
                    <Link href="/" className={`topbar-link${active === 'home' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/services" className={`topbar-link${active === 'services' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Diensten</Link>
                    <Link href="/contact" className={`topbar-link${active === 'contact' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Contact</Link>
                    <Link href="/booking" className={`topbar-cta${active === 'booking' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Reserveer</Link>
                </div>
                <button
                    className="topbar-menu-btn"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'}
                    aria-controls="topbar-links"
                >
                    <span></span><span></span><span></span>
                </button>
            </nav>

            <main id="main">
                {children}
            </main>

            <footer>
                <div className="footer-row">
                    <div className="footer-left">
                        <span className="footer-brand">Morris Productions</span>
                        <span className="footer-copy">&copy; {new Date().getFullYear()} &mdash; Alle rechten voorbehouden</span>
                    </div>
                    <nav className="footer-nav" aria-label="Footer navigatie">
                        <Link href="/" className={active === 'home' ? 'active' : ''}>Home</Link>
                        <Link href="/services" className={active === 'services' ? 'active' : ''}>Diensten</Link>
                        <Link href="/booking">Reserveer</Link>
                        <Link href="/contact" className={active === 'contact' ? 'active' : ''}>Contact</Link>
                    </nav>
                </div>
            </footer>
        </>
    );
}
