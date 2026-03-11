import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogData';
import './Blog.css';

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
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
        <div className="blog-page bg-ice">
            <Helmet>
                <title>Restoration & Cleaning Blog | SteamFresh Melbourne</title>
                <meta name="description" content="Read our latest articles on water damage restoration, carpet drying, mould prevention, and cleaning tips." />
            </Helmet>

            {/* HERO */}
            <section className="blog-hero bg-ice">
                <div className="container text-center reveal">
                    <span className="section-label mx-auto">OUR INSIGHTS</span>
                    <h1 className="sh-title" style={{ marginBottom: '24px' }}>Restoration & Cleaning Blog</h1>
                    <p className="sh-desc mx-auto" style={{ maxWidth: '700px' }}>
                        Expert advice, industry insights, and practical tips on managing water damage, preventing mould, and maintaining your property.
                    </p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="section-padding" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="blog-grid reveal">
                        {blogPosts.map((post, idx) => (
                            <article key={idx} className="blog-card bg-white">
                                <div className="bc-image">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                    <span className="bc-category">{post.category}</span>
                                </div>
                                <div className="bc-content">
                                    <div className="bc-meta text-ink-40">
                                        <span>{post.date}</span>
                                        <span className="meta-dot">·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h2 className="bc-title">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <p className="bc-excerpt text-ink-60">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="bc-link text-red">
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

