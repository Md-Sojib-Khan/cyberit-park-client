// components/LearningMethodology.jsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const LearningMethodology = () => {
    const methods = [
        {
            step: "01",
            icon: "📚",
            title: "Learn Concepts",
            description: "Master fundamental concepts through interactive lessons and video tutorials"
        },
        {
            step: "02", 
            icon: "🛠️",
            title: "Practice Exercises",
            description: "Reinforce learning with hands-on coding exercises and challenges"
        },
        {
            step: "03",
            icon: "💻", 
            title: "Build Projects",
            description: "Apply knowledge by building real-world projects for your portfolio"
        },
        {
            step: "04",
            icon: "👨‍🏫",
            title: "Get Mentorship", 
            description: "Receive personalized guidance and code reviews from industry experts"
        },
        {
            step: "05",
            icon: "🎯",
            title: "Career Preparation",
            description: "Prepare for interviews with mock tests and resume building sessions"
        },
        {
            step: "06",
            icon: "🚀",
            title: "Get Hired",
            description: "Land your dream job with our placement assistance program"
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

    // Item animation
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section className="pb-10 bg-base-200">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div 
                    className="text-center mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Learning Path</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Step-by-step journey from beginner to job-ready professional
                    </p>
                </motion.div>

                {/* Methodology Steps */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {methods.map((method, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -8,
                                scale: 1.02
                            }}
                            className="card bg-base-200 shadow-xl hover:shadow-2xl cursor-pointer group relative overflow-hidden"
                        >
                            {/* Background Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="card-body p-6 relative z-10">
                                {/* Step Number */}
                                <motion.div 
                                    className="text-4xl font-bold text-primary/20 absolute top-4 right-4"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {method.step}
                                </motion.div>
                                
                                {/* Icon */}
                                <motion.div 
                                    className="text-4xl mb-4"
                                    whileHover={{ 
                                        scale: 1,
                                        rotate: 360
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {method.icon}
                                </motion.div>
                                
                                {/* Title */}
                                <motion.h3 
                                    className="card-title text-xl mb-3 group-hover:text-primary transition-colors"
                                    whileHover={{ x: 5 }}
                                >
                                    {method.title}
                                </motion.h3>
                                
                                {/* Description */}
                                <p className="text-gray-600">
                                    {method.description}
                                </p>
                            </div>

                            {/* Hover Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-all duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center mt-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <p className="text-lg text-gray-600 mb-3">
                        Ready to start your learning journey?
                    </p>
                    <motion.button 
                        className="btn btn-primary btn-lg px-8 text-lg font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        🚀 Start Learning Today
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default LearningMethodology;