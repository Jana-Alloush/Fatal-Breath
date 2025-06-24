import React from 'react';

const HeroSection = ({ onGetStarted }) => {
    return (
        <section id="home" className="hero-section bg-primary text-white py-5">
            <div className="container text-center">
                <h1 className="display-3 fw-bold mb-4">Your Guardian Angel Against Toxic Gases</h1>
                <p className="lead mb-5">
                    Protecting your family from the silent threat of carbon monoxide and other dangerous gases
                </p>
                <button onClick={onGetStarted} className="btn btn-danger btn-lg me-2">
                    Get Started
                </button>
                <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
        </section>
    );
};

export default HeroSection;
