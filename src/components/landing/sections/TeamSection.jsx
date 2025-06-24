import React from 'react';

const TeamSection = () => {
    const members = [
        {
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Manager',
            role: 'Homeowner/Administrator',
            desc: 'Managers can create houses and rooms within the app, invite others to join, and have full control over all safety settings and notifications.',
            badge: { text: 'Full Access', className: 'danger-badge' },
        },
        {
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Member',
            role: 'Family/Household Member',
            desc: 'Members join houses created by Managers and have access to monitoring features, alerts, and emergency communication tools.',
            badge: { text: 'Monitoring Access', className: 'bg-secondary' },
        },
    ];

    return (
        <section id="team" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center section-title">User Types</h2>
                <p className="text-center mb-5">
                    Fatal Breath offers different access levels for complete household protection
                </p>

                <div className="row">
                    {members.map(({ img, title, role, desc, badge }, idx) => (
                        <div className="col-lg-6 col-md-6 mb-4" key={idx}>
                            <div className="card">
                                <img src={img} className="card-img-top" alt={title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{title}</h5>
                                    <p className="text-muted">{role}</p>
                                    <p className="card-text">{desc}</p>
                                    <span className={`badge ${badge.className}`}>{badge.text}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
