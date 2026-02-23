import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../layout/Button';

/**
 * CourseCard
 *
 * Props:
 *  course = {
 *    id          : string   – slug used for routing, e.g. 'drawing'
 *    name        : string
 *    brief       : string   – 1-2 line description
 *    image       : string   – image path from src/assets/
 *    duration    : string   – e.g. '3 Months'
 *    totalClasses: number
 *    category    : string   – e.g. 'Beginner Friendly'
 *    categoryColor: string  – hex accent for the category pill
 *    icon        : string   – emoji
 *  }
 */
const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    const {
        id,
        name,
        brief,
        image,
        duration,
        totalClasses,
        category,
        categoryColor = '#7a004b',
        icon = '🎨',
    } = course;

    const toDetails = () => navigate(`/courses/${id}`);
    const toContact = () => navigate('/contact');

    return (
        <div className="course-card">

            {/* ── Image area ── */}
            <div className="course-card-image-wrap">

                {/* Know More – top-left */}
                <button
                    className="course-card-know-more"
                    onClick={toDetails}
                    aria-label={`Know more about ${name}`}
                >
                    Know More ›
                </button>

                {/* Category pill – top-right */}
                <span
                    className="course-card-category"
                    style={{
                        background: categoryColor,
                        color: '#fff',
                    }}
                >
                    {category}
                </span>

                {/* Course image */}
                {image ? (
                    <img
                        src={image}
                        alt={`${name} course`}
                        className="course-card-image"
                    />
                ) : (
                    /* Fallback gradient when no image supplied */
                    <div
                        className="course-card-image"
                        style={{
                            background: 'linear-gradient(135deg, #7a004b 0%, #4a0028 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '5.5rem',
                        }}
                    >
                        {icon}
                    </div>
                )}
            </div>

            {/* ── Body ── */}
            <div className="course-card-body">

                {/* Name */}
                <h3 className="course-card-name">{name}</h3>

                {/* Brief */}
                <p className="course-card-brief">{brief}</p>

                {/* Duration / Classes meta row */}
                <div className="course-card-meta">
                    <div className="course-card-meta-item">
                        <span className="course-card-meta-value">⏱ {duration}</span>
                        <span className="course-card-meta-label">Duration</span>
                    </div>
                    <div className="course-card-meta-item">
                        <span className="course-card-meta-value">📚 {totalClasses}</span>
                        <span className="course-card-meta-label">Total Classes</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="course-card-actions">
                    <Button
                        variant="outline"
                        onClick={toDetails}
                        aria-label={`View details for ${name}`}
                    >
                        Course Details
                    </Button>
                    <Button
                        variant="gold"
                        onClick={toContact}
                        arrow
                        aria-label={`Book demo for ${name}`}
                    >
                        Book Demo
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;