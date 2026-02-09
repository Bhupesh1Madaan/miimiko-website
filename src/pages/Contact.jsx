import React, { useState } from 'react';
import { Send, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        email: '',
        whatsapp: '',
        childAge: '',
        country: '',
        course: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you'll integrate with your Django backend
        console.log('Form submitted:', formData);
        setFormSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({
                parentName: '',
                childName: '',
                email: '',
                whatsapp: '',
                childAge: '',
                country: '',
                course: '',
                message: ''
            });
        }, 5000);
    };

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
          .contact-hero-title {
            font-size: 2.5rem !important;
          }
          .contact-info-grid {
            grid-template-columns: 1fr !important;
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
                    <h1 className="contact-hero-title" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '4.5rem',
                        fontWeight: 800,
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
                    }}>
                        Get In Touch
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontWeight: 300
                    }}>
                        Ready to unlock your child's creative potential? Let's start the conversation.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section style={{
                padding: '4rem 2rem',
                background: '#fff',
                marginTop: '-50px',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div className="contact-info-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        <div style={{
                            background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            color: '#fff',
                            textAlign: 'center',
                            boxShadow: '0 10px 40px rgba(122, 0, 75, 0.2)',
                            border: '2px solid #ffc857'
                        }}>
                            <Mail size={40} color="#ffc857" style={{ marginBottom: '1rem' }} />
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '0.8rem',
                                color: '#ffc857',
                                fontWeight: 700
                            }}>
                                Email Us
                            </h3>
                            <a href="mailto:info@miimiko.com" style={{
                                color: '#fff',
                                textDecoration: 'none',
                                fontSize: '1.1rem'
                            }}>
                                info@miimiko.com
                            </a>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            color: '#7a004b',
                            textAlign: 'center',
                            boxShadow: '0 10px 40px rgba(255, 200, 87, 0.3)',
                            border: '2px solid #7a004b'
                        }}>
                            <Phone size={40} color="#7a004b" style={{ marginBottom: '1rem' }} />
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '0.8rem',
                                fontWeight: 700
                            }}>
                                Call Us
                            </h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                                +91 XXXXX XXXXX
                            </p>
                        </div>

                        <div style={{
                            background: 'linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)',
                            padding: '2.5rem',
                            borderRadius: '20px',
                            color: '#fff',
                            textAlign: 'center',
                            boxShadow: '0 10px 40px rgba(255, 182, 193, 0.3)',
                            border: '2px solid #7a004b'
                        }}>
                            <Clock size={40} color="#fff" style={{ marginBottom: '1rem' }} />
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '0.8rem',
                                fontWeight: 700,
                                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                            }}>
                                Response Time
                            </h3>
                            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                                Within 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section style={{
                padding: '4rem 2rem 6rem',
                background: 'linear-gradient(180deg, #fff 0%, #fff8e7 100%)'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '3.5rem',
                        color: '#7a004b',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        fontWeight: 700
                    }}>
                        Book a Free Demo or Get Pricing
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '4rem'
                    }}>
                        Fill out the form below and our sales executive will contact you within 24 hours
                    </p>

                    <div style={{
                        background: '#fff',
                        borderRadius: '25px',
                        padding: '3rem',
                        boxShadow: '0 15px 50px rgba(0,0,0,0.1)',
                        border: '3px solid #7a004b'
                    }}>
                        {!formSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            color: '#7a004b',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            Parent's Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="parentName"
                                            value={formData.parentName}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '2px solid #ddd',
                                                fontSize: '1rem',
                                                transition: 'border 0.3s ease',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>

                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            color: '#7a004b',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            Child's Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="childName"
                                            value={formData.childName}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '2px solid #ddd',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            color: '#7a004b',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '2px solid #ddd',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>

                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            color: '#7a004b',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            WhatsApp Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '2px solid #ddd',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '1.5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            color: '#7a004b',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            Child's Age *
                                        </label>
                                        <select
                                            name="childAge"
                                            value={formData.childAge}
                                            onChange={handleChange}
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '2px solid #ddd',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit',
                                                backgroundColor: '#fff'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        >
                                            <option value="">Select age</option>
                                            {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(age => (
                                                <option key={age} value={age}>{age} years</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '0.5rem',
                                            color: '#7a004b',
                                            fontWeight: 600,
                                            fontSize: '1.1rem'
                                        }}>
                                            Country *
                                        </label>
                                        <input
                                            type="text"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            placeholder="e.g., India, UAE, Singapore"
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                borderRadius: '12px',
                                                border: '2px solid #ddd',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                        />
                                    </div>
                                </div>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        color: '#7a004b',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>
                                        Interested Course *
                                    </label>
                                    <select
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            border: '2px solid #ddd',
                                            fontSize: '1rem',
                                            fontFamily: 'inherit',
                                            backgroundColor: '#fff'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    >
                                        <option value="">Select a course</option>
                                        <option value="drawing">Drawing</option>
                                        <option value="sketching">Sketching</option>
                                        <option value="calligraphy">Calligraphy</option>
                                        <option value="painting">Painting</option>
                                        <option value="all">All Courses</option>
                                    </select>
                                </div>

                                <div style={{ marginBottom: '2rem' }}>
                                    <label style={{
                                        display: 'block',
                                        marginBottom: '0.5rem',
                                        color: '#7a004b',
                                        fontWeight: 600,
                                        fontSize: '1.1rem'
                                    }}>
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your child's interests or any questions you have..."
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            borderRadius: '12px',
                                            border: '2px solid #ddd',
                                            fontSize: '1rem',
                                            fontFamily: 'inherit',
                                            resize: 'vertical'
                                        }}
                                        onFocus={(e) => e.target.style.borderColor = '#7a004b'}
                                        onBlur={(e) => e.target.style.borderColor = '#ddd'}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    style={{
                                        width: '100%',
                                        background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                                        color: '#fff',
                                        padding: '1.3rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        boxShadow: '0 8px 25px rgba(122, 0, 75, 0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        fontFamily: 'inherit'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 10px 30px rgba(122, 0, 75, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 8px 25px rgba(122, 0, 75, 0.4)';
                                    }}
                                >
                                    <Send size={20} /> Submit Request
                                </button>
                            </form>
                        ) : (
                            <div style={{
                                textAlign: 'center',
                                padding: '3rem'
                            }}>
                                <div style={{
                                    fontSize: '5rem',
                                    marginBottom: '1.5rem'
                                }}>
                                    ✅
                                </div>
                                <h3 style={{
                                    fontSize: '2.5rem',
                                    color: '#7a004b',
                                    marginBottom: '1rem',
                                    fontFamily: "'Playfair Display', serif",
                                    fontWeight: 700
                                }}>
                                    Thank You!
                                </h3>
                                <p style={{
                                    fontSize: '1.3rem',
                                    color: '#555',
                                    lineHeight: 1.8
                                }}>
                                    Your request has been received! Our sales executive will connect with you within the next 24 hours to discuss course details, pricing, and schedule your free demo class.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing Query CTA */}
            <section id="pricing" style={{
                padding: '4rem 2rem',
                background: '#fff'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                        padding: '3rem',
                        borderRadius: '20px',
                        textAlign: 'center',
                        color: '#2d1810',
                        boxShadow: '0 15px 50px rgba(255, 200, 87, 0.3)'
                    }}>
                        <h3 style={{
                            fontSize: '2.5rem',
                            marginBottom: '1rem',
                            fontWeight: 700,
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            Questions About Pricing?
                        </h3>
                        <p style={{
                            fontSize: '1.3rem',
                            marginBottom: '2rem',
                            fontWeight: 500
                        }}>
                            Our team will provide personalized pricing based on your requirements and course selection
                        </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            style={{
                                display: 'inline-block',
                                background: '#7a004b',
                                color: '#fff',
                                padding: '1.2rem 3rem',
                                borderRadius: '50px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                transition: 'transform 0.3s ease',
                                boxShadow: '0 6px 20px rgba(122, 0, 75, 0.4)',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: 'inherit'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Raise a Query
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}