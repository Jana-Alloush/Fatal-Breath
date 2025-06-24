import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features" className="py-5">
            <div className="container">
                <h2 className="text-center section-title">Features</h2>

                <div className="row">
                    <div className="col-lg-6">
                        <h3>Why Fatal Breath?</h3>
                        <p>
                            Fatal Breath is a powerful application designed to protect your family from the silent threat of toxic gases such as carbon monoxide (CO).
                            With its intuitive features and responsive alerts, Fatal Breath acts as your home's guardian angel, ensuring you are informed and safe at all times.
                        </p>
                        <p>
                            The primary purpose of Fatal Breath is to significantly reduce deaths caused by high concentrations of toxic gases in homes.
                            The app provides real-time monitoring of rooms, instantly alerting users if CO levels rise above safe thresholds.
                        </p>

                        <div className="alert alert-danger mt-4">
                            <h4 className="alert-heading">Did you know?</h4>
                            <p>Carbon monoxide poisoning causes over 400 deaths and 20,000 emergency room visits each year in the US alone.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* Carousel */}
                        <div id="featuresCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#featuresCarousel" data-bs-slide-to="2"></button>
                            </div>
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img src="/assets/images/alert.png" className="d-block w-100" alt="CO Detector" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Real-time Monitoring</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                        className="d-block w-100"
                                        alt="Mobile App"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Instant Alerts</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                        alt="Family Protection"
                                        className="d-block w-100"
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Family Safety</h5>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#featuresCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#featuresCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
