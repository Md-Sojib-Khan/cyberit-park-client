// components/FeaturesSection.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

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

    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    // Card animation
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: {
                type: "spring",
                stiffness: 300
            }
        }
    };

    // Icon animation
    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                delay: 0.5
            }
        },
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="pt-5 pb-20 bg-base-200">
            <div className="container mx-auto px-4">
                {/* Header with animation */}
                <motion.div 
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>CyberIT Park</span>?
                    </h2>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        We provide the perfect environment for your IT career growth
                    </motion.p>
                </motion.div>
                
                {/* Features grid with stagger animation */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover="hover"
                            className="card bg-base-100 shadow-xl cursor-pointer border border-transparent relative overflow-hidden group"
                        >
                            {/* Animated background effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            
                            <div className="card-body text-center items-center relative z-10">
                                {/* Animated icon */}
                                <motion.div 
                                    className="text-4xl mb-4"
                                    variants={iconVariants}
                                    whileHover="hover"
                                >
                                    {feature.icon}
                                </motion.div>
                                
                                {/* Title with animation */}
                                <motion.h3 
                                    className="card-title text-xl mb-2 justify-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    {feature.title}
                                </motion.h3>
                                
                                {/* Description with animation */}
                                <motion.p 
                                    className="text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    {feature.description}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection;