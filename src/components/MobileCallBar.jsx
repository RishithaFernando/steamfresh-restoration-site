import { useState, useEffect } from 'react';
import './MobileCallBar.css';

export default function MobileCallBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show on mobile only when scrolled > 400px
            if (window.innerWidth < 768) {
                setIsVisible(window.scrollY > 400);
            } else {
                setIsVisible(false); // Hide on desktop
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className={`mobile-call-bar ${isVisible ? 'visible' : ''}`}>
            <div className="mobile-call-content">
                <span className="mobile-call-text">Available 24/7</span>
                <a href="tel:0413943154" className="mobile-call-button">
                    📞 Call Now
                </a>
            </div>
        </div>
    );
}
