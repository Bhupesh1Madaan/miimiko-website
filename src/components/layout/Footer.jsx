import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const QUICK_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Courses', to: '/courses' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact Us', to: '/contact' },
];

const COURSES = [
    { label: 'Drawing', to: '/courses/drawing' },
    { label: 'Painting', to: '/courses/painting' },
    { label: 'Calligraphy', to: '/courses/calligraphy' },
];

const SOCIAL = [
    { label: '📘', href: 'https://facebook.com', title: 'Facebook' },
    { label: '📸', href: 'https://instagram.com', title: 'Instagram' },
    { label: '▶️', href: 'https://youtube.com', title: 'YouTube' },
    { label: '🐦', href: 'https://twitter.com', title: 'Twitter' },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            {/* decorative blob */}
            <div
                className="creative-blob"
                style={{
                    width: 350, height: 350,
                    background: 'rgba(255,200,87,0.04)',
                    top: -60, right: -80,
                }}
            />

            {/* ── Top grid ── */}
            <div className="footer-top">

                {/* Brand column */}
                <div>
                    <div className="footer-brand-logo">
                        <div className="footer-brand-icon">🎨</div>
                        <span className="footer-brand-name">ArtBloom</span>
                    </div>
                    <p className="footer-brand-desc">
                        We nurture creative thinkers and innovators aged 5–14 through
                        online art education across 50+ countries. Every brushstroke
                        builds a brighter future.
                    </p>
                    <div className="footer-social">
                        {SOCIAL.map(({ label, href, title }) => (
                            <a
                                key={title}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label={title}
                                title={title}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick links */}
                <div>
                    <h4 className="footer-col-title">Quick Links</h4>
                    <ul className="footer-links">
                        {QUICK_LINKS.map(({ label, to }) => (
                            <li key={to}>
                                <Link to={to} className="footer-link">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h4 className="footer-col-title">Our Courses</h4>
                    <ul className="footer-links">
                        {COURSES.map(({ label, to }) => (
                            <li key={to}>
                                <Link to={to} className="footer-link">{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="footer-col-title">Get In Touch</h4>

                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">📍</div>
                        <span>Global Online Academy<br />Available Worldwide</span>
                    </div>

                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">📧</div>
                        <a href="mailto:hello@artbloom.com" style={{ color: 'inherit' }}>
                            hello@artbloom.com
                        </a>
                    </div>

                    <div className="footer-contact-item">
                        <div className="footer-contact-icon">📞</div>
                        <a href="tel:+919876543210" style={{ color: 'inherit' }}>
                            +91 98765 43210
                        </a>
                    </div>

                    <div style={{ marginTop: '1.5rem' }}>
                        <Button variant="gold" size="sm" to="/contact" arrow>
                            Book Free Demo
                        </Button>
                    </div>
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="footer-divider" />

            {/* ── Bottom bar ── */}
            <div className="footer-bottom">
                <p className="footer-copyright">
                    © {year} ArtBloom Creative Academy. All rights reserved.
                </p>
                <div className="footer-bottom-links">
                    <a href="/privacy" className="footer-bottom-link">Privacy Policy</a>
                    <a href="/terms" className="footer-bottom-link">Terms of Use</a>
                    <a href="/sitemap" className="footer-bottom-link">Sitemap</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;