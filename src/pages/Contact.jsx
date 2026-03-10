import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import SuccessModal from '../components/SuccessModal';
import './Contact.css';

export default function Contact() {
    const [modalConfig, setModalConfig] = useState({
        isOpen: false,
        message: '',
        submessage: '',
        redirectUrl: ''
    });

    useEffect(() => {
        // Scroll reveal
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

    const handleContactSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const name = formData.get('user_name');
        const phone = formData.get('user_phone');
        const email = formData.get('user_email');
        const suburb = formData.get('user_suburb');
        const service = formData.get('service_required');
        const message = formData.get('message');

        const whatsappMessage = `*New Contact Message*%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Email:* ${email}%0A` +
            `*Suburb:* ${suburb}%0A` +
            `*Service:* ${service}%0A` +
            `*Message:* ${message}`;

        const whatsappUrl = `https://wa.me/61413943154?text=${whatsappMessage}`;

        setModalConfig({
            isOpen: true,
            message: "Message Sent!",
            submessage: "Your message has been received. Click below to continue to WhatsApp and chat with our team directly.",
            redirectUrl: whatsappUrl
        });

        e.target.reset();
    };

    return (
        <div className="contact-page bg-ice">
            <Helmet>
                <title>Contact Us | SteamFresh Carpet Cleaning Melbourne</title>
                <meta name="description" content="Get in touch with SteamFresh for 24/7 emergency water damage restoration or to request a free quote." />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="service-hero bg-ice" style={{ minHeight: '40vh', paddingBottom: '60px' }}>
                <div className="sh-geometry"></div>
                <div className="hero-dots"></div>
                <div className="container sh-container text-center">
                    <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="sh-badge" style={{ margin: '0 auto 24px auto' }}>
                            ✉️ Contact Us
                        </div>
                        <h1 className="sh-title text-center">We Are Here to Help</h1>
                        <p className="sh-desc text-center" style={{ margin: '0 auto' }}>Whether you have a water emergency or need a quote for professional cleaning, our team is ready to assist you any hour of the day.</p>
                    </div>
                </div>
            </section>

            {/* 2. SPLIT CONTACT CARD */}
            <section className="contact-section section-padding" style={{ paddingTop: '0' }}>
                <div className="container reveal">
                    <div className="contact-wrapper">

                        {/* LEFT COLUMN - INFO */}
                        <div className="contact-info bg-ink text-white">
                            <h2 className="ci-title">Get in Touch</h2>
                            <p className="ci-desc text-ink-20">We operate 24/7 across all Melbourne suburbs. Reach out directly or fill out the form for a prompt response.</p>

                            <div className="ci-methods">
                                <div className="cd-item">
                                    <span className="cd-icon bg-ink-80 text-red">📍</span>
                                    <div className="cd-text">
                                        <strong className="text-white">Headquarters</strong>
                                        <span className="text-ink-20">1/30 Tower Court<br />Noble Park, VIC 3174<br />Melbourne</span>
                                    </div>
                                </div>

                                <div className="cd-item">
                                    <span className="cd-icon bg-ink-80 text-red">📞</span>
                                    <div className="cd-text">
                                        <strong className="text-white">24/7 Emergency Hotline</strong>
                                        <a href="tel:0413943154" className="cd-link text-red" style={{ fontSize: '24px', fontWeight: '800' }}>0413 943 154</a>
                                    </div>
                                </div>

                                <div className="cd-item">
                                    <span className="cd-icon bg-ink-80 text-red">✉️</span>
                                    <div className="cd-text">
                                        <strong className="text-white">Email Support</strong>
                                        <a href="mailto:info@steamfreshcarpetcleaning.com.au" className="cd-link text-white">info@steamfreshcarpetcleaning.com.au</a>
                                    </div>
                                </div>

                                <div className="cd-item">
                                    <span className="cd-icon bg-ink-80 text-red">⏰</span>
                                    <div className="cd-text">
                                        <strong className="text-white">Operating Hours</strong>
                                        <span className="text-ink-20">Mon-Sun: 24 Hours (Every Day)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - FORM */}
                        <div className="contact-form-side bg-white">
                            <h2 className="cf-title">Send a Message</h2>
                            <form className="quote-form-light" onSubmit={handleContactSubmit}>
                                <div className="form-group-light">
                                    <label>Full Name</label>
                                    <input type="text" name="user_name" required placeholder="John Doe" />
                                </div>

                                <div className="form-group-light">
                                    <label>Phone Number</label>
                                    <input type="tel" name="user_phone" required placeholder="0400 000 000" />
                                </div>

                                <div className="form-group-light">
                                    <label>Email Address</label>
                                    <input type="email" name="user_email" required placeholder="john@example.com" />
                                </div>

                                <div className="form-group-light">
                                    <label>Suburb</label>
                                    <input type="text" name="user_suburb" required placeholder="e.g. Richmond" />
                                </div>

                                <div className="form-group-light full-width">
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

                                <div className="form-group-light full-width">
                                    <label>Description</label>
                                    <textarea name="message" rows="5" placeholder="How can we help you?" required></textarea>
                                </div>

                                <button type="submit" className="button-primary submit-btn">Send Message →</button>
                                <div className="form-footer-light">
                                    🔒 We respond to messages within 15 minutes.
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. MAP SECTION */}
            <section className="map-section section-padding" style={{ paddingTop: '0' }}>
                <div className="container reveal">
                    <div className="map-container">
                        <iframe
                            title="Google Maps Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.979246182963!2d145.1843187!3d-37.9545041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6138612ececfd%3A0xe5a3c26abec02008!2s1%2F30%20Tower%20Ct%2C%20Noble%20Park%20VIC%203174%2C%20Australia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
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

