import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const categories = [
        { id: 'all', name: 'All Artwork', icon: '🎨' },
        { id: 'drawing', name: 'Drawing', icon: '✏️' },
        { id: 'sketching', name: 'Sketching', icon: '🖊️' },
        { id: 'calligraphy', name: 'Calligraphy', icon: '🖋️' },
        { id: 'painting', name: 'Painting', icon: '🎨' }
    ];

    const artworks = [
        // Drawing
        { id: 1, title: 'Portrait Study', student: 'Aarav, Age 12', category: 'drawing', emoji: '👨‍🎨', color: '#ff9a57' },
        { id: 2, title: 'Still Life Composition', student: 'Zara, Age 10', category: 'drawing', emoji: '🍎', color: '#ff9a57' },
        { id: 3, title: 'Perspective Building', student: 'Arjun, Age 13', category: 'drawing', emoji: '🏛️', color: '#ff9a57' },
        { id: 4, title: 'Animal Study', student: 'Mira, Age 9', category: 'drawing', emoji: '🦁', color: '#ff9a57' },
        { id: 5, title: 'Nature Details', student: 'Rohan, Age 11', category: 'drawing', emoji: '🌺', color: '#ff9a57' },
        { id: 6, title: 'Character Design', student: 'Sara, Age 8', category: 'drawing', emoji: '🧚', color: '#ff9a57' },

        // Sketching
        { id: 7, title: 'Urban Landscape', student: 'Kabir, Age 14', category: 'sketching', emoji: '🏙️', color: '#ff69b4' },
        { id: 8, title: 'Quick Portrait', student: 'Ananya, Age 11', category: 'sketching', emoji: '👧', color: '#ff69b4' },
        { id: 9, title: 'Nature Sketch', student: 'Vihaan, Age 10', category: 'sketching', emoji: '🌳', color: '#ff69b4' },
        { id: 10, title: 'Movement Study', student: 'Isha, Age 12', category: 'sketching', emoji: '💃', color: '#ff69b4' },
        { id: 11, title: 'Street Scene', student: 'Aditya, Age 13', category: 'sketching', emoji: '🚗', color: '#ff69b4' },
        { id: 12, title: 'Expressive Lines', student: 'Diya, Age 9', category: 'sketching', emoji: '✨', color: '#ff69b4' },

        // Calligraphy
        { id: 13, title: 'Gothic Letters', student: 'Ayaan, Age 11', category: 'calligraphy', emoji: '📜', color: '#9b59b6' },
        { id: 14, title: 'Brush Calligraphy', student: 'Riya, Age 13', category: 'calligraphy', emoji: '🖌️', color: '#9b59b6' },
        { id: 15, title: 'Italic Style', student: 'Aryan, Age 10', category: 'calligraphy', emoji: '✍️', color: '#9b59b6' },
        { id: 16, title: 'Decorative Letters', student: 'Priya, Age 12', category: 'calligraphy', emoji: '💌', color: '#9b59b6' },
        { id: 17, title: 'Poetry in Art', student: 'Krish, Age 14', category: 'calligraphy', emoji: '📖', color: '#9b59b6' },
        { id: 18, title: 'Modern Lettering', student: 'Nisha, Age 9', category: 'calligraphy', emoji: '🎭', color: '#9b59b6' },

        // Painting
        { id: 19, title: 'Abstract Expression', student: 'Advait, Age 12', category: 'painting', emoji: '🌈', color: '#3498db' },
        { id: 20, title: 'Watercolor Sunset', student: 'Meera, Age 10', category: 'painting', emoji: '🌅', color: '#3498db' },
        { id: 21, title: 'Floral Beauty', student: 'Shivansh, Age 11', category: 'painting', emoji: '🌸', color: '#3498db' },
        { id: 22, title: 'Ocean Dreams', student: 'Tara, Age 13', category: 'painting', emoji: '🌊', color: '#3498db' },
        { id: 23, title: 'Landscape Wonder', student: 'Reyansh, Age 14', category: 'painting', emoji: '⛰️', color: '#3498db' },
        { id: 24, title: 'Color Harmony', student: 'Anika, Age 8', category: 'painting', emoji: '🎨', color: '#3498db' }
    ];

    const filteredArtworks = selectedCategory === 'all'
        ? artworks
        : artworks.filter(art => art.category === selectedCategory);

    const openLightbox = (artwork) => {
        setSelectedImage(artwork);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
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

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .lightbox-overlay {
          animation: fadeIn 0.3s ease-out;
        }

        .lightbox-content {
          animation: zoomIn 0.3s ease-out;
        }

        .gallery-item {
          transition: all 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-10px) scale(1.02);
        }

        @media (max-width: 968px) {
          .gallery-hero-title {
            font-size: 2.5rem !important;
          }
          .filter-buttons {
            flex-wrap: wrap !important;
            justify-content: center !important;
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
                    position: 'absolute',
                    bottom: '-50px',
                    left: '-50px',
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
                    <h1 className="gallery-hero-title" style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '4.5rem',
                        fontWeight: 800,
                        color: '#ffc857',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        textShadow: '3px 3px 6px rgba(0,0,0,0.3)'
                    }}>
                        Student Gallery
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: 1.7,
                        fontWeight: 300
                    }}>
                        Celebrating the creative brilliance of young artists from around the world
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section style={{
                padding: '3rem 2rem 2rem',
                background: '#fff',
                position: 'sticky',
                top: '88px',
                zIndex: 100,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '1rem'
                    }}>
                        <Filter size={24} color="#7a004b" />
                        <h3 style={{
                            fontSize: '1.5rem',
                            color: '#7a004b',
                            fontWeight: 700
                        }}>
                            Filter by Course
                        </h3>
                    </div>
                    <div className="filter-buttons" style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '50px',
                                    border: selectedCategory === category.id ? '3px solid #7a004b' : '2px solid #ddd',
                                    background: selectedCategory === category.id
                                        ? 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)'
                                        : '#fff',
                                    color: selectedCategory === category.id ? '#fff' : '#7a004b',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: selectedCategory === category.id
                                        ? '0 6px 20px rgba(122, 0, 75, 0.3)'
                                        : '0 2px 10px rgba(0,0,0,0.05)',
                                    fontFamily: 'inherit'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedCategory !== category.id) {
                                        e.target.style.background = '#fff8e7';
                                        e.target.style.borderColor = '#ffc857';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedCategory !== category.id) {
                                        e.target.style.background = '#fff';
                                        e.target.style.borderColor = '#ddd';
                                    }
                                }}
                            >
                                {category.icon} {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{
                padding: '4rem 2rem 6rem',
                background: 'linear-gradient(180deg, #fff 0%, #fff8e7 100%)'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: '#666',
                        marginBottom: '3rem'
                    }}>
                        Showing {filteredArtworks.length} artwork{filteredArtworks.length !== 1 ? 's' : ''}
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {filteredArtworks.map((artwork) => (
                            <div
                                key={artwork.id}
                                className="gallery-item"
                                onClick={() => openLightbox(artwork)}
                                style={{
                                    background: '#fff',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    border: `3px solid ${artwork.color}`
                                }}
                            >
                                <div style={{
                                    height: '280px',
                                    background: `linear-gradient(135deg, ${artwork.color}22 0%, ${artwork.color}44 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '120px',
                                    position: 'relative'
                                }}>
                                    {artwork.emoji}
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: artwork.color,
                                        color: '#fff',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        textTransform: 'capitalize'
                                    }}>
                                        {artwork.category}
                                    </div>
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h4 style={{
                                        fontSize: '1.5rem',
                                        color: '#7a004b',
                                        marginBottom: '0.5rem',
                                        fontWeight: 700,
                                        fontFamily: "'Playfair Display', serif"
                                    }}>
                                        {artwork.title}
                                    </h4>
                                    <p style={{
                                        color: '#666',
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem'
                                    }}>
                                        <span style={{ fontSize: '1.3rem' }}>👨‍🎨</span>
                                        {artwork.student}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredArtworks.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: '4rem 2rem',
                            color: '#666'
                        }}>
                            <p style={{ fontSize: '1.5rem' }}>No artworks found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Inspiration Section */}
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
                        Your Child's Artwork Could Be Here!
                    </h2>
                    <p style={{
                        fontSize: '1.4rem',
                        color: '#fff',
                        marginBottom: '2.5rem',
                        lineHeight: 1.7,
                        opacity: 0.95
                    }}>
                        Join our global community of young artists and watch your child's creativity flourish
                    </p>
                    <a
                        href="/contact"
                        style={{
                            background: 'linear-gradient(135deg, #ffc857 0%, #ff9a57 100%)',
                            color: '#7a004b',
                            padding: '1.3rem 3.5rem',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            boxShadow: '0 8px 30px rgba(255, 200, 87, 0.5)',
                            display: 'inline-block',
                            transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Book a Free Demo Class
                    </a>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxOpen && selectedImage && (
                <div
                    className="lightbox-overlay"
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.9)',
                        zIndex: 3000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem'
                    }}
                >
                    <button
                        onClick={closeLightbox}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'rgba(255, 255, 255, 0.2)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                            color: '#fff',
                            zIndex: 3001
                        }}
                        onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.3)'}
                        onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: '#fff',
                            borderRadius: '25px',
                            maxWidth: '800px',
                            width: '100%',
                            overflow: 'hidden',
                            border: `4px solid ${selectedImage.color}`
                        }}
                    >
                        <div style={{
                            height: '400px',
                            background: `linear-gradient(135deg, ${selectedImage.color}22 0%, ${selectedImage.color}44 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '180px'
                        }}>
                            {selectedImage.emoji}
                        </div>
                        <div style={{ padding: '3rem' }}>
                            <div style={{
                                display: 'inline-block',
                                background: selectedImage.color,
                                color: '#fff',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '20px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                marginBottom: '1rem',
                                textTransform: 'capitalize'
                            }}>
                                {selectedImage.category}
                            </div>
                            <h3 style={{
                                fontSize: '3rem',
                                color: '#7a004b',
                                marginBottom: '1rem',
                                fontFamily: "'Playfair Display', serif",
                                fontWeight: 700
                            }}>
                                {selectedImage.title}
                            </h3>
                            <p style={{
                                fontSize: '1.5rem',
                                color: '#666',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.8rem',
                                marginBottom: '2rem'
                            }}>
                                <span style={{ fontSize: '2rem' }}>👨‍🎨</span>
                                Created by {selectedImage.student}
                            </p>
                            <p style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                color: '#555',
                                fontStyle: 'italic'
                            }}>
                                "Every piece of art tells a story of creativity, dedication, and the joy of learning. At Miimiko, we celebrate each child's unique artistic journey."
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}