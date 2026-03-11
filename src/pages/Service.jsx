import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Service.css';

const allServicesData = [
    { icon: '🌊', title: 'Flood Damage Restoration', link: '/flood-restoration' },
    { icon: '💧', title: 'Water Damage Restoration', link: '/water-damage' },
    { icon: '🌀', title: 'Wet Carpet Restoration', link: '/wet-carpet' },
    { icon: '🛋️', title: 'Upholstery Cleaning', link: '/upholstery' },
    { icon: '⬜', title: 'Tile and Grout Cleaning', link: '/tile-grout' },
    { icon: '📄', title: 'Insurance Claims Assistance', link: '/insurance-claims' }
];

export default function Service({
    serviceId,
    icon = '🛠️',
    title,
    desc,
    subtitle,
    heroImg,
    overviewH2,
    overviewText,
    overviewP1,
    overviewP2,
    checklist,
    features,
    process
}) {
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal, .reveal-child').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [serviceId]);

    const otherServices = allServicesData.filter(s => s.link !== `/${serviceId}`);

    return (
        <div className="service-page">
            <Helmet>
                <title>{title} | SteamFresh Melbourne</title>
                <meta name="description" content={desc} />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="service-hero bg-ice">
                <div className="sh-geometry"></div>
                <div className="hero-dots"></div>
                <div className="container sh-container">
                    <div className="sh-content reveal">
                        <button onClick={() => navigate(-1)} className="back-btn">
                            ← Back
                        </button>
                        <div className="sh-badge">
                            {icon} {title}
                        </div>
                        <h1 className="sh-title">{title}</h1>
                        <p className="sh-desc">{desc}</p>
                        <div className="sh-buttons">
                            <a href="tel:0413943154" className="button-primary">📞 Call Now</a>
                            <button className="button-outline" onClick={() => document.getElementById('service-quote')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get Free Quote
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. OVERVIEW SECTION */}
            <section className="service-overview bg-white section-padding">
                <div className="container overview-grid">
                    <div className="overview-left reveal">
                        <span className="section-label">OVERVIEW</span>
                        <h2 className="section-title">{overviewH2 || subtitle}</h2>

                        {overviewText ? (
                            <p className="overview-p">{overviewText}</p>
                        ) : (
                            <>
                                <p className="overview-p">{overviewP1}</p>
                                <p className="overview-p">{overviewP2}</p>
                            </>
                        )}

                        {checklist && (
                            <ul className="overview-checklist">
                                {checklist.map((item, idx) => (
                                    <li key={idx}>
                                        <span className="check-icon">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="overview-right reveal">
                        <img src={heroImg} alt={title} className="service-overview-img" />
                    </div>
                </div>
            </section>

            {/* 3. FEATURES GRID */}
            <section className="service-features bg-ice section-padding">
                <div className="container text-center reveal">
                    <h2 className="section-title text-center mx-auto" style={{ textAlign: 'center', marginBottom: '48px' }}>Why Choose Our {title} Service</h2>
                    <div className="s-features-grid text-left" style={{ textAlign: 'left' }}>
                        {features.map((feat, idx) => (
                            <div key={idx} className="s-feature-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="sf-icon text-red">{feat.icon || '✓'}</div>
                                <h3 className="sf-title">{feat.title || feat}</h3>
                                {feat.desc && <p className="sf-desc">{feat.desc}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. PROCESS SECTION */}
            <section className="service-process bg-white section-padding">
                <div className="container sp-layout">
                    <div className="reveal">
                        <span className="section-label">HOW IT WORKS</span>
                        <h2 className="section-title" style={{ marginBottom: '40px' }}>Our {title} Process</h2>

                        <div className="sp-list">
                            {process.map((step, idx) => (
                                <div key={idx} className="sp-step reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                    <div className="sp-num">{idx + 1}</div>
                                    <div className="sp-content">
                                        <h3 className="sp-step-title">{step.title || step.step}</h3>
                                        <p className="sp-step-desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. QUOTE FORM */}
            <section id="service-quote" className="service-quote bg-ink section-padding">
                <div className="container text-center reveal">
                    <h2 className="section-title text-white" style={{ textAlign: 'center', marginBottom: '48px' }}>Request a Free Quote</h2>
                    <div className="sq-form-wrapper">
                        <form className="quote-form bg-ink-80 text-left" onSubmit={(e) => { e.preventDefault(); alert("Quote Request Submitted Successfully!"); }}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" required placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" required placeholder="0400 000 000" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" required placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Suburb</label>
                                    <input type="text" required placeholder="e.g. Richmond" />
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Service Required</label>
                                <select required defaultValue={serviceId}>
                                    <option value="flood-restoration">Flood Damage Restoration</option>
                                    <option value="water-damage">Water Damage Restoration</option>
                                    <option value="wet-carpet">Wet Carpet Restoration</option>
                                    <option value="upholstery">Upholstery Cleaning</option>
                                    <option value="tile-grout">Tile and Grout Cleaning</option>
                                    <option value="insurance-claims">Insurance Claims Assistance</option>
                                </select>
                            </div>
                            <div className="form-group full-width">
                                <label>Description of Issue</label>
                                <textarea rows="4" placeholder="Briefly describe what happened..." required></textarea>
                            </div>
                            <button type="submit" className="button-primary submit-btn">Request Free Quote →</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 6. OTHER SERVICES */}
            <section className="service-others bg-ice section-padding">
                <div className="container reveal">
                    <h2 className="section-title">Other Services</h2>
                    <div className="so-grid">
                        {otherServices.map((srv, idx) => (
                            <Link key={idx} to={srv.link} className="so-card">
                                <span className="so-icon">{srv.icon}</span>
                                <span className="so-title">{srv.title}</span>
                                <span className="so-link text-red">Learn more →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA STRIP */}
            <section className="service-cta bg-red section-padding text-center">
                <div className="container reveal text-center">
                    <h2 className="section-title text-white mx-auto" style={{ textAlign: 'center', marginBottom: '16px' }}>Ready to Get Started?</h2>
                    <p className="text-white mx-auto" style={{ opacity: 0.9, fontSize: '20px', marginBottom: '32px', maxWidth: '600px' }}>Contact us today to schedule your service or request emergency assistance.</p>
                    <a href="tel:0413943154" className="button-primary bg-white text-red mx-auto text-center" style={{ backgroundColor: 'var(--white)', color: 'var(--red)' }}>
                        📞 Call 0413 943 154
                    </a>
                </div>
            </section>

        </div>
    );
}

