// components/FeaturesSection.jsx
import React from 'react';

const FeaturesSection = () => {
    const features = [
        {
            icon: "⚡",
            title: "Fast Learning",
            description: "Accelerated courses designed to get you job-ready in months, not years."
        },
        {
            icon: "👨‍💻",
            title: "Expert Mentors",
            description: "Learn from industry professionals with real-world experience."
        },
        {
            icon: "🎯",
            title: "Project Based",
            description: "Build portfolio-worthy projects that impress employers."
        },
        {
            icon: "🤝",
            title: "Career Support",
            description: "Get job placement assistance and career guidance."
        }
    ];

    return (
        <section className="py-20 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Why Choose <span className=' bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>CyberIT Park</span>?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We provide the perfect environment for your IT career growth
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer border border-transparent hover:border-primary/20"
                        >
                            <div className="card-body text-center items-center">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="card-title text-xl mb-2 justify-center">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;