import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [courseDropdown, setCourseDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        setCourseDropdown(false);
    }, [location]);

    const courses = [
        { name: 'Drawing', icon: '✏️', path: '/courses#drawing' },
        { name: 'Sketching', icon: '🖊️', path: '/courses#sketching' },
        { name: 'Calligraphy', icon: '🖋️', path: '/courses#calligraphy' },
        { name: 'Painting', icon: '🎨', path: '/courses#painting' }
    ];

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        @media (max-width: 968px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>

            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled
                    ? 'rgba(122, 0, 75, 0.8)'
                    : 'rgba(122, 0, 75, 0.3)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                transition: 'all 0.4s ease',
                padding: '1rem 0',
                borderBottom: scrolled ? '2px solid rgba(255, 200, 87, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <nav style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: '0 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src="assets/logo.png" alt="Miimiko" style={{ height: '60px' }} />
                    </Link>

                    {/* Desktop Menu */}
                    <div style={{
                        display: 'flex',
                        gap: '2.5rem',
                        alignItems: 'center'
                    }} className="desktop-menu">
                        <Link to="/" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            borderBottom: location.pathname === '/' ? '2px solid #ffc857' : 'none',
                            paddingBottom: '0.3rem',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.color = '#ffc857'}
                            onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                            Home
                        </Link>

                        {/* Courses Dropdown */}
                        <div
                            style={{ position: 'relative' }}
                            onMouseEnter={() => setCourseDropdown(true)}
                            onMouseLeave={() => setCourseDropdown(false)}
                        >
                            <button
                                onClick={() => setCourseDropdown(!courseDropdown)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: courseDropdown ? '#ffc857' : '#fff',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.3rem',
                                    fontSize: '1.05rem',
                                    borderBottom: location.pathname === '/courses' ? '2px solid #ffc857' : 'none',
                                    paddingBottom: '0.3rem',
                                    transition: 'all 0.3s ease',
                                    fontFamily: "'Quicksand', 'Poppins', sans-serif"
                                }}
                            >
                                Courses <ChevronDown size={16} />
                            </button>
                            {courseDropdown && (
                                <div style={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    paddingTop: '0.8rem',
                                    zIndex: 1001
                                }}>
                                    <div style={{
                                        background: '#fff',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                        minWidth: '220px',
                                        overflow: 'hidden',
                                        border: '2px solid #7a004b'
                                    }}>
                                        <Link
                                            to="/courses"
                                            style={{
                                                display: 'block',
                                                padding: '1rem 1.5rem',
                                                color: '#7a004b',
                                                textDecoration: 'none',
                                                borderBottom: '1px solid #f0f0f0',
                                                fontWeight: 700,
                                                fontSize: '1rem'
                                            }}
                                            onMouseEnter={(e) => e.target.style.background = '#fff8e7'}
                                            onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                        >
                                            📚 All Courses
                                        </Link>
                                        {courses.map((course, idx) => (
                                            <Link
                                                key={idx}
                                                to={course.path}
                                                style={{
                                                    display: 'block',
                                                    padding: '1rem 1.5rem',
                                                    color: '#7a004b',
                                                    textDecoration: 'none',
                                                    borderBottom: idx < courses.length - 1 ? '1px solid #f0f0f0' : 'none',
                                                    fontSize: '1rem'
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = '#fff8e7'}
                                                onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                            >
                                                {course.icon} {course.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/about" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            borderBottom: location.pathname === '/about' ? '2px solid #ffc857' : 'none',
                            paddingBottom: '0.3rem',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.color = '#ffc857'}
                            onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                            About Us
                        </Link>

                        <Link to="/gallery" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            borderBottom: location.pathname === '/gallery' ? '2px solid #ffc857' : 'none',
                            paddingBottom: '0.3rem',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.color = '#ffc857'}
                            onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                            Student Gallery
                        </Link>

                        <Link to="/testimonials" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1.05rem',
                            borderBottom: location.pathname === '/testimonials' ? '2px solid #ffc857' : 'none',
                            paddingBottom: '0.3rem',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.target.style.color = '#ffc857'}
                            onMouseLeave={(e) => e.target.style.color = '#fff'}
                        >
                            Testimonials
                        </Link>

                        <Link to="/contact" style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            color: '#7a004b',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.05rem',
                            boxShadow: '0 4px 15px rgba(255, 200, 87, 0.4)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(255, 200, 87, 0.6)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(255, 200, 87, 0.4)';
                            }}
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer',
                            display: 'none',
                            padding: '0.5rem'
                        }}
                        className="mobile-menu-btn"
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div style={{
                        background: 'rgba(122, 0, 75, 0.95)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        borderTop: '1px solid rgba(255, 200, 87, 0.3)'
                    }}>
                        <Link to="/" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 500
                        }}>
                            Home
                        </Link>
                        <Link to="/courses" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 500
                        }}>
                            All Courses
                        </Link>
                        {courses.map((course, idx) => (
                            <Link
                                key={idx}
                                to={course.path}
                                style={{
                                    color: '#ffc857',
                                    textDecoration: 'none',
                                    fontSize: '1.1rem',
                                    fontWeight: 400,
                                    paddingLeft: '1rem'
                                }}
                            >
                                {course.icon} {course.name}
                            </Link>
                        ))}
                        <Link to="/about" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 500
                        }}>
                            About Us
                        </Link>
                        <Link to="/gallery" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 500
                        }}>
                            Student Gallery
                        </Link>
                        <Link to="/testimonials" style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 500
                        }}>
                            Testimonials
                        </Link>
                        <Link to="/contact" style={{
                            color: '#ffc857',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            fontWeight: 700
                        }}>
                            Contact Us
                        </Link>
                    </div>
                )}
            </header>
        </>
    );
}