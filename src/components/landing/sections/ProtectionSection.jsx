import React from 'react';

const ProtectionSection = () => {
    const cards = [
        {
            img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Real-time CO Monitoring',
            iconClass: 'bi bi-graph-up',
            text: 'Continuous tracking of carbon monoxide levels in every room of your home with precision sensors.',
        },
        {
            img: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Instant Alerts',
            iconClass: 'bi bi-bell-fill',
            text: 'Immediate notifications sent to all household members when dangerous levels are detected.',
        },
        {
            img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Emergency Chat',
            iconClass: 'bi bi-chat-dots-fill',
            text: 'Built-in communication system for quick coordination during gas emergencies.',
        },
    ];

    return (
        <section id="protection" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center section-title">How It Protects You</h2>
                <p className="text-center mb-5">Comprehensive safety features for complete peace of mind</p>

                <div className="row g-4">
                    {cards.map(({ img, title, iconClass, text }, idx) => (
                        <div className="col-md-4" key={idx}>
                            <div className="card h-100">
                                <img src={img} className="card-img-top" alt={title} />
                                <div className="card-body">
                                    <div className="feature-icon">
                                        <i className={iconClass}></i>
                                    </div>
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{text}</p>
                                    <a href="#" className="btn btn-danger">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProtectionSection;
