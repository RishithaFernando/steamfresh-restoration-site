import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Instagram, X, Phone } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import './Header.css';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const searchRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on route change
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
        setIsSearchOpen(false);
        setSearchQuery('');
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-container container">
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="SteamFresh Logo" style={{ height: '48px', width: 'auto' }} />
                    </Link>

                    <nav className="desktop-nav">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>

                        <div
                            className="dropdown-container"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            <Link to="/services" className={`nav-link ${location.pathname.includes('/service') ? 'active' : ''}`}>
                                Services <span className="dropdown-arrow">▾</span>
                            </Link>
                            {servicesDropdownOpen && (
                                <div className="dropdown-menu">
                                    {servicesData.map((service, idx) => (
                                        <Link key={idx} to={`/${service.serviceId}`} className="dropdown-item">
                                            {service.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
                        <Link to="/blog" className={`nav-link ${location.pathname.includes('/blog') ? 'active' : ''}`}>Blog</Link>
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </nav>

                    <div className="header-right">
                        <div className="header-actions">
                            <div className={`search-container ${isSearchOpen ? 'open' : ''}`} ref={searchRef}>
                                <button className="icon-btn search-toggle" aria-label="Search" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                                    {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                                </button>
                                <div className="search-dropdown">
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="search-input"
                                        autoFocus={isSearchOpen}
                                    />
                                    {searchQuery && (
                                        <div className="search-results">
                                            {servicesData.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())).map((s, idx) => (
                                                <Link key={idx} to={`/${s.serviceId}`} className="search-result-item" onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}>
                                                    {s.title}
                                                </Link>
                                            ))}
                                            {servicesData.filter(s => s.title.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                                                <div className="search-result-none text-ink-40">No services found.</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <a href="https://instagram.com/steamfresh" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                        <a href="tel:0413943154" className="button-primary header-call">
                            <Phone size={18} /> 0413 943 154
                        </a>
                        <button className="hamburger" onClick={toggleMobileMenu} aria-label="Menu">
                            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </header>

            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-content">
                    <Link to="/" className="mobile-link">Home</Link>
                    <Link to="/about" className="mobile-link">About</Link>
                    <Link to="/services" className="mobile-link">All Services</Link>
                    <div className="mobile-services-list">
                        {servicesData.map((service, idx) => (
                            <Link key={idx} to={`/${service.serviceId}`} className="mobile-sublink">- {service.title}</Link>
                        ))}
                    </div>
                    <Link to="/gallery" className="mobile-link">Gallery</Link>
                    <Link to="/blog" className="mobile-link">Blog</Link>
                    <Link to="/contact" className="mobile-link">Contact</Link>
                    <a href="tel:0413943154" className="button-primary mobile-menu-call">
                        <Phone size={18} /> 0413 943 154
                    </a>
                </div>
            </div>
        </>
    );
}

