import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/courses/CourseCard';
import Button from '../components/layout/Button';

const ALL_COURSES = [
    {
        id: 'drawing',
        name: 'Drawing',
        icon: '✏️',
        brief: 'Build the foundation of all visual arts. Master lines, proportion, shading, and composition from the ground up.',
        image: null,   // replace with: new URL('../assets/drawing.jpg', import.meta.url).href
        duration: '3 Months',
        totalClasses: 24,
        category: 'Foundation',
        categoryColor: '#ff9a57',
    },
    {
        id: 'painting',
        name: 'Painting',
        icon: '🎨',
        brief: 'Explore watercolours and acrylics while discovering your unique colour voice and expressive painting style.',
        image: null,
        duration: '3 Months',
        totalClasses: 24,
        category: 'Intermediate',
        categoryColor: '#3498db',
    },
    {
        id: 'calligraphy',
        name: 'Calligraphy',
        icon: '🖋️',
        brief: 'The meditative craft of beautiful writing — from foundational letterforms to flowing decorative scripts.',
        image: null,
        duration: '2 Months',
        totalClasses: 16,
        category: 'All Levels',
        categoryColor: '#9b59b6',
    },
];

const COMPARE_ROWS = [
    { feature: 'Duration', drawing: '3 Months', painting: '3 Months', calligraphy: '2 Months' },
    { feature: 'Total Classes', drawing: '24 Classes', painting: '24 Classes', calligraphy: '16 Classes' },
    { feature: 'Session Length', drawing: '45 min', painting: '45 min', calligraphy: '40 min' },
    { feature: 'Age Group', drawing: '5–14 yrs', painting: '5–14 yrs', calligraphy: '7–14 yrs' },
    { feature: 'Class Size', drawing: 'Max 6', painting: 'Max 6', calligraphy: 'Max 6' },
    { feature: 'Certificate', drawing: '✓', painting: '✓', calligraphy: '✓' },
    { feature: 'Beginner Friendly', drawing: '✓', painting: '✓', calligraphy: '✓' },
    { feature: 'Materials Cost', drawing: 'Very Low', painting: 'Low–Medium', calligraphy: 'Low' },
    { feature: 'Free Demo Available', drawing: '✓', painting: '✓', calligraphy: '✓' },
];

const AGE_GUIDE = [
    {
        emoji: '👶',
        range: '5–7 Years',
        group: 'Little Explorers',
        courses: ['Drawing (Foundations)', 'Painting (Watercolour)'],
        focus: 'Fine motor development, colour recognition, free expression with minimal structure. Playfulness is the priority.',
    },
    {
        emoji: '🧒',
        range: '8–11 Years',
        group: 'Young Artists',
        courses: ['Drawing (Intermediate)', 'Painting (Mixed Media)', 'Calligraphy (Beginner)'],
        focus: 'Structured learning of technique alongside imaginative projects. Building a real skill set with growing independence.',
    },
    {
        emoji: '👦',
        range: '12–14 Years',
        group: 'Creative Thinkers',
        courses: ['Drawing (Advanced)', 'Painting (Advanced)', 'Calligraphy (Intermediate)'],
        focus: 'Portfolio-quality work, self-directed projects, and critical thinking about art. Preparation for advanced studies.',
    },
];

const FAQS = [
    { q: 'Can my child join with zero art experience?', a: 'Absolutely. All our courses start from the very beginning. Our teachers are trained to meet every child exactly where they are, regardless of prior experience.' },
    { q: 'Can my child take more than one course?', a: 'Yes! Many students enroll in multiple courses either simultaneously or sequentially. Our team can advise on the best combination based on your child\'s age and interests.' },
    { q: 'How do I know which course is right for my child?', a: 'That\'s exactly what the free demo class is for. Our teacher assesses your child\'s interests and abilities during the session and recommends the most suitable course.' },
    { q: 'What if my child doesn\'t enjoy it?', a: 'We offer a satisfaction guarantee. If your child isn\'t happy after the first two paid classes, we\'ll refund your enrollment — no questions asked.' },
];

const FaqItem = ({ faq }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-item">
            <div className="faq-question" onClick={() => setOpen(o => !o)} role="button" tabIndex={0} onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}>
                <span className="faq-question-text">{faq.q}</span>
                <span className={`faq-arrow${open ? ' open' : ''}`}>▾</span>
            </div>
            <div className={`faq-answer${open ? ' open' : ''}`}>
                <p>{faq.a}</p>
            </div>
        </div>
    );
};

