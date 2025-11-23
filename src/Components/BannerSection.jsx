// components/BannerSection.jsx
import React from 'react';

const BannerSection = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-primary to-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center text-white">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Start Your IT Journey?
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Join thousands of successful students and transform your career today
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <div className="stats shadow-lg bg-white/10 backdrop-blur-sm">
                            <div className="stat">
                                <div className="stat-value text-white">500+</div>
                                <div className="stat-desc text-white/80">Students Trained</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-white">96%</div>
                                <div className="stat-desc text-white/80">Success Rate</div>
                            </div>
                            <div className="stat">
                                <div className="stat-value text-white">50+</div>
                                <div className="stat-desc text-white/80">Courses</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="btn btn-accent btn-lg px-8 text-lg font-semibold hover:scale-105 transition-transform">
                            🎯 Enroll Now
                        </button>
                        <button className="btn btn-outline btn-lg px-8 text-lg font-semibold text-white border-white hover:bg-white hover:text-primary hover:scale-105 transition-transform">
                            📞 Get Free Consultation
                        </button>
                    </div>
                    
                    <p className="mt-6 text-sm opacity-80">
                        Limited seats available. Next batch starts on January 15, 2024
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;