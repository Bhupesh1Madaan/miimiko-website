import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: 'Priya Sharma',
            location: 'Mumbai, India',
            childName: 'Anya',
            childAge: 9,
            course: 'Drawing & Painting',
            rating: 5,
            text: 'My daughter Anya has transformed completely! Her confidence has skyrocketed, and I can see her thinking more creatively in everything she does. Miimiko isn\'t just teaching art - they\'re shaping minds. The teachers are incredibly patient and genuinely care about each child\'s creative journey.',
            image: '👩‍💼'
        },
        {
            id: 2,
            name: 'David Chen',
            location: 'Singapore',
            childName: 'Lucas',
            childAge: 11,
            course: 'Sketching',
            rating: 5,
            text: 'As parents, we wanted more than just screen time activities. Miimiko gave our son a productive outlet that actually develops his brain. His problem-solving skills have improved dramatically. The online format is so convenient - world-class education from home!',
            image: '👨‍💼'
        },
        {
            id: 3,
            name: 'Aisha Mohammed',
            location: 'Dubai, UAE',
            childName: 'Sara & Zain',
            childAge: 8,
            course: 'All Courses',
            rating: 5,
            text: 'My twins look forward to every single class! I love how the teachers focus on creativity and thinking, not just copying images. The small class sizes ensure personalized attention. Worth every penny - this is an investment in their future.',
            image: '👩'
        },
        {
            id: 4,
            name: 'Rajesh Kumar',
            location: 'Bangalore, India',
            childName: 'Arjun',
            childAge: 13,
            course: 'Calligraphy',
            rating: 5,
            text: 'Calligraphy has taught my son patience and discipline in ways I never imagined. His focus has improved, his handwriting is beautiful, and most importantly, he\'s found something he\'s genuinely passionate about. Thank you Miimiko for nurturing his talent!',
            image: '👨'
        },
        {
            id: 5,
            name: 'Emily Johnson',
            location: 'London, UK',
            childName: 'Sophie',
            childAge: 10,
            course: 'Painting',
            rating: 5,
            text: 'Sophie was always shy and hesitant. Through art classes at Miimiko, she\'s found her voice. The emotional growth we\'ve seen is incredible. She expresses herself confidently now. The global classroom also exposed her to different cultures - a wonderful bonus!',
            image: '👩‍🦰'
        },
        {
            id: 6,
            name: 'Vikram Patel',
            location: 'Toronto, Canada',
            childName: 'Riya',
            childAge: 7,
            course: 'Drawing',
            rating: 5,
            text: 'Even at age 7, Riya is developing spatial reasoning and critical thinking skills that amaze us. Her teachers at Miimiko are not just artists but educators who understand child development. Best decision we made for her creative education!',
            image: '👨‍⚕️'
        },
        {
            id: 7,
            name: 'Fatima Al-Said',
            location: 'Riyadh, Saudi Arabia',
            childName: 'Omar',
            childAge: 12,
            course: 'Sketching & Drawing',
            rating: 5,
            text: 'Omar struggled with traditional academics, but at Miimiko he found his strength. His confidence has grown exponentially. Art education has improved his performance across ALL subjects - exactly what Miimiko promised. Highly recommend to every parent!',
            image: '👩‍🎓'
        },
        {
            id: 8,
            name: 'Samantha Lee',
            location: 'New York, USA',
            childName: 'Ethan',
            childAge: 14,
            course: 'All Courses',
            rating: 5,
            text: 'In today\'s AI-dominated world, creativity is everything. Miimiko understands this deeply. Ethan is now thinking innovatively, approaching problems creatively, and expressing himself artistically. These are skills that will serve him his entire life. Simply outstanding!',
            image: '👩‍💻'
        }
    ];

    useEffect(() => {
        if (autoPlay) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [autoPlay, testimonials.length]);

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setAutoPlay(false);
    };

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setAutoPlay(false);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
        setAutoPlay(false);
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
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .testimonial-card {
          animation: slideIn 0.5s ease-out;
        }

        @media (max-width: 968px) {
          .testimonials-hero-title {
            font-size: 2.5rem !important;
          }
          .testimonial-main {
            flex-direction: column !important;
          }
          .nav-button {
            width: 45px !important;
            height: 45px !important;
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
                    position: 'absolute',
                    bottom: '-50px',
                    right: '-50px',
                    width: '250px',
                    height: '250px',
                    background: 'rgba(255, 182, 193, 0.1)',
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
                    <h1 className="testimonials-hero-title" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '4.5rem',
                        fontWeight: 800,
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
                    }}>
                        Parents Love Miimiko
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontWeight: 300
                    }}>
                        Real transformations from families worldwide who believe in the power of creative education
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section style={{
                padding: '4rem 2rem',
                background: '#fff',
                marginTop: '-50px',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                            padding: '2.5rem 2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#fff',
                            boxShadow: '0 10px 40px rgba(122, 0, 75, 0.2)'
                        }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem',
                                color: '#ffc857'
                            }}>
                                1000+
                            </div>
                            <div style={{ fontSize: '1.2rem', opacity: 0.95 }}>Happy Students</div>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            padding: '2.5rem 2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#2d1810',
                            boxShadow: '0 10px 40px rgba(255, 200, 87, 0.3)'
                        }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem'
                            }}>
                                4.9/5
                            </div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Average Rating</div>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)',
                            padding: '2.5rem 2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#fff',
                            boxShadow: '0 10px 40px rgba(255, 182, 193, 0.3)'
                        }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem'
                            }}>
                                25+
                            </div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Countries</div>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)',
                            padding: '2.5rem 2rem',
                            borderRadius: '20px',
                            textAlign: 'center',
                            color: '#fff',
                            boxShadow: '0 10px 40px rgba(155, 89, 182, 0.3)'
                        }}>
                            <div style={{
                                fontSize: '3.5rem',
                                fontWeight: 800,
                                marginBottom: '0.5rem'
                            }}>
                                98%
                            </div>
                            <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Testimonial Carousel */}
            <section style={{
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, #fff 0%, #fff8e7 100%)'
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
                        What Parents Are Saying
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '4rem'
                    }}>
                        Hear directly from families who've experienced the Miimiko difference
                    </p>

                    {/* Carousel */}
                    <div style={{
                        position: 'relative',
                        background: '#fff',
                        borderRadius: '25px',
                        padding: '4rem',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                        border: '3px solid #7a004b',
                        minHeight: '500px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {/* Quote Icon */}
                        <div style={{
                            position: 'absolute',
                            top: '2rem',
                            left: '3rem',
                            opacity: 0.1
                        }}>
                            <Quote size={80} color="#7a004b" />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={goToPrev}
                            className="nav-button"
                            style={{
                                position: 'absolute',
                                left: '-25px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 8px 25px rgba(122, 0, 75, 0.4)',
                                transition: 'transform 0.3s ease',
                                zIndex: 10,
                                color: '#fff'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-50%) scale(1.1)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(-50%) scale(1)'}
                        >
                            <ChevronLeft size={30} />
                        </button>

                        <button
                            onClick={goToNext}
                            className="nav-button"
                            style={{
                                position: 'absolute',
                                right: '-25px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '60px',
                                height: '60px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 8px 25px rgba(122, 0, 75, 0.4)',
                                transition: 'transform 0.3s ease',
                                zIndex: 10,
                                color: '#fff'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-50%) scale(1.1)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(-50%) scale(1)'}
                        >
                            <ChevronRight size={30} />
                        </button>

                        {/* Testimonial Content */}
                        <div className="testimonial-card" style={{ width: '100%' }}>
                            <div className="testimonial-main" style={{
                                display: 'flex',
                                gap: '3rem',
                                alignItems: 'center'
                            }}>
                                {/* Avatar */}
                                <div style={{
                                    fontSize: '8rem',
                                    flexShrink: 0
                                }}>
                                    {testimonials[activeIndex].image}
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1 }}>
                                    {/* Rating */}
                                    <div style={{
                                        display: 'flex',
                                        gap: '0.3rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {[...Array(testimonials[activeIndex].rating)].map((_, idx) => (
                                            <Star key={idx} size={28} fill="#ffc857" color="#ffc857" />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p style={{
                                        fontSize: '1.4rem',
                                        lineHeight: 1.8,
                                        color: '#2d1810',
                                        marginBottom: '2rem',
                                        fontStyle: 'italic'
                                    }}>
                                        "{testimonials[activeIndex].text}"
                                    </p>

                                    {/* Parent Info */}
                                    <div style={{
                                        borderTop: '2px solid #f0f0f0',
                                        paddingTop: '1.5rem'
                                    }}>
                                        <h4 style={{
                                            fontSize: '1.8rem',
                                            color: '#7a004b',
                                            marginBottom: '0.5rem',
                                            fontWeight: 700,
                                            fontFamily: "'Playfair Display', serif"
                                        }}>
                                            {testimonials[activeIndex].name}
                                        </h4>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#666',
                                            marginBottom: '0.5rem'
                                        }}>
                                            📍 {testimonials[activeIndex].location}
                                        </p>
                                        <p style={{
                                            fontSize: '1.1rem',
                                            color: '#666'
                                        }}>
                                            👨‍👩‍👧 Parent of {testimonials[activeIndex].childName}, {testimonials[activeIndex].childAge} years • {testimonials[activeIndex].course}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Dots Navigation */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '1rem'
                        }}>
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    style={{
                                        width: idx === activeIndex ? '40px' : '12px',
                                        height: '12px',
                                        borderRadius: '10px',
                                        background: idx === activeIndex ? '#7a004b' : '#ddd',
                                        border: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section style={{
                padding: '6rem 2rem',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3rem',
                        color: '#7a004b',
                        textAlign: 'center',
                        marginBottom: '4rem',
                        fontWeight: 700
                    }}>
                        More Success Stories
                    </h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                style={{
                                    background: '#fff',
                                    borderRadius: '20px',
                                    padding: '2.5rem',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                    border: '2px solid #f0f0f0',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(122, 0, 75, 0.15)';
                                    e.currentTarget.style.borderColor = '#ffc857';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.borderColor = '#f0f0f0';
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div style={{ fontSize: '4rem' }}>
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <h4 style={{
                                            fontSize: '1.4rem',
                                            color: '#7a004b',
                                            marginBottom: '0.3rem',
                                            fontWeight: 700
                                        }}>
                                            {testimonial.name}
                                        </h4>
                                        <p style={{ fontSize: '1rem', color: '#666' }}>
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    gap: '0.2rem',
                                    marginBottom: '1rem'
                                }}>
                                    {[...Array(testimonial.rating)].map((_, idx) => (
                                        <Star key={idx} size={20} fill="#ffc857" color="#ffc857" />
                                    ))}
                                </div>

                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.7,
                                    color: '#555',
                                    marginBottom: '1.5rem',
                                    fontStyle: 'italic'
                                }}>
                                    "{testimonial.text.length > 150 ? testimonial.text.substring(0, 150) + '...' : testimonial.text}"
                                </p>

                                <div style={{
                                    fontSize: '0.95rem',
                                    color: '#666',
                                    borderTop: '1px solid #f0f0f0',
                                    paddingTop: '1rem'
                                }}>
                                    Parent of {testimonial.childName}, {testimonial.childAge} years<br />
                                    Course: {testimonial.course}
                                </div>
                            </div>
                        ))}
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
                        Join Our Happy Family of Parents
                    </h2>
                    <p style={{
                        fontSize: '1.4rem',
                        color: '#fff',
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                        opacity: 0.95
                    }}>
                        Experience the transformation yourself. Book a free demo class today!
                    </p>
                    <Link
                        to="/contact"
                        style={{
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
                        Book Your Free Demo <ArrowRight size={22} />
                    </Link>
                </div>
            </section>
        </div>
    );
}