const Courses = () => (
    <main>

        {/* ── Page Hero ── */}
        <section className="page-hero">
            <div className="page-hero-bg-pattern" />
            <div className="container">
                <div className="page-hero-content animate-fadeInUp">
                    <nav className="page-hero-breadcrumb">
                        <Link to="/">Home</Link><span className="sep">›</span>
                        <span className="current">Courses</span>
                    </nav>
                    <div className="page-hero-eyebrow">🎨 Our Courses</div>
                    <h1 className="page-hero-title">
                        Three Courses.<br /><span>Infinite Creative Possibilities.</span>
                    </h1>
                    <p className="page-hero-desc">
                        Every course is crafted by expert artists and child educators to develop real skill,
                        deep confidence, and a lifelong love of making things.
                    </p>
                </div>
            </div>
        </section>

        {/* ── Course Cards Grid ── */}
        <section style={{ padding: '7rem 0', background: 'var(--cream)' }}>
            <div className="container">
                <div className="text-center animate-fadeInUp">
                    <span className="section-label">📚 All Courses</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                        Choose Your Child's <span style={{ color: 'var(--maroon)' }}>Creative Path</span>
                    </h2>
                    <p className="section-sub" style={{ margin: '0 auto' }}>
                        Not sure which one? Book a free demo — our teachers will guide you.
                    </p>
                </div>
                <div className="courses-page-grid">
                    {ALL_COURSES.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="text-center mt-lg">
                    <Button variant="gold" to="/contact" arrow size="lg">Book Free Demo for Any Course</Button>
                </div>
            </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="compare-section">
            <div className="container">
                <div className="text-center animate-fadeInUp">
                    <span className="section-label">📊 Compare</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                        Course <span style={{ color: 'var(--maroon)' }}>Comparison</span>
                    </h2>
                    <p className="section-sub" style={{ margin: '0 auto' }}>
                        A side-by-side look to help you choose
                    </p>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table className="compare-table">
                        <thead>
                            <tr>
                                <th style={{ minWidth: 180 }}>Feature</th>
                                <th>✏️ Drawing</th>
                                <th>🎨 Painting</th>
                                <th>🖋️ Calligraphy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARE_ROWS.map((row, i) => (
                                <tr key={i}>
                                    <td className="feature-name">{row.feature}</td>
                                    <td>
                                        {row.drawing === '✓'
                                            ? <span className="compare-check">✓</span>
                                            : row.drawing === '✗'
                                                ? <span className="compare-cross">✗</span>
                                                : row.drawing}
                                    </td>
                                    <td>
                                        {row.painting === '✓'
                                            ? <span className="compare-check">✓</span>
                                            : row.painting === '✗'
                                                ? <span className="compare-cross">✗</span>
                                                : row.painting}
                                    </td>
                                    <td>
                                        {row.calligraphy === '✓'
                                            ? <span className="compare-check">✓</span>
                                            : row.calligraphy === '✗'
                                                ? <span className="compare-cross">✗</span>
                                                : row.calligraphy}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        {/* ── Age Guide ── */}
        <section className="age-guide-section">
            <div className="container">
                <div className="text-center animate-fadeInUp">
                    <span className="section-label">👶 Age Guide</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                        The Right Course for <span style={{ color: 'var(--maroon)' }}>Every Age</span>
                    </h2>
                    <p className="section-sub" style={{ margin: '0 auto' }}>
                        Every curriculum is designed and adapted for the developmental stage of your child
                    </p>
                </div>
                <div className="age-guide-grid">
                    {AGE_GUIDE.map((group, i) => (
                        <div key={i} className={`age-guide-card animate-fadeInUp delay-${i * 100 + 100}`}>
                            <div className="age-guide-card-header">
                                <span className="age-guide-emoji">{group.emoji}</span>
                                <span className="age-guide-range">{group.range}</span>
                                <span className="age-guide-group">{group.group}</span>
                            </div>
                            <div className="age-guide-card-body">
                                <div className="age-guide-courses">
                                    {group.courses.map((c, j) => (
                                        <div key={j} className="age-guide-course">
                                            <div className="age-guide-course-dot" />
                                            {c}
                                        </div>
                                    ))}
                                </div>
                                <p className="age-guide-focus">{group.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ padding: '7rem 0', background: 'transparent' }}>
            <div className="container">
                <div className="text-center animate-fadeInUp">
                    <span className="section-label">❓ Quick Answers</span>
                    <h2 className="section-title" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                        Course <span style={{ color: 'var(--maroon)' }}>FAQs</span>
                    </h2>
                </div>
                <div className="faq-grid" style={{ marginTop: '3.5rem' }}>
                    {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
                </div>
            </div>
        </section>

        {/* ── Final CTA ── */}
        <section style={{ padding: '6rem 0', background: 'var(--grad-maroon)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div className="creative-blob" style={{ width: 350, height: 350, background: 'rgba(255,200,87,0.07)', top: -80, right: -80 }} />
            <div className="creative-blob" style={{ width: 200, height: 200, background: 'rgba(255,182,193,0.06)', bottom: -60, left: -40, animationDelay: '8s' }} />
            <div className="container animate-fadeInUp">
                <span className="section-label" style={{ background: 'rgba(255,200,87,0.12)', borderColor: 'rgba(255,200,87,0.3)', color: 'var(--gold)' }}>
                    🎁 No Commitment
                </span>
                <h2 className="section-title on-dark" style={{ fontSize: '3rem', margin: '1rem 0 0.75rem' }}>
                    Still Deciding? <span style={{ color: 'var(--gold)' }}>Try It Free First.</span>
                </h2>
                <p className="section-sub on-dark" style={{ margin: '0 auto 2.5rem' }}>
                    Book a free 1-on-1 demo class — our teacher will match your child to the perfect course live.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button variant="gold" to="/contact" arrow size="lg">Book Free Demo</Button>
                    <Button variant="outline-gold" to="/contact" size="lg">Ask a Question</Button>
                </div>
            </div>
        </section>

    </main>
);

export default Courses;