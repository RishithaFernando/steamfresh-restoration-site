import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { suburbs, formatSuburbSlug } from '../data/suburbsData';
import { servicesData } from '../data/servicesData';
import './ServiceAreaDetail.css';

export default function ServiceAreaDetail() {
    const { suburb } = useParams();

    // Find original suburb name
    const suburbName = suburbs.find(s => formatSuburbSlug(s) === suburb) || suburb.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    useEffect(() => {
        // Scroll To Top since this is a dynamic route that might change without unmounting
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [suburb]);

    return (
        <div className="suburb-detail-page bg-ice">
            <Helmet>
                <title>Wet Carpet Cleaning {suburbName} | SteamFresh Melbourne</title>
                <meta name="description" content={`24/7 Emergency water damage restoration and carpet drying services in ${suburbName}. Fast response, licensed technicians.`} />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="service-hero bg-ice">
                <div className="sh-geometry"></div>
                <div className="hero-dots"></div>
                <div className="container sh-container">
                    <div className="sh-content reveal">
                        <div className="sh-badge">
                            📍 Local Service: {suburbName}
                        </div>
                        <h1 className="sh-title">Water Damage & Carpet Drying near {suburbName}</h1>
                        <p className="sh-desc">
                            Rapid response water extraction, flood damage restoration, and professional carpet cleaning for residential and commercial properties in {suburbName} and surrounding suburbs. We are available 24/7.
                        </p>
                        <div className="sh-buttons">
                            <a href="tel:0413943154" className="button-primary">📞 Call 0413 943 154</a>
                            <a href="#quote" className="button-outline bg-white">Get a Free Quote</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. LOCAL CONTENT & FORM */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="suburb-split">

                        <div className="suburb-left reveal">
                            <h2 className="section-title">Emergency Restoration in {suburbName}</h2>
                            <p className="text-ink-60" style={{ fontSize: '18px', marginBottom: '24px' }}>
                                When disaster strikes your home or business in {suburbName}, immediate action is crucial. Our local response team is equipped with truck-mounted extraction units and industrial drying technology to halt water damage in its tracks.
                            </p>
                            <p className="text-ink-60" style={{ fontSize: '18px', marginBottom: '40px' }}>
                                We don't just extract the water; our certified thermodynamic drying process ensures that moisture is completely removed from your underlay and subflooring, preventing long-term structural weakness and dangerous mould proliferation.
                            </p>

                            <h3 className="section-title" style={{ fontSize: '28px', marginBottom: '24px' }}>Our Core Services</h3>
                            <div className="suburb-services-grid">
                                {servicesData.slice(0, 6).map((service, idx) => (
                                    <Link key={idx} to={`/${service.serviceId}`} className="ss-card">
                                        <h4 className="ss-title text-red">{service.title}</h4>
                                        <p className="ss-desc text-ink-60">{service.subtitle}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="suburb-right reveal" id="quote" style={{ transitionDelay: '0.2s' }}>
                            <div className="quote-form-card bg-ice" style={{ padding: '40px', borderRadius: '24px', position: 'sticky', top: '120px' }}>
                                <h3 className="section-title" style={{ fontSize: '28px', marginBottom: '8px' }}>Local Request</h3>
                                <p className="text-ink-60" style={{ marginBottom: '24px' }}>Priority dispatch for {suburbName} residents.</p>

                                <form className="quote-form" onSubmit={(e) => { e.preventDefault(); alert("Local Request Sent!"); }}>
                                    <div className="form-group full-width">
                                        <label>Name</label>
                                        <input type="text" required placeholder="Your Name" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Phone</label>
                                        <input type="tel" required placeholder="0400 000 000" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Address in {suburbName}</label>
                                        <input type="text" required placeholder="Street Address" />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Service Needed</label>
                                        <select required defaultValue="">
                                            <option value="" disabled>Select Issue...</option>
                                            <option value="flood">Flood / Burst Pipe</option>
                                            <option value="carpet">Wet Carpet</option>
                                            <option value="cleaning">General Cleaning</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="button-primary submit-btn w-full">Request Dispatch →</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. MAP EMBED */}
            <section className="suburb-map bg-ice section-padding text-center">
                <div className="container reveal">
                    <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Serving {suburbName} & Surrounds</h2>
                    <div className="map-container" style={{ height: '400px', borderRadius: '24px', overflow: 'hidden' }}>
                        {/* Embed dynamically based on suburb name search */}
                        <iframe
                            title={`Map of ${suburbName}`}
                            src={`https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(suburbName + ' Victoria, Australia')}&key=YOUR_API_KEY_HERE`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                            <p>Map embedding requires a Google Maps API Key to use Place mode in iframe, falling back to a generic embed for visual structure.</p>
                        </iframe>
                        {/* Note: I'm using a placeholder text since a real API key is needed for precise place embeds without exact coordinates. 
                   Alternatively, we can use the generic map for now, as real dynamic embeds require an API key securely configured. */}
                    </div>
                </div>
            </section>

        </div>
    );
}

