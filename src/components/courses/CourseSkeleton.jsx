const CourseSkeleton = () => {
    return (
        <div className="course-details" style={{ padding: "4rem 2rem" }}>

            {/* Title */}
            <div className="sk sk-title"></div>

            {/* Description */}
            <div className="sk sk-line"></div>
            <div className="sk sk-line"></div>
            <div className="sk sk-line short"></div>

            {/* Info badges */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <div className="sk sk-badge"></div>
                <div className="sk sk-badge"></div>
                <div className="sk sk-badge"></div>
            </div>

            {/* Section */}
            <div className="sk sk-section"></div>
            <div className="sk sk-line"></div>
            <div className="sk sk-line"></div>

            {/* Curriculum blocks */}
            <div className="sk sk-section"></div>
            <div className="sk sk-card"></div>
            <div className="sk sk-card"></div>
            <div className="sk sk-card"></div>

        </div>
    );
};

export default CourseSkeleton;