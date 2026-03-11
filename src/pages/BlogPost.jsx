import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogData';
import './BlogPost.css';

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="section-padding text-center" style={{ marginTop: '140px', minHeight: '50vh' }}>
                <h1 style={{ fontSize: '40px', marginBottom: '24px' }}>Article Not Found</h1>
                <Link to="/blog" className="button-primary">Back to Blog</Link>
            </div>
        );
    }

    const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <div className="blog-post-page bg-ice">
            <Helmet>
                <title>{post.title} | SteamFresh Blog</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            {/* HERO */}
            <section className="post-hero bg-ice">
                <div className="container text-center">
                    <Link to="/blog" className="back-link text-red">← Back to Blog</Link>
                    <div className="post-meta-top mx-auto text-ink-40">
                        <span className="post-cat-badge">{post.category}</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="sh-title mx-auto" style={{ maxWidth: '900px' }}>{post.title}</h1>
                </div>
            </section>

            {/* FEATURED IMAGE */}
            <section className="post-image-section bg-ice">
                <div className="container">
                    <div className="main-image-wrap">
                        <img src={post.image} alt={post.title} />
                    </div>
                </div>
            </section>

            {/* CONTENT WITH SIDEBAR */}
            <section className="post-content-section section-padding bg-white">
                <div className="container post-layout">

                    <div className="post-body">
                        {/* Using dangerouslySetInnerHTML as the mock data has safe HTML tags */}
                        <div className="rich-text" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                        <div className="author-byline flex align-center" style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
                            <div className="author-avatar bg-red-pale text-red" style={{ width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginRight: '24px' }}>
                                SF
                            </div>
                            <div>
                                <strong className="text-ink" style={{ display: 'block', fontSize: '18px', marginBottom: '4px' }}>SteamFresh Editorial Team</strong>
                                <span className="text-ink-40">Certified Water Damage Restoration Specialists</span>
                            </div>
                        </div>
                    </div>

                    <aside className="post-sidebar">
                        <div className="sidebar-widget bg-ice">
                            <h3 className="widget-title">Table of Contents</h3>
                            <ul className="toc-list text-ink-60">
                                <li><a href="#">The Critical First Hour</a></li>
                                <li><a href="#">Safety Protocols</a></li>
                                <li><a href="#">Why Professional Extraction Matters</a></li>
                                <li><a href="#">Preventing Secondary Damage</a></li>
                            </ul>
                        </div>

                        <div className="sidebar-widget bg-red text-white">
                            <h3 className="widget-title text-white">Need Emergency Help?</h3>
                            <p style={{ opacity: 0.9, marginBottom: '24px' }}>If you are experiencing water damage right now, do not wait.</p>
                            <a href="tel:0413943154" className="button-primary bg-white text-red w-full text-center" style={{ justifyContent: 'center' }}>
                                Call 0413 943 154
                            </a>
                            <p className="text-center" style={{ marginTop: '16px', fontSize: '13px', opacity: 0.8 }}>Available 24/7 across Melbourne</p>
                        </div>
                    </aside>

                </div>
            </section>

            {/* RELATED ARTICLES */}
            <section className="related-section bg-ice section-padding">
                <div className="container">
                    <h2 className="section-title text-center" style={{ marginBottom: '48px' }}>Read More Articles</h2>
                    <div className="blog-grid">
                        {relatedPosts.map((rPost, idx) => (
                            <article key={idx} className="blog-card bg-white">
                                <div className="bc-image">
                                    <img src={rPost.image} alt={rPost.title} loading="lazy" />
                                    <span className="bc-category">{rPost.category}</span>
                                </div>
                                <div className="bc-content">
                                    <div className="bc-meta text-ink-40">
                                        <span>{rPost.date}</span>
                                        <span className="meta-dot">·</span>
                                        <span>{rPost.readTime}</span>
                                    </div>
                                    <h2 className="bc-title" style={{ fontSize: '20px' }}>
                                        <Link to={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                                    </h2>
                                    <Link to={`/blog/${rPost.slug}`} className="bc-link text-red">
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

