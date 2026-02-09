import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #2d1810 0%, #1a0d08 100%)',
            color: '#fff',
            padding: '4rem 2rem 2rem'
        }}>
            <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                marginBottom: '3rem'
            }}>
                {/* Logo & Tagline */}
                <div>
                    <img src="/5.png" alt="Miimiko" style={{ height: '70px', marginBottom: '1rem' }} />
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        opacity: 0.9,
                        marginTop: '1rem',
                        color: '#ffc857',
                        fontWeight: 500
                    }}>
                        Unfold Your Creative Vision
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        opacity: 0.8,
                        marginTop: '0.8rem'
                    }}>
                        Empowering young minds through creative education worldwide
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        color: '#ffc857',
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', serif"
                    }}>
                        Quick Links
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <Link to="/" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            opacity: 0.85,
                            transition: 'all 0.3s ease',
                            fontSize: '1.05rem'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = '#ffc857';
                                e.target.style.paddingLeft = '5px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.85';
                                e.target.style.color = '#fff';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Home
                        </Link>
                        <Link to="/courses" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            opacity: 0.85,
                            transition: 'all 0.3s ease',
                            fontSize: '1.05rem'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = '#ffc857';
                                e.target.style.paddingLeft = '5px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.85';
                                e.target.style.color = '#fff';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Courses
                        </Link>
                        <Link to="/about" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            opacity: 0.85,
                            transition: 'all 0.3s ease',
                            fontSize: '1.05rem'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = '#ffc857';
                                e.target.style.paddingLeft = '5px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.85';
                                e.target.style.color = '#fff';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            About Us
                        </Link>
                        <Link to="/gallery" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            opacity: 0.85,
                            transition: 'all 0.3s ease',
                            fontSize: '1.05rem'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = '#ffc857';
                                e.target.style.paddingLeft = '5px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.85';
                                e.target.style.color = '#fff';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Student Gallery
                        </Link>
                        <Link to="/testimonials" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            opacity: 0.85,
                            transition: 'all 0.3s ease',
                            fontSize: '1.05rem'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = '#ffc857';
                                e.target.style.paddingLeft = '5px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.85';
                                e.target.style.color = '#fff';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Testimonials
                        </Link>
                        <Link to="/contact" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            opacity: 0.85,
                            transition: 'all 0.3s ease',
                            fontSize: '1.05rem'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.opacity = '1';
                                e.target.style.color = '#ffc857';
                                e.target.style.paddingLeft = '5px';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.opacity = '0.85';
                                e.target.style.color = '#fff';
                                e.target.style.paddingLeft = '0';
                            }}
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        color: '#ffc857',
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', serif"
                    }}>
                        Contact Us
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Mail size={20} color="#ffc857" />
                            <a href="mailto:info@miimiko.com" style={{
                                color: '#fff',
                                textDecoration: 'none',
                                opacity: 0.9,
                                transition: 'all 0.3s ease',
                                fontSize: '1.05rem'
                            }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = '#ffc857';
                                    e.target.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = '#fff';
                                    e.target.style.opacity = '0.9';
                                }}
                            >
                                info@miimiko.com
                            </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <Phone size={20} color="#ffc857" />
                            <span style={{ opacity: 0.9, fontSize: '1.05rem' }}>+91 XXXXX XXXXX</span>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h4 style={{
                        fontSize: '1.5rem',
                        marginBottom: '1.5rem',
                        color: '#ffc857',
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', serif"
                    }}>
                        Follow Us
                    </h4>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            padding: '0.8rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 200, 87, 0.3)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 200, 87, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 200, 87, 0.3)';
                            }}
                        >
                            <Instagram size={24} color="#7a004b" />
                        </a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            padding: '0.8rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 200, 87, 0.3)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 200, 87, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 200, 87, 0.3)';
                            }}
                        >
                            <Facebook size={24} color="#7a004b" />
                        </a>
                        <a href="#" style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            padding: '0.8rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 200, 87, 0.3)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.15) translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 200, 87, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 200, 87, 0.3)';
                            }}
                        >
                            <Youtube size={24} color="#7a004b" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div style={{
                borderTop: '1px solid rgba(255, 200, 87, 0.2)',
                paddingTop: '2rem',
                textAlign: 'center',
                opacity: 0.8
            }}>
                <p style={{
                    fontSize: '1.05rem',
                    fontWeight: 400
                }}>
                    © 2024 Miimiko. All rights reserved.
                </p>
                <p style={{
                    fontSize: '0.95rem',
                    marginTop: '0.5rem',
                    color: '#ffc857',
                    fontWeight: 500
                }}>
                    Empowering creativity • Ages 5-14 • Global Online Education
                </p>
            </div>
        </footer>
    );
}