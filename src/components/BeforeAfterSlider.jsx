import { useState, useRef, useEffect } from 'react';
import './BeforeAfterSlider.css';

export default function BeforeAfterSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const sliderRef = useRef(null);

    const handleMove = (clientX) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const handleMouseMove = (e) => handleMove(e.clientX);
    const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

    useEffect(() => {
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        if (sliderRef.current) {
            const el = sliderRef.current;
            el.onmousedown = () => {
                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            };
            el.ontouchstart = () => {
                document.addEventListener('touchmove', handleTouchMove);
                document.addEventListener('touchend', handleTouchEnd);
            };
        }
    }, []);

    return (
        <section className="ba-section section-padding bg-sink">
            <div className="container text-center reveal">
                <span className="section-label mx-auto">OUR RESULTS</span>
                <h2 className="section-title">See the Difference</h2>
                <p className="section-desc mx-auto" style={{ maxWidth: '600px', marginBottom: '48px' }}>Slide to compare the condition of carpets before and after our industrial-grade steam cleaning technology.</p>

                <div className="ba-slider-container" ref={sliderRef}>
                    {/* Dirty Image (Background) */}
                    <div className="ba-image ba-dirty">
                        <img src="/dirty_carpet.png" alt="Dirty water damaged carpet" draggable="false" />
                        <span className="ba-label left">Before</span>
                    </div>

                    {/* Clean Image (Foreground, Clipped) */}
                    <div
                        className="ba-image ba-clean"
                        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                    >
                        <img src="/clean_carpet.png" alt="Clean restored carpet" draggable="false" />
                        <span className="ba-label right">After</span>
                    </div>

                    {/* Slider Handle */}
                    <div className="ba-handle" style={{ left: `${sliderPosition}%` }}>
                        <div className="ba-handle-line"></div>
                        <div className="ba-handle-button">
                            <span className="ba-handle-arrows">⟷</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
