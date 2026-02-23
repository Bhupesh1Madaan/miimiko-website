import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Button from '../layout/Button';

/* ================================================================
   COURSE DATA  –  move to src/data/courses.js once pages grow
   ================================================================ */
export const COURSES_DATA = {
    drawing: {
        id: 'drawing',
        name: 'Drawing',
        icon: '✏️',
        tagline: 'Where every line tells a story',
        brief: 'Master the foundations of visual art through structured pencil and line-work techniques taught by expert instructors.',
        description: `Drawing is the backbone of all visual arts. In our Drawing programme, students progress from basic shapes and proportions
      all the way to expressive still-life and portrait studies. Each class is structured to balance technical skill with imaginative freedom,
      ensuring your child grows not just as an artist, but as a confident visual thinker.

      Our curriculum is carefully paced across three age groups, so every child works at the level that challenges and excites them.`,
        image: null,       // replace with: import drawImg from '../../assets/drawing.jpg'
        duration: '3 Months',
        totalClasses: 24,
        category: 'Foundation',
        categoryColor: '#ff9a57',
        ageGroups: [
            { emoji: '👶', range: '5–7 yrs', label: 'Little Explorers' },
            { emoji: '🧒', range: '8–11 yrs', label: 'Young Artists' },
            { emoji: '👦', range: '12–14 yrs', label: 'Creative Thinkers' },
        ],
        stats: [
            { icon: '📅', value: '3 Months', label: 'Duration' },
            { icon: '📚', value: '24', label: 'Total Classes' },
            { icon: '⏰', value: '45 min', label: 'Per Session' },
            { icon: '👨‍🎨', value: '5–14 yrs', label: 'Age Group' },
        ],
        whatYoullLearn: [
            'Basic shapes, lines and proportions',
            'Shading & light-shadow techniques',
            'Perspective drawing & depth',
            'Observational still-life drawing',
            'Gesture & figure sketching',
            'Composition principles',
        ],
        sidebarFeatures: [
            { icon: '🌐', label: 'Mode', value: '100% Online, Live' },
            { icon: '📆', label: 'Schedule', value: 'Flexible – 2×/week' },
            { icon: '🖥️', label: 'Equipment', value: 'Paper, Pencil, Eraser' },
            { icon: '🎓', label: 'Certificate', value: 'On Completion' },
            { icon: '👩‍🏫', label: 'Teachers', value: 'Trained & Certified' },
            { icon: '🌍', label: 'Language', value: 'English / Hindi' },
        ],
        curriculum: [
            {
                id: 'm1',
                title: 'Module 1 — Foundations',
                lessonCount: 6,
                lessons: [
                    'Introduction to drawing tools',
                    'Basic shapes & line control',
                    'Understanding proportions',
                    'Simple object drawing',
                    'Introduction to shading',
                    'Class project: Still-life sketch',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2 — Observation & Depth',
                lessonCount: 8,
                lessons: [
                    'One-point perspective',
                    'Two-point perspective',
                    'Drawing from reference',
                    'Texture & pattern techniques',
                    'Light & shadow mastery',
                    'Drawing plants & nature',
                    'Urban sketching intro',
                    'Class project: Perspective scene',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3 — Expression & Composition',
                lessonCount: 10,
                lessons: [
                    'Gesture drawing basics',
                    'Face proportions & features',
                    'Figure sketching',
                    'Composition rules',
                    'Storytelling through art',
                    'Mixed-media experiments',
                    'Portfolio curation',
                    'Peer critique session',
                    'Final project briefing',
                    'Final project presentation',
                ],
            },
        ],
    },

    painting: {
        id: 'painting',
        name: 'Painting',
        icon: '🎨',
        tagline: 'Colour your world with confidence',
        brief: 'Explore watercolours, acrylics and mixed media while building a deep understanding of colour theory and artistic expression.',
        description: `Painting unlocks the most expressive dimension of art. Students learn to mix, layer and blend pigments while discovering
      their own visual voice. From basic watercolour washes to bold acrylic compositions, this course gives children a comprehensive
      understanding of colour theory and paint behaviour.

      Every project is designed to build technical skill while sparking genuine creative joy — because a child who loves what they
      create will always go further.`,
        image: null,
        duration: '3 Months',
        totalClasses: 24,
        category: 'Intermediate',
        categoryColor: '#3498db',
        ageGroups: [
            { emoji: '👶', range: '5–7 yrs', label: 'Little Explorers' },
            { emoji: '🧒', range: '8–11 yrs', label: 'Young Artists' },
            { emoji: '👦', range: '12–14 yrs', label: 'Creative Thinkers' },
        ],
        stats: [
            { icon: '📅', value: '3 Months', label: 'Duration' },
            { icon: '📚', value: '24', label: 'Total Classes' },
            { icon: '⏰', value: '45 min', label: 'Per Session' },
            { icon: '👨‍🎨', value: '5–14 yrs', label: 'Age Group' },
        ],
        whatYoullLearn: [
            'Colour theory & the colour wheel',
            'Watercolour wash & wet-on-wet',
            'Acrylic brush techniques',
            'Layering and blending methods',
            'Abstract & expressive painting',
            'Landscape & still-life painting',
        ],
        sidebarFeatures: [
            { icon: '🌐', label: 'Mode', value: '100% Online, Live' },
            { icon: '📆', label: 'Schedule', value: 'Flexible – 2×/week' },
            { icon: '🖥️', label: 'Equipment', value: 'Watercolour/Acrylic Set' },
            { icon: '🎓', label: 'Certificate', value: 'On Completion' },
            { icon: '👩‍🏫', label: 'Teachers', value: 'Trained & Certified' },
            { icon: '🌍', label: 'Language', value: 'English / Hindi' },
        ],
        curriculum: [
            {
                id: 'm1',
                title: 'Module 1 — Colour Foundations',
                lessonCount: 6,
                lessons: [
                    'Introduction to paint types',
                    'Primary, secondary & tertiary colours',
                    'Mixing & tinting techniques',
                    'Brush control exercises',
                    'Simple watercolour wash',
                    'Class project: Colour study',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2 — Technique Building',
                lessonCount: 8,
                lessons: [
                    'Wet-on-wet watercolour',
                    'Wet-on-dry watercolour',
                    'Acrylic base coats',
                    'Layering & impasto',
                    'Blending gradients',
                    'Painting from observation',
                    'Landscape basics',
                    'Class project: Landscape painting',
                ],
            },
            {
                id: 'm3',
                title: 'Module 3 — Creative Expression',
                lessonCount: 10,
                lessons: [
                    'Abstract expressionism intro',
                    'Mixed-media experimentation',
                    'Portrait colour studies',
                    'Atmospheric perspective',
                    'Mood & colour storytelling',
                    'Portfolio painting selection',
                    'Peer critique & feedback',
                    'Revision & refinement',
                    'Final project briefing',
                    'Final project presentation',
                ],
            },
        ],
    },

    calligraphy: {
        id: 'calligraphy',
        name: 'Calligraphy',
        icon: '🖋️',
        tagline: 'The art of beautiful writing',
        brief: 'Discover the meditative craft of calligraphy — from foundational letterforms to expressive scripts for all occasions.',
        description: `Calligraphy is where patience meets artistry. In our Calligraphy programme, students learn to wield the pen with
      control and grace, progressing through foundational letterforms into flowing cursive and decorative scripts.

      Beyond the skill itself, calligraphy teaches children focus, fine motor precision, and an appreciation for craft — qualities
      that translate powerfully into academics and life.`,
        image: null,
        duration: '2 Months',
        totalClasses: 16,
        category: 'All Levels',
        categoryColor: '#9b59b6',
        ageGroups: [
            { emoji: '🧒', range: '7–10 yrs', label: 'Beginners' },
            { emoji: '👦', range: '11–14 yrs', label: 'Intermediate' },
        ],
        stats: [
            { icon: '📅', value: '2 Months', label: 'Duration' },
            { icon: '📚', value: '16', label: 'Total Classes' },
            { icon: '⏰', value: '40 min', label: 'Per Session' },
            { icon: '👨‍🎨', value: '7–14 yrs', label: 'Age Group' },
        ],
        whatYoullLearn: [
            'Pen hold & ink control',
            'Basic strokes & letterforms',
            'Foundational script (print)',
            'Cursive & italic scripts',
            'Spacing & composition',
            'Decorative lettering for cards & gifts',
        ],
        sidebarFeatures: [
            { icon: '🌐', label: 'Mode', value: '100% Online, Live' },
            { icon: '📆', label: 'Schedule', value: 'Flexible – 2×/week' },
            { icon: '🖥️', label: 'Equipment', value: 'Calligraphy pen & ink' },
            { icon: '🎓', label: 'Certificate', value: 'On Completion' },
            { icon: '👩‍🏫', label: 'Teachers', value: 'Trained & Certified' },
            { icon: '🌍', label: 'Language', value: 'English / Hindi' },
        ],
        curriculum: [
            {
                id: 'm1',
                title: 'Module 1 — Pen & Stroke Basics',
                lessonCount: 6,
                lessons: [
                    'Introduction to calligraphy tools',
                    'Pen angle & grip technique',
                    'Basic upstrokes & downstrokes',
                    'Oval & curve strokes',
                    'Letter height guidelines',
                    'Class project: Stroke sheet',
                ],
            },
            {
                id: 'm2',
                title: 'Module 2 — Letterforms & Words',
                lessonCount: 10,
                lessons: [
                    'Lowercase alphabet (a–m)',
                    'Lowercase alphabet (n–z)',
                    'Uppercase alphabet',
                    'Word spacing & flow',
                    'Italic script introduction',
                    'Connecting letters',
                    'Numbers & punctuation',
                    'Short phrase practice',
                    'Card & quote layout',
                    'Class project: Framed quote',
                ],
            },
        ],
    },
};

/* ================================================================
   ACCORDION ITEM (local helper)
   ================================================================ */
const AccordionItem = ({ module }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="curriculum-module">
            <div
                className={`curriculum-module-header${open ? ' open' : ''}`}
                onClick={() => setOpen(p => !p)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setOpen(p => !p)}
                aria-expanded={open}
            >
                <div>
                    <div className="curriculum-module-title">
                        📖 {module.title}
                    </div>
                    <div className="curriculum-module-meta">
                        {module.lessonCount} lessons
                    </div>
                </div>
                <span className={`curriculum-module-arrow${open ? ' open' : ''}`}>▼</span>
            </div>
            <div className={`curriculum-module-lessons${open ? ' open' : ''}`}>
                {module.lessons.map((lesson, i) => (
                    <div key={i} className="curriculum-lesson">
                        <span className="curriculum-lesson-icon">▶</span>
                        {lesson}
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ================================================================
   MAIN COMPONENT
   ================================================================ */
const CourseDetails = () => {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const course = COURSES_DATA[courseId];

    /* 404 fallback */
    if (!course) {
        return (
            <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem' }}>
                <span style={{ fontSize: '5rem' }}>🎨</span>
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--maroon)', fontSize: '2rem' }}>Course not found</h2>
                <Button variant="primary" to="/courses" arrow>Back to All Courses</Button>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: 0 }}>

            {/* ── Hero ── */}
            <section className="course-details-hero">
                <div
                    className="course-details-hero-bg"
                    style={{
                        background: course.image
                            ? `url(${course.image}) center/cover`
                            : 'linear-gradient(135deg, #7a004b 0%, #4a0028 60%, #2a0016 100%)',
                    }}
                />
                <div className="course-details-hero-overlay" />

                <div className="course-details-hero-content animate-fadeInUp">
                    {/* Breadcrumb */}
                    <nav style={{ marginBottom: '1.25rem', fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                        <span>›</span>
                        <Link to="/courses" style={{ color: 'inherit', textDecoration: 'none' }}>Courses</Link>
                        <span>›</span>
                        <span style={{ color: 'var(--gold)' }}>{course.name}</span>
                    </nav>

                    <span className="course-details-badge">{course.category}</span>
                    <h1 className="course-details-title">
                        {course.icon} {course.name}
                    </h1>
                    <p className="course-details-subtitle">{course.tagline}</p>
                </div>
            </section>

            {/* ── Stats bar ── */}
            <div className="container">
                <div className="course-details-stats animate-scaleIn">
                    {course.stats.map((s, i) => (
                        <div key={i} className="course-stat-item">
                            <div className="course-stat-icon">{s.icon}</div>
                            <div className="course-stat-value">{s.value}</div>
                            <div className="course-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Main body + sidebar ── */}
            <div className="course-details-body">

                {/* Main content */}
                <div>

                    {/* About */}
                    <section className="course-section animate-fadeInUp">
                        <h2 className="course-section-title">About This Course</h2>
                        {course.description.trim().split('\n\n').map((para, i) => (
                            <p key={i}>{para.trim()}</p>
                        ))}
                    </section>

                    {/* What you'll learn */}
                    <section className="course-section animate-fadeInUp delay-100">
                        <h2 className="course-section-title">What You'll Learn</h2>
                        <div className="learn-grid">
                            {course.whatYoullLearn.map((item, i) => (
                                <div key={i} className="learn-item">
                                    <div className="learn-item-check">✓</div>
                                    <p className="learn-item-text">{item}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Curriculum */}
                    <section className="course-section animate-fadeInUp delay-200">
                        <h2 className="course-section-title">Course Curriculum</h2>
                        {course.curriculum.map(module => (
                            <AccordionItem key={module.id} module={module} />
                        ))}
                    </section>

                    {/* Age groups */}
                    <section className="course-section animate-fadeInUp delay-300">
                        <h2 className="course-section-title">Age Groups</h2>
                        <div className="age-group-grid">
                            {course.ageGroups.map((ag, i) => (
                                <div key={i} className="age-group-card">
                                    <div className="age-group-emoji">{ag.emoji}</div>
                                    <div className="age-group-range">{ag.range}</div>
                                    <div className="age-group-label">{ag.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* ── Sidebar ── */}
                <aside className="course-details-sidebar">

                    {/* Quick info */}
                    <div className="sidebar-card animate-slideInRight">
                        <div className="sidebar-card-header">
                            <h3>Course Highlights</h3>
                            <p>Everything you need to know</p>
                        </div>
                        <div className="sidebar-card-body">
                            {course.sidebarFeatures.map((f, i) => (
                                <div key={i} className="sidebar-feature-item">
                                    <div className="sidebar-feature-icon">{f.icon}</div>
                                    <div className="sidebar-feature-text">
                                        <strong>{f.label}</strong>
                                        {f.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="sidebar-card animate-slideInRight delay-100">
                        <div className="sidebar-card-body">
                            <div className="sidebar-cta-group">
                                <Button variant="gold" to="/contact" arrow style={{ width: '100%', justifyContent: 'center' }}>
                                    Book a Free Demo
                                </Button>
                                <Button variant="primary" to="/contact" style={{ width: '100%', justifyContent: 'center' }}>
                                    Raise a Query
                                </Button>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem', textAlign: 'center', lineHeight: 1.5 }}>
                                Free demo • No credit card required • Live 1-on-1 session
                            </p>
                        </div>
                    </div>

                    {/* Back button */}
                    <Button
                        variant="outline"
                        onClick={() => navigate('/courses')}
                        style={{ width: '100%', justifyContent: 'center' }}
                    >
                        ← Back to All Courses
                    </Button>
                </aside>
            </div>
        </div>
    );
};

export default CourseDetails;