import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import Courses from './pages/Courses';
import CourseDetails from './components/courses/CourseDetails';

import './index.css';

/* ── Scroll to top on every route change ── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

/* ── 404 fallback ── */
const NotFound = () => (
  <div style={{
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    textAlign: 'center',
    padding: '4rem 2rem',
    fontFamily: 'var(--font-body)',
  }}>
    <span style={{ fontSize: '6rem' }}>🎨</span>
    <h1 style={{
      fontFamily: 'var(--font-display)',
      fontSize: '3rem',
      color: 'var(--maroon)',
      fontWeight: 800,
    }}>
      Page Not Found
    </h1>
    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 400, lineHeight: 1.7 }}>
      Looks like this canvas is blank. The page you're looking for doesn't exist or has been moved.
    </p>
    <a href="/" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem' }}>
      ← Back to Home
    </a>
  </div>
);

/* ── Root app with layout ── */
const AppLayout = () => (
  <>
    <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseId" element={<CourseDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;