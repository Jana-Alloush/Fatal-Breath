import React from 'react';

const FeaturesTable = () => {
    const features = [
        { feature: 'Real-time CO Monitoring', description: 'Continuous tracking of carbon monoxide levels', benefit: 'Always know your air quality' },
        { feature: 'Instant Alerts', description: 'Immediate notifications when danger is detected', benefit: 'Quick response to emergencies' },
        { feature: 'Emergency Chat', description: 'Built-in communication for emergencies', benefit: 'Coordinate safety measures quickly' },
        { feature: 'Multi-Room Management', description: 'Monitor multiple rooms simultaneously', benefit: 'Whole-home protection' },
        { feature: 'User Management', description: 'Add/remove users with different access levels', benefit: 'Flexible household access' },
        { feature: 'Friendly UI', description: 'Intuitive, easy-to-use interface', benefit: 'Simple for all family members' },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center section-title">Key Features</h2>
                <p className="text-center mb-5">Comprehensive protection against toxic gases</p>

                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-danger">
                            <tr>
                                <th>Feature</th>
                                <th>Description</th>
                                <th>Benefit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map(({ feature, description, benefit }, idx) => (
                                <tr key={idx}>
                                    <td>{feature}</td>
                                    <td>{description}</td>
                                    <td>{benefit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="alert alert-danger mt-4">
                    <p className="mb-0">
                        Carbon monoxide is called the "silent killer" because it's colorless, odorless, and can be deadly before symptoms are noticed.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesTable;
