import React, { useState } from 'react';
import Button from '../layout/Button';

const INQUIRY_TYPES = [
    'Book a Free Demo Class',
    'Course Enquiry — Drawing',
    'Course Enquiry — Painting',
    'Course Enquiry — Calligraphy',
    'General Question',
    'Partnership / Collaboration',
    'Career / Teaching',
    'Volunteer with Us',
];

const AGE_OPTIONS = [
    '5 Years', '6 Years', '7 Years', '8 Years', '9 Years',
    '10 Years', '11 Years', '12 Years', '13 Years', '14 Years',
    'Not Applicable',
];

const validate = (fields) => {
    const errors = {};
    if (!fields.parentName.trim()) errors.parentName = 'Please enter your name.';
    if (!fields.email.trim()) errors.email = 'Please enter your email.';
    else if (!/\S+@\S+\.\S+/.test(fields.email)) errors.email = 'Please enter a valid email.';
    if (!fields.phone.trim()) errors.phone = 'Please enter your phone number.';
    if (!fields.childAge) errors.childAge = 'Please select an age.';
    if (!fields.inquiryType) errors.inquiryType = 'Please select an inquiry type.';
    if (!fields.message.trim()) errors.message = 'Please write a short message.';
    return errors;
};

const ContactForm = ({ prefillInquiry = '', compact = false }) => {
    const [fields, setFields] = useState({
        parentName: '',
        childName: '',
        email: '',
        phone: '',
        country: '',
        childAge: '',
        inquiryType: prefillInquiry || '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const set = (key) => (e) => {
        setFields(prev => ({ ...prev, [key]: e.target.value }));
        if (errors[key]) setErrors(prev => ({ ...prev, [key]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate(fields);
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setLoading(true);
        // Simulated submission — replace with your API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1400);
    };

    if (submitted) {
        return (
            <div className="form-success animate-scaleIn">
                <div className="form-success-icon">🎉</div>
                <h4>We've received your message!</h4>
                <p>
                    Thank you for reaching out. Our team will contact you within 24 hours to
                    schedule your free demo or answer your questions.
                </p>
                <Button variant="primary" onClick={() => { setSubmitted(false); setFields({ parentName: '', childName: '', email: '', phone: '', country: '', childAge: '', inquiryType: prefillInquiry || '', message: '' }); }}>
                    Send Another Message
                </Button>
            </div>
        );
    }

    const F = ({ name, label, required, children }) => (
        <div className="form-field">
            <label className="form-label">{label}{required && <span>*</span>}</label>
            {children}
            {errors[name] && <span className="form-error-msg">{errors[name]}</span>}
        </div>
    );

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form-body">

                <div className="form-row">
                    <F name="parentName" label="Parent / Guardian Name" required>
                        <input
                            className={`form-input${errors.parentName ? ' error' : ''}`}
                            type="text"
                            placeholder="e.g. Priya Sharma"
                            value={fields.parentName}
                            onChange={set('parentName')}
                            autoComplete="name"
                        />
                    </F>
                    <F name="childName" label="Child's Name">
                        <input
                            className="form-input"
                            type="text"
                            placeholder="e.g. Aanya"
                            value={fields.childName}
                            onChange={set('childName')}
                        />
                    </F>
                </div>

                <div className="form-row">
                    <F name="email" label="Email Address" required>
                        <input
                            className={`form-input${errors.email ? ' error' : ''}`}
                            type="email"
                            placeholder="you@example.com"
                            value={fields.email}
                            onChange={set('email')}
                            autoComplete="email"
                        />
                    </F>
                    <F name="phone" label="Phone / WhatsApp" required>
                        <input
                            className={`form-input${errors.phone ? ' error' : ''}`}
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={fields.phone}
                            onChange={set('phone')}
                            autoComplete="tel"
                        />
                    </F>
                </div>

                <div className="form-row">
                    <F name="childAge" label="Child's Age" required>
                        <div className="form-select-wrap">
                            <select
                                className={`form-select${errors.childAge ? ' error' : ''}`}
                                value={fields.childAge}
                                onChange={set('childAge')}
                            >
                                <option value="">Select age…</option>
                                {AGE_OPTIONS.map(a => <option key={a} value={a}>{a}</option>)}
                            </select>
                        </div>
                    </F>
                    <F name="country" label="Country">
                        <input
                            className="form-input"
                            type="text"
                            placeholder="e.g. India, USA, UK…"
                            value={fields.country}
                            onChange={set('country')}
                        />
                    </F>
                </div>

                <F name="inquiryType" label="What are you looking for?" required>
                    <div className="form-select-wrap">
                        <select
                            className={`form-select${errors.inquiryType ? ' error' : ''}`}
                            value={fields.inquiryType}
                            onChange={set('inquiryType')}
                        >
                            <option value="">Select inquiry type…</option>
                            {INQUIRY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>
                </F>

                <F name="message" label="Your Message" required>
                    <textarea
                        className={`form-textarea${errors.message ? ' error' : ''}`}
                        placeholder="Tell us a bit about your child and what you're hoping to achieve through art…"
                        value={fields.message}
                        onChange={set('message')}
                        rows={compact ? 4 : 5}
                    />
                </F>

                <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    arrow
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={loading}
                >
                    {loading ? '✦ Sending…' : 'Send Message'}
                </Button>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '-0.5rem' }}>
                    🔒 Your information is safe with us. We never share your data.
                </p>
            </div>
        </form>
    );
};

export default ContactForm;