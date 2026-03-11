import { useState, useEffect } from 'react';
import './CookieNotice.css';

export default function CookieNotice() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('steamfresh_cookies_accepted');
        if (!hasAccepted) {
            // Delay showing it slightly for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('steamfresh_cookies_accepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-notice">
            <div className="container cn-content">
                <p>
                    We use cookies to improve your experience on our site and to analyze web traffic.
                    By continuing to use this site, you agree to our use of cookies.
                </p>
                <button className="button-primary cn-btn" onClick={acceptCookies}>
                    Accept & Close
                </button>
            </div>
        </div>
    );
}
