import React from 'react';

const ScreensSection = () => {
    const screens = [
        {
            id: 'screenModal1',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Dashboard Overview',
        },
        {
            id: 'screenModal2',
            img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Alert Notification',
        },
        {
            id: 'screenModal3',
            img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
            title: 'Room Management',
        },
    ];

    return (
        <section id="screens" className="py-5">
            <div className="container">
                <h2 className="text-center section-title">App Screens</h2>
                <p className="text-center mb-5">Explore Fatal Breath's intuitive interface</p>

                <div className="row">
                    {screens.map(({ id, img, title }) => (
                        <div
                            className="col-md-4 col-sm-6 grid-item"
                            key={id}
                            data-bs-toggle="modal"
                            data-bs-target={`#${id}`}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={img} alt={title} className="img-fluid" />
                            <h5 className="mt-2">{title}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScreensSection;
