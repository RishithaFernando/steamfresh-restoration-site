import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import './Gallery.css';

const galleryData = [
    { id: 1, type: 'Flood Damage', beforeImg: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600', suburb: 'Richmond', label: 'Basement Extraction' },
    { id: 2, type: 'Water Damage', beforeImg: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600', suburb: 'St Kilda', label: 'Burst Pipe Ceiling' },
    { id: 3, type: 'Carpet Cleaning', beforeImg: '/dirty_carpet.png', afterImg: '/clean_carpet.png', suburb: 'South Yarra', label: 'Wine Spill Removal' },
    { id: 4, type: 'Upholstery', beforeImg: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=600', suburb: 'Port Melbourne', label: 'Lounge Revival' },
    { id: 5, type: 'Tile and Grout', beforeImg: 'https://images.unsplash.com/photo-1595183492837-d1a2fcdeecbd?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&q=80&w=600', suburb: 'Brighton', label: 'Kitchen Floor Restore' },
    { id: 6, type: 'Flood Damage', beforeImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600', suburb: 'Dandenong', label: 'Commercial Warehouse' },
    { id: 7, type: 'Water Damage', beforeImg: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600', suburb: 'Toorak', label: 'Roof Leak Mitigation' },
    { id: 8, type: 'Carpet Cleaning', beforeImg: '/dirty_carpet.png', afterImg: '/clean_carpet.png', suburb: 'Hawthorn', label: 'End of Lease Clean' },
    { id: 9, type: 'Tile and Grout', beforeImg: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&q=80&w=600', afterImg: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600', suburb: 'Camberwell', label: 'Bathroom Deep Clean' },
];

const filters = ['All', 'Flood Damage', 'Water Damage', 'Carpet Cleaning', 'Upholstery', 'Tile and Grout'];

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [visibleItems, setVisibleItems] = useState(galleryData);
    const [isAnimating, setIsAnimating] = useState(false);

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

    const handleFilter = (filter) => {
        if (filter === activeFilter) return;

        setIsAnimating(true);
        setActiveFilter(filter);

        setTimeout(() => {
            if (filter === 'All') {
                setVisibleItems(galleryData);
            } else {
                setVisibleItems(galleryData.filter(item => item.type === filter));
            }
            setIsAnimating(false);
        }, 300); // Wait for fade out
    };

    return (
        <div className="gallery-page">
            <Helmet>
                <title>Project Gallery | SteamFresh Carpet Cleaning Melbourne</title>
                <meta name="description" content="Explore our gallery of before and after photos showcasing our premium restoration and cleaning results." />
            </Helmet>

            {/* 1. HERO SECTION */}
            <section className="service-hero bg-ice" style={{ minHeight: '40vh', paddingBottom: '60px' }}>
                <div className="sh-geometry"></div>
                <div className="hero-dots"></div>
                <div className="container sh-container text-center">
                    <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div className="sh-badge" style={{ margin: '0 auto 24px auto' }}>
                            📸 Our Work
                        </div>
                        <h1 className="sh-title text-center">Project Gallery</h1>
                        <p className="sh-desc text-center" style={{ margin: '0 auto' }}>See the real results of our premium restoration and cleaning services across Melbourne.</p>
                    </div>
                </div>
            </section>

            {/* 2. GALLERY GRID */}
            <section className="gallery-section bg-white section-padding">
                <div className="container">

                    <div className="gallery-filters reveal">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => handleFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className={`gallery-grid ${isAnimating ? 'animating' : ''}`}>
                        {visibleItems.map((item) => (
                            <div key={item.id} className="gallery-card reveal" style={{ animation: 'fadeUp 0.4s ease forwards' }}>
                                <div className="gc-image-container">
                                    <img src={item.afterImg} alt={item.label} className="gc-image gc-after" />
                                    <img src={item.beforeImg} alt={item.label + " before"} className="gc-image gc-before" />
                                    <div className="gc-drag-line"></div>
                                    <div className="gc-badge-before">Before</div>
                                    <div className="gc-badge-after">After</div>
                                </div>
                                <div className="gc-info">
                                    <div className="gc-meta">
                                        <span className="gc-type">{item.type}</span>
                                        <span className="gc-suburb">
                                            <MapPin size={14} style={{ marginRight: '4px', display: 'inline', verticalAlign: 'text-bottom' }} />
                                            {item.suburb}
                                        </span>
                                    </div>
                                    <h3 className="gc-label">{item.label}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {visibleItems.length === 0 && (
                        <div className="text-center text-ink-40" style={{ padding: '64px' }}>
                            No projects found for {activeFilter}.
                        </div>
                    )}

                </div>
            </section>

            {/* 3. CTA STRIP */}
            <section className="service-cta bg-red section-padding text-center">
                <div className="container reveal text-center">
                    <h2 className="section-title text-white mx-auto" style={{ marginBottom: '16px' }}>Want Similar Results?</h2>
                    <p className="text-white mx-auto" style={{ opacity: 0.9, fontSize: '20px', marginBottom: '32px', maxWidth: '600px' }}>Contact us today for a free quote on your restoration or cleaning needs.</p>
                    <a href="tel:0413943154" className="button-primary bg-white text-red mx-auto text-center" style={{ color: 'var(--red)', backgroundColor: 'var(--white)' }}>
                        📞 Call 0413 943 154
                    </a>
                </div>
            </section>

        </div>
    );
}

