import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            {/* Removed redundant footer-cta block since we have Section 11 and MobileCallBar */}

            <div className="footer-main bg-ink section-padding">
                <div className="container footer-grid">

                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo">
                            <img src="/logo.png" alt="SteamFresh Logo" style={{ height: '56px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                        </Link>
                        <p className="footer-tagline text-ink-20">
                            Professional flood damage restoration and carpet cleaning across Melbourne. Fast, thorough, and available every hour of every day.
                        </p>

                        <div className="footer-badges">
                            <span className="badge">🏆 5-Star Google Rating</span>
                            <span className="badge">🛡️ Insurance Approved</span>
                            <span className="badge">✅ Licensed Technicians</span>
                        </div>

                        <div className="footer-socials" style={{ marginTop: '32px' }}>
                            <a href="https://facebook.com/steamfreshcarpet" target="_blank" rel="noopener noreferrer" className="text-ink-40 hover-white">Facebook</a>
                            <span className="text-ink-60">·</span>
                            <a href="https://instagram.com/steamfresh" target="_blank" rel="noopener noreferrer" className="text-ink-40 hover-white">Instagram</a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title text-white">Services</h4>
                        <ul className="footer-links">
                            <li><Link to="/flood-restoration">Flood Restoration</Link></li>
                            <li><Link to="/water-damage">Water Damage</Link></li>
                            <li><Link to="/wet-carpet">Wet Carpet</Link></li>
                            <li><Link to="/upholstery">Upholstery Cleaning</Link></li>
                            <li><Link to="/tile-grout">Tile & Grout</Link></li>
                            <li><Link to="/insurance-claims">Insurance Claims</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title text-white">Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/service-areas">Service Areas</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title text-white">Contact</h4>
                        <ul className="footer-contact text-ink-20">
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>1/30 Tower Court,<br />Noble Park, VIC 3174</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:0413943154" className="text-red hover-white">0413 943 154</a>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:info@steamfreshcarpetcleaning.com.au" className="hover-white">info@steamfreshcarpetcleaning.com.au</a>
                            </li>
                            <li>
                                <span className="contact-icon">⏰</span>
                                <span>24 hours a day, 7 days a week</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="footer-bottom bg-ink-80">
                <div className="container footer-bottom-flex">
                    <p className="text-ink-40">© 2024 SteamFresh Carpet Cleaning. All Rights Reserved.</p>
                    <p className="text-ink-40 text-sm">ABN: 12 345 678 901</p>
                </div>
            </div>
        </footer>
    );
}

