import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, ArrowRight, Check } from 'lucide-react';

export default function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const coursesData = [
        {
            id: 'drawing',
            name: 'Drawing',
            icon: '✏️',
            color: '#ff9a57',
            gradient: 'linear-gradient(135deg, #ff9a57 0%, #ff6b35 100%)',
            shortDesc: 'Master fundamental techniques and build the foundation for all visual arts',
            fullDesc: 'Drawing is the cornerstone of all visual arts. This comprehensive course teaches children to see the world through an artist\'s eyes, developing observation skills, perspective understanding, and the ability to translate three-dimensional reality onto a two-dimensional surface.',
            benefits: [
                'Develops spatial awareness and visual thinking',
                'Enhances hand-eye coordination and fine motor skills',
                'Builds confidence in artistic expression',
                'Teaches proportion, perspective, and composition',
                'Improves focus and attention to detail',
                'Strengthens problem-solving abilities'
            ],
            whatYouLearn: [
                'Basic shapes and forms',
                'Light and shadow techniques',
                'Perspective drawing (1-point, 2-point, 3-point)',
                'Still life composition',
                'Portrait and figure drawing basics',
                'Texture and pattern creation'
            ],
            ageGroup: '5-14 years',
            duration: '3-6 months (flexible)',
            classFormat: 'Live online sessions',
            classSize: 'Small groups (max 8 students)'
        },
        {
            id: 'sketching',
            name: 'Sketching',
            icon: '🖊️',
            color: '#ff69b4',
            gradient: 'linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)',
            shortDesc: 'Develop quick thinking and the ability to capture ideas rapidly and confidently',
            fullDesc: 'Sketching is about speed, spontaneity, and capturing the essence of a subject. This course develops quick observational skills, teaches children to work confidently without overthinking, and builds the ability to visualize and communicate ideas rapidly.',
            benefits: [
                'Improves quick thinking and decision-making',
                'Builds confidence to create without fear',
                'Enhances observational skills',
                'Develops visual communication abilities',
                'Teaches to work under time constraints',
                'Encourages creative spontaneity'
            ],
            whatYouLearn: [
                'Quick gesture drawing techniques',
                'Line quality and expression',
                'Urban sketching fundamentals',
                'Character design and development',
                'Environment and landscape sketching',
                'Speed sketching methods'
            ],
            ageGroup: '5-14 years',
            duration: '3-6 months (flexible)',
            classFormat: 'Live online sessions',
            classSize: 'Small groups (max 8 students)'
        },
        {
            id: 'calligraphy',
            name: 'Calligraphy',
            icon: '🖋️',
            color: '#9b59b6',
            gradient: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
            shortDesc: 'Cultivate patience, precision, and appreciation for beauty in every stroke',
            fullDesc: 'Calligraphy is the art of beautiful writing. This meditative practice teaches children discipline, patience, and precision while connecting them to cultural traditions. Every stroke requires focus, control, and intentionality.',
            benefits: [
                'Develops extreme patience and discipline',
                'Enhances fine motor control and precision',
                'Teaches mindfulness and focus',
                'Connects to cultural heritage and history',
                'Improves handwriting and letter formation',
                'Builds appreciation for detail and craftsmanship'
            ],
            whatYouLearn: [
                'Basic calligraphy strokes and letterforms',
                'Different calligraphy styles (Gothic, Italic, Brush)',
                'Ink control and pen handling',
                'Layout and composition in calligraphy',
                'Creative lettering and flourishes',
                'Modern calligraphy applications'
            ],
            ageGroup: '5-14 years',
            duration: '3-6 months (flexible)',
            classFormat: 'Live online sessions',
            classSize: 'Small groups (max 8 students)'
        },
        {
            id: 'painting',
            name: 'Painting',
            icon: '🎨',
            color: '#3498db',
            gradient: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
            shortDesc: 'Explore emotional expression and the freedom to create without boundaries',
            fullDesc: 'Painting opens up a world of color, emotion, and unlimited creative expression. This course teaches children to work with various mediums, understand color theory, and express themselves through bold, confident brushwork.',
            benefits: [
                'Develops emotional intelligence and expression',
                'Teaches color theory and harmony',
                'Encourages bold, confident creativity',
                'Builds understanding of different mediums',
                'Enhances visual perception of color and light',
                'Provides therapeutic creative outlet'
            ],
            whatYouLearn: [
                'Color theory and color mixing',
                'Watercolor techniques and methods',
                'Acrylic painting fundamentals',
                'Brush techniques and mark-making',
                'Abstract and realistic painting styles',
                'Composition and visual storytelling'
            ],
            ageGroup: '5-14 years',
            duration: '3-6 months (flexible)',
            classFormat: 'Live online sessions',
            classSize: 'Small groups (max 8 students)'
        }
    ];

    useEffect(() => {
        // Check URL hash for direct course opening
        const hash = window.location.hash.substring(1);
        if (hash) {
            const course = coursesData.find(c => c.id === hash);
            if (course) {
                setSelectedCourse(course);
                setModalOpen(true);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const openModal = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCourse(null);
        document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    return (
        <div style={{ background: '#fdfbf7', minHeight: '100vh' }}>
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

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .modal-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          animation: slideIn 0.3s ease-out;
        }

        /* Hide scrollbar but keep scrolling */
        .modal-content {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .modal-content::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        @media (max-width: 968px) {
          .courses-hero-title {
            font-size: 2.5rem !important;
          }
          .modal-content {
            width: 95% !important;
            max-height: 85vh !important;
            margin: 2rem auto !important;
          }
        }
      `}</style>

            {/* Hero Section */}
            <section style={{
                minHeight: '50vh',
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
                    left: '-50px',
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
                    <h1 className="courses-hero-title" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '4.5rem',
                        fontWeight: 800,
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
                    }}>
                        Our Courses
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontWeight: 300
                    }}>
                        Transformative art education designed to develop creativity, thinking, and confidence
                    </p>
                </div>
            </section>

            {/* Courses Grid */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #fff8e7 0%, #fff 100%)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3rem',
                        color: '#7a004b',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        fontWeight: 700
                    }}>
                        Choose Your Creative Journey
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '4rem'
                    }}>
                        Click on any course to learn more
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '3rem'
                    }}>
                        {coursesData.map((course, idx) => (
                            <div
                                key={idx}
                                onClick={() => openModal(course)}
                                style={{
                                    background: '#fff',
                                    borderRadius: '25px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                    border: `3px solid ${course.color}`,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-15px)';
                                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(122, 0, 75, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div style={{
                                    background: course.gradient,
                                    padding: '3rem 2rem',
                                    textAlign: 'center',
                                    color: '#fff'
                                }}>
                                    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{course.icon}</div>
                                    <h3 style={{
                                        fontSize: '2.5rem',
                                        fontFamily: "'Playfair Display', serif",
                                        fontWeight: 700,
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                                    }}>
                                        {course.name}
                                    </h3>
                                </div>
                                <div style={{ padding: '2.5rem 2rem' }}>
                                    <p style={{
                                        fontSize: '1.15rem',
                                        lineHeight: 1.7,
                                        color: '#555',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {course.shortDesc}
                                    </p>
                                    <button style={{
                                        background: course.gradient,
                                        color: '#fff',
                                        padding: '1rem 2rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        fontSize: '1.1rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        transition: 'transform 0.2s ease',
                                        fontFamily: 'inherit'
                                    }}
                                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                    >
                                        Learn More <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Courses */}
            <section style={{
                padding: '6rem 2rem',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3rem',
                        color: '#7a004b',
                        marginBottom: '2rem',
                        fontWeight: 700
                    }}>
                        Why Miimiko Courses Are Different
                    </h2>
                    <p style={{
                        fontSize: '1.3rem',
                        lineHeight: 1.8,
                        color: '#555',
                        marginBottom: '3rem'
                    }}>
                        We don't just teach techniques. We develop <strong style={{ color: '#7a004b' }}>creative thinkers</strong> who can innovate, problem-solve, and express themselves with confidence. Our courses are designed around cognitive development principles, ensuring every lesson builds not just artistic skills but critical thinking abilities that will benefit your child across all areas of life.
                    </p>
                    <Link to="/contact" style={{
                        background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                        color: '#fff',
                        padding: '1.3rem 3rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        boxShadow: '0 8px 25px rgba(122, 0, 75, 0.4)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Book a Free Demo <ArrowRight size={22} />
                    </Link>
                </div>
            </section>

            {/* Modal */}
            {modalOpen && selectedCourse && (
                <div
                    className="modal-overlay"
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        overflowY: 'auto'
                    }}
                >
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: '#fff',
                            borderRadius: '25px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            boxShadow: '0 20px 80px rgba(0,0,0,0.3)',
                            border: `4px solid ${selectedCourse.color}`
                        }}
                    >
                        {/* Modal Header */}
                        <div style={{
                            background: selectedCourse.gradient,
                            padding: '3rem 3rem 2rem',
                            color: '#fff',
                            position: 'relative'
                        }}>
                            <button
                                onClick={closeModal}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'rgba(255, 255, 255, 0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                    color: '#fff'
                                }}
                                onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                                onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                            >
                                <X size={28} />
                            </button>

                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{selectedCourse.icon}</div>
                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '3.5rem',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                {selectedCourse.name}
                            </h2>
                            <p style={{
                                fontSize: '1.3rem',
                                opacity: 0.95,
                                lineHeight: 1.6
                            }}>
                                {selectedCourse.shortDesc}
                            </p>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: '3rem' }}>
                            {/* Course Overview */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '2rem',
                                    color: '#7a004b',
                                    marginBottom: '1rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700
                                }}>
                                    Course Overview
                                </h3>
                                <p style={{
                                    fontSize: '1.2rem',
                                    lineHeight: 1.8,
                                    color: '#555'
                                }}>
                                    {selectedCourse.fullDesc}
                                </p>
                            </div>

                            {/* Course Details Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1.5rem',
                                marginBottom: '3rem',
                                padding: '2rem',
                                background: '#fff8e7',
                                borderRadius: '15px'
                            }}>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>Age Group</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#7a004b' }}>{selectedCourse.ageGroup}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>Duration</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#7a004b' }}>{selectedCourse.duration}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>Format</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#7a004b' }}>{selectedCourse.classFormat}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.3rem' }}>Class Size</p>
                                    <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#7a004b' }}>{selectedCourse.classSize}</p>
                                </div>
                            </div>

                            {/* What You'll Learn */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '2rem',
                                    color: '#7a004b',
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700
                                }}>
                                    What You'll Learn
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {selectedCourse.whatYouLearn.map((item, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '0.8rem',
                                            alignItems: 'flex-start'
                                        }}>
                                            <Check size={24} color={selectedCourse.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    fontSize: '2rem',
                                    color: '#7a004b',
                                    marginBottom: '1.5rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700
                                }}>
                                    Benefits for Your Child
                                </h3>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1rem'
                                }}>
                                    {selectedCourse.benefits.map((benefit, idx) => (
                                        <div key={idx} style={{
                                            display: 'flex',
                                            gap: '0.8rem',
                                            alignItems: 'flex-start',
                                            padding: '1rem',
                                            background: '#f8f9fa',
                                            borderRadius: '10px'
                                        }}>
                                            <Check size={24} color={selectedCourse.color} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                                            <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6 }}>{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <div style={{
                                background: selectedCourse.gradient,
                                padding: '3rem',
                                borderRadius: '20px',
                                textAlign: 'center',
                                color: '#fff'
                            }}>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700,
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                                }}>
                                    Ready to Get Started?
                                </h3>
                                <p style={{
                                    fontSize: '1.3rem',
                                    marginBottom: '2rem',
                                    opacity: 0.95,
                                    lineHeight: 1.6
                                }}>
                                    Speak with our sales executive to learn more about this course, pricing, schedules, and book your free demo class!
                                </p>
                                <Link
                                    to="/contact"
                                    onClick={closeModal}
                                    style={{
                                        background: '#fff',
                                        color: selectedCourse.color,
                                        padding: '1.3rem 3rem',
                                        borderRadius: '50px',
                                        textDecoration: 'none',
                                        fontWeight: 700,
                                        fontSize: '1.2rem',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '0.8rem',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                                        transition: 'transform 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                >
                                    <Phone size={22} /> Talk to Sales Executive
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}