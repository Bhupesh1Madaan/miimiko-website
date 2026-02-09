import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Palette, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div style={{ background: '#fdfbf7' }}>
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .creative-blob {
          position: absolute;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: blobMove 20s ease-in-out infinite;
        }

        @keyframes blobMove {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(90deg); }
          50% { transform: translate(-20px, 20px) rotate(180deg); }
          75% { transform: translate(20px, 20px) rotate(270deg); }
        }

        .btn-hover {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-hover:hover::before {
          width: 300px;
          height: 300px;
        }

        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-emoji {
            width: 300px !important;
            height: 300px !important;
            font-size: 120px !important;
          }
        }
      `}</style>

            {/* Hero Section */}
            <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                padding: '120px 2rem 4rem'
            }}>
                {/* Decorative Blobs */}
                <div className="creative-blob" style={{
                    width: '400px',
                    height: '400px',
                    background: 'rgba(255, 200, 87, 0.1)',
                    top: '-100px',
                    right: '-100px'
                }}></div>
                <div className="creative-blob" style={{
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 182, 193, 0.1)',
                    bottom: '-50px',
                    left: '-50px',
                    animationDelay: '5s'
                }}></div>

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }} className="hero-grid">
                    <div className="animate-fadeInUp">
                        <h1 className="hero-title" style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '4.5rem',
                            fontWeight: 800,
                            color: '#ffc857',
                            marginBottom: '1.5rem',
                            lineHeight: 1.1,
                            textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
                        }}>
                            Unfold Your Creative Vision
                        </h1>
                        <p style={{
                            fontSize: '1.4rem',
                            color: '#fff',
                            marginBottom: '1rem',
                            lineHeight: 1.6,
                            fontWeight: 300
                        }}>
                            We don't just teach drawing. We nurture <span style={{ color: '#ffc857', fontWeight: 600 }}>thinkers, creators, and innovators</span> who see the world differently.
                        </p>
                        <p style={{
                            fontSize: '1.2rem',
                            color: '#ffb6c1',
                            marginBottom: '2.5rem',
                            lineHeight: 1.6,
                            fontWeight: 400
                        }}>
                            🌍 Global Online Classes • Ages 5-14 Years
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" className="btn-hover" style={{
                                background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                                color: '#7a004b',
                                padding: '1.2rem 3rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                boxShadow: '0 8px 25px rgba(255, 200, 87, 0.4)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                position: 'relative'
                            }}>
                                Book a Free Demo <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn-hover" style={{
                                background: 'transparent',
                                border: '2px solid #ffc857',
                                color: '#ffc857',
                                padding: '1.2rem 3rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                display: 'inline-block',
                                position: 'relative'
                            }}>
                                Raise a Query
                            </Link>
                        </div>
                    </div>

                    <div className="animate-float" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div className="hero-emoji" style={{
                            width: '450px',
                            height: '450px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(255, 200, 87, 0.2) 0%, rgba(255, 182, 193, 0.2) 100%)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '200px',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                        }}>
                            🎨
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We're Different Section */}
            <section style={{
                padding: '6rem 2rem',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        color: '#7a004b',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        fontWeight: 700
                    }}>
                        More Than Just Drawing Classes
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '4rem',
                        maxWidth: '800px',
                        margin: '0 auto 4rem'
                    }}>
                        We revolutionize how children think, perceive, and create
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem'
                    }}>
                        <div className="animate-slideInLeft" style={{
                            background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                            padding: '3rem',
                            borderRadius: '20px',
                            color: '#fff',
                            boxShadow: '0 15px 40px rgba(122, 0, 75, 0.2)',
                            border: '3px solid #ffc857',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Brain size={60} color="#ffc857" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                color: '#ffc857',
                                fontFamily: "'Playfair Display', serif"
                            }}>
                                Cognitive Development
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 300 }}>
                                Every stroke your child makes is building neural pathways. Art education dramatically enhances problem-solving, spatial reasoning, critical thinking, and academic performance across ALL subjects - not just art.
                            </p>
                        </div>

                        <div className="animate-fadeInUp" style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            padding: '3rem',
                            borderRadius: '20px',
                            color: '#2d1810',
                            boxShadow: '0 15px 40px rgba(255, 200, 87, 0.3)',
                            border: '3px solid #7a004b',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Sparkles size={60} color="#7a004b" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                color: '#7a004b',
                                fontFamily: "'Playfair Display', serif"
                            }}>
                                Creative Intelligence
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 500 }}>
                                In a world dominated by AI and automation, creativity is THE competitive advantage. We don't teach children to copy - we teach them to IMAGINE, INNOVATE, and CREATE something that has never existed before.
                            </p>
                        </div>

                        <div className="animate-slideInRight" style={{
                            background: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)',
                            padding: '3rem',
                            borderRadius: '20px',
                            color: '#fff',
                            boxShadow: '0 15px 40px rgba(255, 182, 193, 0.3)',
                            border: '3px solid #7a004b',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Palette size={60} color="#7a004b" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '2rem',
                                marginBottom: '1rem',
                                color: '#fff',
                                fontFamily: "'Playfair Display', serif",
                                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                Emotional Expression
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 400, textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                                Art gives children a voice when words fail. It builds emotional intelligence, self-confidence, resilience, and the courage to express themselves authentically in a world that often demands conformity.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '4rem',
                        textAlign: 'center'
                    }}>
                        <Link to="/about" className="btn-hover" style={{
                            background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                            color: '#fff',
                            padding: '1.2rem 3rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 8px 25px rgba(122, 0, 75, 0.4)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            position: 'relative'
                        }}>
                            Learn More About Us <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Courses Preview Section */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #fff8e7 0%, #fff 100%)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        color: '#7a004b',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        fontWeight: 700
                    }}>
                        Our Transformative Courses
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '4rem'
                    }}>
                        Each course develops specific cognitive and creative abilities
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {[
                            { name: 'Drawing', icon: '✏️', color: '#ff9a57' },
                            { name: 'Sketching', icon: '🖊️', color: '#ff69b4' },
                            { name: 'Calligraphy', icon: '🖋️', color: '#9b59b6' },
                            { name: 'Painting', icon: '🎨', color: '#3498db' }
                        ].map((course, idx) => (
                            <div
                                key={idx}
                                style={{
                                    background: '#fff',
                                    borderRadius: '20px',
                                    padding: '2.5rem 2rem',
                                    textAlign: 'center',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                    border: '3px solid #7a004b',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(122, 0, 75, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{course.icon}</div>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700,
                                    color: course.color,
                                    marginBottom: '1rem'
                                }}>
                                    {course.name}
                                </h3>
                                <p style={{ fontSize: '1.05rem', color: '#666', lineHeight: 1.6 }}>
                                    Explore the art of {course.name.toLowerCase()}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        textAlign: 'center'
                    }}>
                        <Link to="/courses" className="btn-hover" style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            color: '#7a004b',
                            padding: '1.2rem 3rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            boxShadow: '0 8px 25px rgba(255, 200, 87, 0.4)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            position: 'relative'
                        }}>
                            View All Courses <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                textAlign: 'center',
                color: '#fff'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        fontWeight: 700
                    }}>
                        Ready to Transform Your Child's Future?
                    </h2>
                    <p style={{
                        fontSize: '1.4rem',
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                        opacity: 0.95
                    }}>
                        Join thousands of families worldwide who are investing in their children's creative potential
                    </p>
                    <Link to="/contact" className="btn-hover" style={{
                        background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                        color: '#7a004b',
                        padding: '1.3rem 3.5rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        boxShadow: '0 8px 30px rgba(255, 200, 87, 0.5)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        position: 'relative'
                    }}>
                        Get Started Today <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
        </div>
    );
}