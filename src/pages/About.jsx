import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Target, Users, Globe, Award, Heart, ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <div style={{ background: '#fdfbf7' }}>
            <style>{`
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        @media (max-width: 968px) {
          .about-hero-title {
            font-size: 2.5rem !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

            {/* Hero Section */}
            <section style={{
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                padding: '120px 2rem 4rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '300px',
                    height: '300px',
                    background: 'rgba(255, 200, 87, 0.1)',
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }}></div>

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                }} className="animate-fadeInUp">
                    <h1 className="about-hero-title" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '4.5rem',
                        fontWeight: 800,
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
                    }}>
                        About Miimiko
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontWeight: 300
                    }}>
                        We're not just an art school. We're a movement to transform how children think, create, and perceive the world around them.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section style={{
                padding: '6rem 2rem',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                        padding: '4rem',
                        borderRadius: '25px',
                        color: '#fff',
                        boxShadow: '0 20px 60px rgba(122, 0, 75, 0.2)',
                        border: '3px solid #ffc857'
                    }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '3rem',
                            color: '#ffc857',
                            textAlign: 'center',
                            marginBottom: '2rem',
                            fontWeight: 700
                        }}>
                            Our Mission
                        </h2>
                        <p style={{
                            fontSize: '1.4rem',
                            lineHeight: 1.9,
                            textAlign: 'center',
                            maxWidth: '900px',
                            margin: '0 auto',
                            fontWeight: 300
                        }}>
                            At Miimiko, we believe that art education is far more than a hobby—it's an investment in your child's future. During the crucial developmental years between ages 5 and 14, children's brains are uniquely receptive to creative learning. Our mission is to provide world-class art education to children everywhere, breaking down geographical barriers through our online platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Miimiko Difference */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #fff8e7 0%, #fff 100%)'
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
                        The Miimiko Difference
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '4rem',
                        maxWidth: '800px',
                        margin: '0 auto 4rem'
                    }}>
                        What makes us unique in the world of art education
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem'
                    }}>
                        <div style={{
                            background: '#fff',
                            padding: '3rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '2px solid #ffc857',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Brain size={50} color="#7a004b" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                Focus on Thinking, Not Just Drawing
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                While others focus on techniques and perfect lines, we focus on unleashing the boundless creative potential within every child. We teach children to THINK creatively, not just replicate images. Every lesson is designed to develop cognitive flexibility, problem-solving abilities, and innovative thinking patterns.
                            </p>
                        </div>

                        <div style={{
                            background: '#fff',
                            padding: '3rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '2px solid #ff9a57',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Target size={50} color="#ff9a57" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                Age-Appropriate Curriculum
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                Our curriculum is specifically designed for children aged 5-14 years, the most critical period for creative brain development. We understand the unique developmental stages of young minds and tailor our teaching methods to maximize learning and retention during these formative years.
                            </p>
                        </div>

                        <div style={{
                            background: '#fff',
                            padding: '3rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '2px solid #ffb6c1',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Globe size={50} color="#ff69b4" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                Global Accessibility
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                Our globally accessible online platform breaks geographical barriers, bringing world-class art education to children anywhere in the world. Whether you're in India, Dubai, Singapore, or anywhere else, your child can access the same high-quality creative education.
                            </p>
                        </div>

                        <div style={{
                            background: '#fff',
                            padding: '3rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '2px solid #9b59b6',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Users size={50} color="#9b59b6" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                Expert Instructors
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                Our teachers are not just skilled artists—they're passionate educators who understand child psychology and creative development. They know how to nurture creativity while building technical skills, creating an environment where every child feels confident to express themselves.
                            </p>
                        </div>

                        <div style={{
                            background: '#fff',
                            padding: '3rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '2px solid #3498db',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Award size={50} color="#3498db" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                Holistic Development
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                We don't just teach art—we develop well-rounded individuals. Our courses enhance fine motor skills, boost academic performance, improve emotional intelligence, build self-confidence, and develop the critical thinking skills that will serve your child throughout their life.
                            </p>
                        </div>

                        <div style={{
                            background: '#fff',
                            padding: '3rem',
                            borderRadius: '20px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                            border: '2px solid #e74c3c',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Heart size={50} color="#e74c3c" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{
                                fontSize: '1.8rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                Personalized Attention
                            </h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#555' }}>
                                Small class sizes ensure every child receives individual attention and guidance. We celebrate each student's unique creative voice and adapt our teaching to their learning style, ensuring no child is left behind in their creative journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section style={{
                padding: '6rem 2rem',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        color: '#7a004b',
                        textAlign: 'center',
                        marginBottom: '2rem',
                        fontWeight: 700
                    }}>
                        Our Philosophy
                    </h2>
                    <div style={{
                        fontSize: '1.3rem',
                        lineHeight: 1.9,
                        color: '#444',
                        textAlign: 'center'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We understand that parents like you recognize the transformative power of drawing, sketching, calligraphy, and painting in shaping confident, creative, and capable individuals. These formative years are CRITICAL—this is when creative thinking patterns are established for life.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In an age where artificial intelligence and automation are reshaping the world, <strong style={{ color: '#7a004b' }}>creativity is the ultimate competitive advantage</strong>. The jobs of tomorrow will require innovative thinking, problem-solving, and the ability to see what others cannot. Art education builds these exact skills.
                        </p>
                        <p>
                            At Miimiko, we're not preparing children for the world as it is today. We're preparing them for a future that demands <strong style={{ color: '#7a004b' }}>creative intelligence, emotional resilience, and the courage to imagine</strong> what doesn't yet exist.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        fontWeight: 700
                    }}>
                        Join the Miimiko Family
                    </h2>
                    <p style={{
                        fontSize: '1.4rem',
                        color: '#fff',
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                        opacity: 0.95
                    }}>
                        Be part of a global community nurturing the next generation of creative thinkers
                    </p>
                    <Link to="/contact" style={{
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
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Start Your Journey <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
        </div>
    );
}