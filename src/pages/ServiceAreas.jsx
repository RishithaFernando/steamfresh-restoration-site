import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { suburbs, formatSuburbSlug } from '../data/suburbsData';
import { Helmet } from 'react-helmet-async';
import './ServiceAreas.css';

export default function ServiceAreas() {
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
        <>
            <Helmet>
                <title>Service Areas Melbourne | SteamFresh Carpet Cleaning</title>
                <meta name="description" content="View the full list of Melbourne suburbs we service for emergency flood damage, carpet drying, and cleaning." />
            </Helmet>

            <div className="bg-ice" style={{ minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
                <div className="container">

                    <div className="text-center reveal" style={{ marginBottom: '64px' }}>
                        <span className="section-label mx-auto">OUR LOCATIONS</span>
                        <h1 className="section-title">Melbourne Service Areas</h1>
                        <p className="section-desc mx-auto" style={{ maxWidth: '700px' }}>We operate 24/7 across the Greater Melbourne area. Whether you're in the CBD, South Eastern suburbs, or the Mornington Peninsula, our emergency responders are ready to deploy.</p>
                    </div>

                    <div className="suburb-grid reveal">
                        {suburbs.map((suburb, idx) => (
                            <Link key={idx} to={`/service-areas/${formatSuburbSlug(suburb)}`} className="suburb-card">
                                <span className="sc-icon text-red">📍</span>
                                <span className="sc-name">{suburb}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="map-section reveal" style={{ marginTop: '80px' }}>
                        <h2 className="section-title text-center" style={{ marginBottom: '32px' }}>Coverage Map</h2>
                        <div className="map-container" style={{ height: '500px' }}>
                            <iframe
                                title="Melbourne Area Coverage"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1604085.6565985864!2d143.71180016024107!3d-37.96544955792942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

