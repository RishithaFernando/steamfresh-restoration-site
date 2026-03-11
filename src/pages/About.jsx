import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './About.css';

export default function About() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            <Helmet>
                <title>About Us | SteamFresh Carpet Cleaning Melbourne</title>
                <meta name="description" content="Learn about SteamFresh, Melbourne's premium water damage restoration and carpet cleaning team." />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="service-hero bg-ice">
                <div className="sh-geometry"></div>
                <div className="hero-dots"></div>
                <div className="container sh-container">
                    <div className="sh-content reveal">
                        <div className="sh-badge">
                            🏢 Our Company
                        </div>
                        <h1 className="sh-title">Melbourne's Most Trusted Restorers</h1>
                        <p className="sh-desc">With over 15 years of industry experience, SteamFresh Carpet Cleaning is the premier choice for professional restoration services across Victoria.</p>
                    </div>
                </div>
            </section>

            {/* 2. STORY SECTION */}
            <section className="about-story bg-white section-padding">
                <div className="container overview-grid">
                    <div className="overview-left reveal">
                        <span className="section-label">OUR STORY</span>
                        <h2 className="section-title">Built on Trust and Technical Excellence</h2>
                        <p className="overview-p">Founded as a small, family-operated service, SteamFresh has grown into one of Melbourne's leading independent restoration companies. We didn't scale by cutting corners; we scaled by investing heavily in the world's best drying technology and the most rigorous training available.</p>
                        <p className="overview-p">When disaster strikes, you need an empathetic professional. Our core mission is not just to extract water, but to restore peace of mind during one of the most stressful events a property owner can face.</p>
                    </div>
                    <div className="overview-right reveal">
                        <img
                            src="/team_photo.png"
                            alt="SteamFresh Team"
                            style={{
                                width: '100%',
                                height: '440px',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                borderRadius: '24px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* 3. WHY CHOOSE US */}
            <section className="about-why bg-ink section-padding">
                <div className="container text-center reveal">
                    <span className="section-label text-center" style={{ margin: '0 auto' }}>THE STEAMFRESH DIFFERENCE</span>
                    <h2 className="section-title text-white" style={{ marginBottom: '64px' }}>Why Choose Us</h2>

                    <div className="about-why-grid text-left" style={{ textAlign: 'left' }}>
                        <div className="a-feature-card bg-ink-80">
                            <div className="af-icon">⚡</div>
                            <h3 className="af-title text-white">Technically Superior</h3>
                            <p className="text-ink-20">We utilise advanced thermal imaging and weighted subsurface extraction tools that our competitors simply don't carry.</p>
                        </div>
                        <div className="a-feature-card bg-ink-80">
                            <div className="af-icon">🤝</div>
                            <h3 className="af-title text-white">Transparent & Honest</h3>
                            <p className="text-ink-20">We provide itemised quotes and comprehensive moisture mapping reports. No hidden fees, no unnecessary services.</p>
                        </div>
                        <div className="a-feature-card bg-ink-80">
                            <div className="af-icon">🚑</div>
                            <h3 className="af-title text-white">Always Available</h3>
                            <p className="text-ink-20">Disasters don't wait for business hours. When you call us at 2am, a real restoration expert answers the phone.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. OUR PROCESS (Reused layout) */}
            <section className="service-process bg-ice section-padding">
                <div className="container sp-layout">
                    <div className="reveal">
                        <span className="section-label">HOW WE WORK</span>
                        <h2 className="section-title" style={{ marginBottom: '40px' }}>Our 6-Step Process</h2>

                        <div className="sp-list">
                            {[
                                { title: 'Assessment', desc: 'Detailed inspection to determine the scope of damage and required action.' },
                                { title: 'Extraction', desc: 'Rapid removal of standing water using industrial-grade extraction units.' },
                                { title: 'Drying', desc: 'Deployment of air movers and dehumidifiers to remove remaining moisture.' },
                                { title: 'Sanitisation', desc: 'Antimicrobial treatments applied to prevent mould and bacterial growth.' },
                                { title: 'Restoration', desc: 'Final cleaning, repairs, and restoration to pre-loss condition.' },
                                { title: 'Documentation', desc: 'Comprehensive reporting provided for seamless insurance claims.' }
                            ].map((step, idx) => (
                                <div key={idx} className="sp-step reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                    <div className="sp-num" style={{ backgroundColor: 'var(--ink)' }}>{idx + 1}</div>
                                    <div className="sp-content">
                                        <h3 className="sp-step-title">{step.title}</h3>
                                        <p className="sp-step-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TEAM SECTION */}
            <section className="about-team bg-white section-padding text-center">
                <div className="container reveal">
                    <div className="team-card">
                        <span className="section-label" style={{ margin: '0 auto' }}>OUR PEOPLE</span>
                        <h2 className="section-title" style={{ marginBottom: '24px' }}>The SteamFresh Team</h2>
                        <p className="team-desc" style={{ fontSize: '18px', color: 'var(--ink-60)', maxWidth: '800px', margin: '0 auto 40px auto', lineHeight: '1.7' }}>
                            Our technicians are IICRC certified and undergo rigorous ongoing training. We are fully insured, police-checked, and committed to treating your property with the utmost respect and care. When we arrive on site, we take immediate control of the situation to minimise your stress and final costs.
                        </p>
                        <img
                            src="https://images.unsplash.com/photo-1558203728-00f45181dd84?auto=format&fit=crop&q=80&w=1200"
                            alt="SteamFresh Fleet"
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '24px',
                                marginTop: '24px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* 6. EMERGENCY CTA */}
            <section className="emergency-cta-section bg-red text-center" style={{ padding: '80px 5%' }}>
                <div className="container reveal text-center">
                    <span className="section-label text-center mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>EMERGENCY SERVICE</span>
                    <h2 className="section-title text-white text-center" style={{ marginBottom: '16px' }}>We Are Ready to Help</h2>
                    <p className="text-white text-center mx-auto" style={{ opacity: 0.9, fontSize: '20px', marginBottom: '40px', maxWidth: '600px' }}>Don't wait. Every minute counts when mitigating water damage.</p>

                    <a href="tel:0413943154" className="button-primary emergency-btn floating bg-white text-red mx-auto text-center" style={{ color: 'var(--red)', backgroundColor: 'var(--white)' }}>
                        📞 Call 0413 943 154 — We Answer Now
                    </a>
                </div>
            </section>

        </div>
    );
}

