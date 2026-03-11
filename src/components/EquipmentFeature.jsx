import { Zap, Droplets } from 'lucide-react';

export default function EquipmentFeature() {
    return (
        <section className="bg-white text-ink section-padding overflow-hidden" style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <div className="container">
                <div className="equipment-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '64px',
                    alignItems: 'center'
                }}>
                    <div className="equipment-content reveal">
                        <span className="section-label" style={{ color: 'var(--red)' }}>TECHNICAL EXCELLENCE</span>
                        <h2 className="section-title" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--ink)' }}>
                            Fully Self-Sufficient <span className="text-red">Rapid Response</span>
                        </h2>
                        <p className="text-ink-60" style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '40px' }}>
                            Unlike standard cleaners, our truck-mounted industrial equipment is fully self-sufficient. We never rely on your home's power or hot water supply, allowing us to operate efficiently even in severe flooding situations where utilities have been cut off.
                        </p>

                        <div className="equipment-features-row" style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '24px'
                        }}>
                            <div className="e-feature-card bg-ice" style={{
                                padding: '24px',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                borderLeft: '4px solid var(--red)'
                            }}>
                                <div className="ef-icon" style={{ marginBottom: '16px', color: 'var(--red)' }}>
                                    <Droplets size={32} />
                                </div>
                                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--ink)' }}>Industrial Hot Water</h3>
                                <p style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '1.5' }}>
                                    We generate our own heat to blast through years of deep-seated grime.
                                </p>
                            </div>

                            <div className="e-feature-card bg-ice" style={{
                                padding: '24px',
                                borderRadius: '16px',
                                border: '1px solid var(--border)',
                                borderLeft: '4px solid var(--red)'
                            }}>
                                <div className="ef-icon" style={{ marginBottom: '16px', color: 'var(--red)' }}>
                                    <Zap size={32} />
                                </div>
                                <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--ink)' }}>Independent Power</h3>
                                <p style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '1.5' }}>
                                    On-board generators mean we work even when your power is cut.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="equipment-image-container reveal" style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--red)',
                            borderRadius: '24px',
                            zIndex: 0
                        }}></div>
                        <img
                            src="/wet_carpet_extraction_hero.png"
                            alt="SteamFresh Truck Mounted Equipment"
                            style={{
                                width: '100%',
                                height: '500px',
                                objectFit: 'cover',
                                borderRadius: '24px',
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
                            }}
                        />
                        <div className="floating-badge bg-red text-white" style={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '-24px',
                            padding: '16px 24px',
                            borderRadius: '12px',
                            fontWeight: '700',
                            zIndex: 2,
                            boxShadow: '0 10px 20px rgba(209,0,0,0.3)'
                        }}>
                            INDUSTRIAL GRADE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

