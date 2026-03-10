import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Waves, Droplets, Wind, Sofa, Grid, FileText } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import EquipmentFeature from '../components/EquipmentFeature';
import SuccessModal from '../components/SuccessModal';
import './Home.css';

// Custom hook for scroll revealing
function useScrollReveal() {
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
    }, []);
}

// Custom hook for count up animation
function useCountUp(end, duration = 2000, start = 0) {
    const [count, setCount] = useState(start);
    const countRef = useRef(null);

    useEffect(() => {
        let startTime = null;
        let animationFrame;
        let isIntersecting = false;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                isIntersecting = true;
                animationFrame = requestAnimationFrame(animate);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(start + (end - start) * percentage));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            observer.disconnect();
        };
    }, [end, duration, start]);

    return { count, countRef };
}

const StatItem = ({ end, suffix, label }) => {
    const { count, countRef } = useCountUp(end);
    return (
        <div className="stat-item" ref={countRef}>
            <div className="stat-number">{count}{suffix}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default function Home() {
    useScrollReveal();

    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        submessage: '',
        redirectUrl: ''
    });

    const services = [
        { icon: <Waves size={26} strokeWidth={1.5} />, title: 'Flood Damage Restoration', desc: 'Emergency flood response and complete restoration', link: '/flood-restoration' },
        { icon: <Droplets size={26} strokeWidth={1.5} />, title: 'Water Damage Restoration', desc: 'Fast extraction and drying to prevent mould', link: '/water-damage' },
        { icon: <Wind size={26} strokeWidth={1.5} />, title: 'Wet Carpet Restoration', desc: 'Industrial drying that saves your flooring', link: '/wet-carpet' },
        { icon: <Sofa size={26} strokeWidth={1.5} />, title: 'Upholstery Cleaning', desc: 'Deep clean for all fabric furniture', link: '/upholstery' },
        { icon: <Grid size={26} strokeWidth={1.5} />, title: 'Tile and Grout Cleaning', desc: 'Steam cleaning for tiles and grout lines', link: '/tile-grout' },
        { icon: <FileText size={26} strokeWidth={1.5} />, title: 'Insurance Claims Assistance', desc: 'Full documentation and insurer liaison', link: '/insurance-claims' }
    ];

    const handleQuoteSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const name = formData.get('user_name');
        const phone = formData.get('user_phone');
        const email = formData.get('user_email');
        const suburb = formData.get('user_suburb');
        const service = formData.get('service_required');
        const message = formData.get('message');

        const whatsappMessage = `*New Quote Request*%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Email:* ${email}%0A` +
            `*Suburb:* ${suburb}%0A` +
            `*Service:* ${service}%0A` +
            `*Description:* ${message}`;

        const whatsappUrl = `https://wa.me/61413943154?text=${whatsappMessage}`;

        setModalConfig({
            isOpen: true,
            message: "Quote Request Sent!",
            submessage: "We've received your request. Click below to continue to WhatsApp and chat with our team directly.",
            redirectUrl: whatsappUrl
        });

        e.target.reset();
    };

    return (
        <div className="home-page">
            <Helmet>
                <title>Water Damage Carpet Cleaning Melbourne | SteamFresh | 24/7 Emergency</title>
                <meta name="description" content="Professional flood damage restoration and carpet cleaning across Melbourne. Fast, thorough, and available every hour of every day." />
            </Helmet>

            {/* SECTION 1 - HERO */}
            <section className="hero-section">
                <div className="hero-geometry"></div>
                <div className="hero-dots"></div>
                <div className="container hero-container">

                    <div className="hero-left">
                        <div className="hero-badge reveal" style={{ transitionDelay: '0.1s' }}>
                            <span className="pulse-dot"></span>
                            Available 24/7 · Melbourne's Trusted Specialists
                        </div>

                        <h1 className="hero-title reveal" style={{ transitionDelay: '0.2s' }}>
                            When Disaster Strikes, We <span className="text-red underbar-red">Restore.</span>
                        </h1>

                        <p className="hero-text reveal" style={{ transitionDelay: '0.3s' }}>
                            Professional flood damage restoration and carpet cleaning across Melbourne. Fast, thorough, and available every hour of every day.
                        </p>

                        <div className="hero-buttons reveal" style={{ transitionDelay: '0.4s' }}>
                            <a href="tel:0413943154" className="button-primary">
                                📞 Call Now — 0413 943 154
                            </a>
                            <button
                                className="button-outline"
                                onClick={() => document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get Free Quote
                            </button>
                        </div>

                        <div className="hero-trust-row reveal" style={{ transitionDelay: '0.5s' }}>
                            <span className="trust-item">⚡ 60-min response</span>
                            <span className="trust-item">🛡️ Mould prevention</span>
                            <span className="trust-item">📋 Insurance assisted</span>
                            <span className="trust-item">⭐ 5.0 Google rated</span>
                        </div>
                    </div>

                    <div className="hero-right reveal" style={{ transitionDelay: '0.3s' }}>
                        <div className="response-card">
                            <div className="response-header">
                                <span className="status-badge green">
                                    <span className="pulse-dot green"></span> Online
                                </span>
                                <h3 className="response-title">Response Status: Active Now</h3>
                            </div>

                            <div className="response-time">
                                <span className="time-number">60</span>
                                <span className="time-unit">minutes</span>
                                <span className="time-label">Average Response Time</span>
                            </div>

                            <div className="service-availability">
                                <div className="service-row">
                                    <span>Flood Restoration</span>
                                    <span className="badge-available">Available</span>
                                </div>
                                <div className="service-row">
                                    <span>Water Damage</span>
                                    <span className="badge-available">Available</span>
                                </div>
                                <div className="service-row">
                                    <span>Wet Carpet</span>
                                    <span className="badge-available">Available</span>
                                </div>
                            </div>
                        </div>

                        <div className="floating-review-card floating">
                            <span className="review-label">Google Rating</span>
                            <span className="review-stars text-amber">★★★★★</span>
                            <div className="review-score">
                                <span className="score-num">5.0</span>
                                <span className="score-count">21 reviews</span>
                            </div>
                        </div>
                    </div>
                </div>

                <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                    <path fill="var(--ice)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
            </section>

            {/* SECTION 2 - MARQUEE TRUST BAR */}
            <section className="marquee-section bg-ice">
                <div className="marquee-container">
                    <div className="marquee-content">
                        <span className="marquee-item">⭐ 5.0 Google Rating</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">🏆 15+ Years</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">🚐 24/7 Response</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">🏅 Insurance Approved</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">💧 Own Power Supply</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">📍 All Melbourne Suburbs</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">✅ 100% Satisfaction</span>
                    </div>
                    {/* Duplicate for seamless scrolling */}
                    <div className="marquee-content" aria-hidden="true">
                        <span className="marquee-item">⭐ 5.0 Google Rating</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">🏆 15+ Years</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">🚐 24/7 Response</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">🏅 Insurance Approved</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">💧 Own Power Supply</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">📍 All Melbourne Suburbs</span>
                        <span className="marquee-separator">·</span>
                        <span className="marquee-item">✅ 100% Satisfaction</span>
                    </div>
                </div>
            </section>

            {/* SECTION 3 - STATS */}
            <section className="stats-section bg-ice section-padding">
                <div className="container">
                    <div className="stats-card reveal">
                        <StatItem end={500} suffix="+" label="JOBS COMPLETED" />
                        <StatItem end={15} suffix="+" label="YEARS EXPERIENCE" />
                        <StatItem end={60} suffix="min" label="AVG RESPONSE TIME" />
                        <StatItem end={100} suffix="%" label="SATISFACTION RATE" />
                    </div>
                </div>
            </section>

            {/* SECTION 4 - SERVICES GRID */}
            <section className="services-section bg-white section-padding">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-label">OUR SERVICES</span>
                        <h2 className="section-title">Everything Your Property Needs</h2>
                        <p className="section-desc">We offer specialized restoration and cleaning services designed to bring your property back to its pre-loss condition quickly and efficiently.</p>
                    </div>

                    <div className="services-grid">
                        {services.map((service, idx) => (
                            <Link to={service.link} key={idx} className="service-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="service-icon-box">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                                <div className="service-link">
                                    Learn more
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                                <div className="service-watermark">{service.icon}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5 - WHY US */}
            <section className="why-us-section bg-ink section-padding">
                <div className="container why-us-grid">
                    <div className="why-us-left reveal">
                        <span className="section-label">WHY STEAMFRESH</span>
                        <h2 className="section-title text-white">Melbourne's Most Trusted Restorers</h2>
                        <p className="section-desc text-ink-20">We don't just extract water; we restore peace of mind. Our state-of-the-art equipment and highly trained team ensure your property is treated with the utmost care.</p>
                        <a href="tel:0413943154" className="button-primary">
                            📞 Call Now — 0413 943 154
                        </a>
                    </div>

                    <div className="why-us-right">
                        {[
                            { icon: '⚡', title: 'Self-Sufficient Team', desc: 'Own generators and water supply, ready when power is down.' },
                            { icon: '🕐', title: 'True 24/7 Response', desc: 'Real person answers immediately, any time of day or night.' },
                            { icon: '🦠', title: 'Mould Prevention First', desc: 'Eliminate moisture completely before it becomes a health hazard.' },
                            { icon: '📋', title: 'Free Insurance Support', desc: 'Comprehensive documentation and liaison at no extra cost.' },
                            { icon: '🏅', title: 'Guaranteed Satisfaction', desc: 'We do not invoice until you are completely satisfied.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="feature-row reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h4 className="feature-title text-white">{feature.title}</h4>
                                    <p className="feature-desc text-ink-40">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: EQUIPMENT FEATURE */}
            <EquipmentFeature />

            {/* SECTION 6 - PROCESS */}
            <section className="process-section bg-ice section-padding">
                <div className="container">
                    <div className="text-center reveal" style={{ marginBottom: '64px' }}>
                        <span className="section-label" style={{ textAlign: 'center' }}>OUR PROCESS</span>
                        <h2 className="section-title" style={{ textAlign: 'center' }}>How We Restore Your Property</h2>
                    </div>

                    <div className="process-grid">
                        {[
                            { num: '01', title: 'Assessment', desc: 'Detailed inspection to determine the scope of damage and required action.' },
                            { num: '02', title: 'Extraction', desc: 'Rapid removal of standing water using industrial-grade extraction units.' },
                            { num: '03', title: 'Drying', desc: 'Deployment of air movers and dehumidifiers to remove remaining moisture.' },
                            { num: '04', title: 'Sanitisation', desc: 'Antimicrobial treatments applied to prevent mould and bacterial growth.' },
                            { num: '05', title: 'Restoration', desc: 'Final cleaning, repairs, and restoration to pre-loss condition.' },
                            { num: '06', title: 'Documentation', desc: 'Comprehensive reporting provided for seamless insurance claims.' }
                        ].map((step, idx) => (
                            <div key={idx} className="process-card reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="process-number">{step.num}</div>
                                <div className="process-line"></div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW SECTION: BEFORE & AFTER SLIDER */}
            <BeforeAfterSlider />

            {/* SECTION 7 - TESTIMONIALS */}
            <section className="testimonials-section bg-white section-padding">
                <div className="container testimonials-header">
                    <div className="reveal">
                        <span className="section-label">CLIENT REVIEWS</span>
                        <h2 className="section-title">What Our Clients Are Saying</h2>
                    </div>
                    <div className="testimonial-nav reveal">
                        <button className="nav-btn" onClick={() => document.getElementById('test-carousel').scrollBy({ left: -400, behavior: 'smooth' })}>←</button>
                        <button className="nav-btn" onClick={() => document.getElementById('test-carousel').scrollBy({ left: 400, behavior: 'smooth' })}>→</button>
                    </div>
                </div>

                <div id="test-carousel" className="testimonial-carousel reveal">
                    {[
                        { initial: 'M', name: 'Michael Murphy', loc: 'Glen Waverley', quote: "Our damp carpet received prompt and competent treatment from SteamFresh. Thank you for the useful tips and the efficient tools — exceptional service." },
                        { initial: 'R', name: 'Robert Smith', loc: 'Berwick', quote: "SteamFresh is by far the best water repair company I have experienced. Their professionalism, customer service, and results were all outstanding." },
                        { initial: 'G', name: 'Georgia T', loc: 'Narre Warren', quote: "Their cleaners arrived on time and did an excellent job. Flexible, kind, and completely professional. Left me feeling they genuinely cared about my home." },
                        { initial: 'Y', name: 'Yummy TV', loc: 'Cranbourne', quote: "They dried my carpet in under 2 hours. It smells fresh and honestly looks better than before the water damage. Incredible result." },
                        { initial: 'B', name: 'Bill Ascroft', loc: 'Dandenong', quote: "Prompt and effective — the friendliest team and the most competitive pricing. I cannot recommend SteamFresh highly enough." },
                        { initial: 'F', name: 'FullMoon Finance', loc: 'Melbourne CBD', quote: "Flooded office, complete panic. SteamFresh were professional, fast, and left everything immaculate. Absolutely the best decision we made." }
                    ].map((test, idx) => (
                        <div key={idx} className="testimonial-card">
                            <div className="testimonial-stars text-amber">★★★★★</div>
                            <p className="testimonial-quote">"{test.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{test.initial}</div>
                                <div className="author-info">
                                    <div className="author-name">{test.name}</div>
                                    <div className="author-loc">{test.loc}</div>
                                </div>
                                <div className="google-badge">Google Review</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SECTION 8 - QUOTE FORM */}
            <section id="quote-section" className="quote-section bg-ink section-padding">
                <div className="container quote-grid">
                    <div className="quote-left reveal">
                        <span className="section-label">FREE ESTIMATE</span>
                        <h2 className="section-title text-white">Get a Quote in 15 Minutes</h2>
                        <p className="section-desc text-ink-20">Fill out the form with your details and service requirements. Our team monitors requests 24/7 and will contact you immediately.</p>

                        <div className="quote-features">
                            {[
                                { icon: '⚡', label: '15-Minute Callback' },
                                { icon: '💰', label: 'Transparent Pricing' },
                                { icon: '📋', label: 'Insurance Supported' },
                                { icon: '📍', label: 'All Melbourne Suburbs' }
                            ].map((feat, idx) => (
                                <div key={idx} className="quote-feature-item">
                                    <span className="qf-icon">{feat.icon}</span>
                                    <span className="qf-label text-white">{feat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="quote-right reveal">
                        <form className="quote-form bg-ink-80" onSubmit={handleQuoteSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" name="user_name" required placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input type="tel" name="user_phone" required placeholder="0400 000 000" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" name="user_email" required placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Suburb</label>
                                    <input type="text" name="user_suburb" required placeholder="e.g. Richmond" />
                                </div>
                            </div>

                            <div className="form-group full-width">
                                <label>Service Required</label>
                                <select name="service_required" required defaultValue="">
                                    <option value="" disabled>Select a service...</option>
                                    <option value="flood">Flood Damage Restoration</option>
                                    <option value="water">Water Damage Restoration</option>
                                    <option value="carpet">Wet Carpet Restoration</option>
                                    <option value="upholstery">Upholstery Cleaning</option>
                                    <option value="tile">Tile and Grout Cleaning</option>
                                    <option value="insurance">Insurance Claims Assistance</option>
                                    <option value="other">Other / Not Sure</option>
                                </select>
                            </div>

                            <div className="form-group full-width">
                                <label>Description of Issue</label>
                                <textarea name="message" rows="4" placeholder="Briefly describe what happened..." required></textarea>
                            </div>

                            <button type="submit" className="button-primary submit-btn">Request Free Quote →</button>

                            <div className="form-footer">
                                🔒 We respond within 15 min · No obligation · No spam
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* SECTION 9 - FAQ ACCORDION */}
            <section className="faq-section bg-white section-padding">
                <div className="container faq-grid">
                    <div className="faq-left reveal">
                        <span className="section-label">FAQ</span>
                        <h2 className="section-title">Common Questions</h2>
                        <p className="section-desc">Find answers to the most frequently asked questions about our restoration and cleaning services.</p>
                        <a href="tel:0413943154" className="button-outline faq-call-btn">
                            📞 Call Us Directly
                        </a>
                    </div>

                    <div className="faq-right reveal">
                        {[
                            { q: "What services does SteamFresh provide?", a: "We specialize in flood damage restoration, water damage extraction, wet carpet drying, upholstery cleaning, and tile & grout cleaning for residential and commercial properties." },
                            { q: "How quickly can you respond to an emergency?", a: "We operate 24/7 and our average response time across all Melbourne suburbs is under 60 minutes for water and flood emergencies." },
                            { q: "Why can't I dry my wet carpet myself?", a: "Surface drying leaves hidden moisture in the underlay and subfloor, leading to severe structural damage and toxic mould growth within 48 hours. Our industrial equipment ensures complete moisture removal." },
                            { q: "Do you help with insurance claims?", a: "Yes. We directly assist with your insurance claim, providing all necessary moisture mapping, photographic evidence, and professional reporting required by Australian insurers." },
                            { q: "What makes SteamFresh different?", a: "We are a fully self-sufficient team equipped with our own power generators and water supply. We don't rely on your utilities, and we guarantee our work." },
                            { q: "How long does carpet take to dry?", a: "With our industrial air movers and dehumidifiers, carpets typically dry within 24 to 48 hours depending on the severity of the water damage and the type of carpet." }
                        ].map((faq, idx) => (
                            <details key={idx} className="faq-item" open={idx === 0}>
                                <summary className="faq-question">
                                    {faq.q}
                                    <span className="faq-icon">+</span>
                                </summary>
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 10 - SERVICE AREAS */}
            <section className="areas-section bg-ice section-padding text-center">
                <div className="container reveal">
                    <span className="section-label mx-auto text-center" style={{ margin: '0 auto', textAlign: 'center' }}>SERVICE AREAS</span>
                    <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '48px' }}>We Serve All of Melbourne</h2>

                    <div className="areas-wrap">
                        {[
                            "Melbourne CBD", "Glen Waverley", "Narre Warren", "Glen Iris", "Bentleigh East",
                            "Cranbourne", "Berwick", "Dandenong", "Malvern East", "Springvale", "Keysborough",
                            "Clayton", "Frankston", "Oakleigh", "Moorabbin", "Cheltenham", "Mentone",
                            "Seaford", "Pakenham", "Hallam", "Endeavour Hills", "Rowville", "Ferntree Gully",
                            "Bayswater", "Ringwood"
                        ].map((area, idx) => (
                            <span key={idx} className="area-tag">{area}</span>
                        ))}
                    </div>

                    <div style={{ marginTop: '40px' }}>
                        <Link to="/contact" className="areas-link text-red">
                            View full service area list →
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION 11 - EMERGENCY CTA BANNER */}
            <section className="emergency-cta-section bg-red text-center" style={{ padding: '80px 5%' }}>
                <div className="container reveal text-center">
                    <span className="section-label text-center mx-auto" style={{ color: 'rgba(255,255,255,0.8)' }}>EMERGENCY SERVICE</span>
                    <h2 className="section-title text-white text-center" style={{ marginBottom: '16px' }}>Flooding Right Now?</h2>
                    <p className="text-white text-center mx-auto" style={{ opacity: 0.9, fontSize: '20px', marginBottom: '40px', maxWidth: '600px' }}>Don't wait. Every minute counts when mitigating water damage.</p>

                    <a href="tel:0413943154" className="button-primary emergency-btn floating bg-white text-red mx-auto text-center" style={{ color: 'var(--red)', backgroundColor: 'var(--white)' }}>
                        📞 Call 0413 943 154 — We Answer Now
                    </a>
                </div>
            </section>

            <SuccessModal
                isOpen={modalConfig.isOpen}
                onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
                message={modalConfig.message}
                submessage={modalConfig.submessage}
                redirectUrl={modalConfig.redirectUrl}
            />

        </div>
    );
}

