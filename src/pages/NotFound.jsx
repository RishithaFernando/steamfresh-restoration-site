import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Page Not Found | SteamFresh Melbourne</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Helmet>
            <div className="section-padding text-center bg-ice flex flex-column align-center" style={{ marginTop: '100px', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <span className="text-red" style={{ fontSize: '64px', marginBottom: '16px' }}>💧</span>
                <h1 style={{ fontSize: '64px', marginBottom: '24px', lineHeight: '1.2' }}>404<br />Page Not Found</h1>
                <p style={{ fontSize: '20px', marginBottom: '32px', color: 'var(--ink-60)', maxWidth: '500px' }}>
                    It looks like the page you were trying to reach doesn't exist or has been moved. Let's get you back on track.
                </p>
                <Link to="/" className="button-primary">Return to Home</Link>
            </div>
        </>
    );
}

