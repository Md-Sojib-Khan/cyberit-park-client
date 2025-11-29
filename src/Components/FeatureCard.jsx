"use client";
import React from "react";
import { motion } from "framer-motion";

// ---- Animation variants ----
const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 15 }
    },
    hover: {
        y: -8,
        scale: 1.03,
        rotate: 1.5, // smooth rotation like your old version
        transition: { type: "spring", stiffness: 300 }
    }
};

const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 200 }
    },
    hover: {
        scale: 1.25,
        rotate: 360,
        transition: { duration: 0.6 }
    }
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card bg-base-100 shadow-xl cursor-pointer border border-transparent relative overflow-hidden group"
        >
            {/* Gradient hover glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />

            <div className="card-body text-center items-center relative z-10">
                
                {/* Icon */}
                <motion.div
                    className="text-4xl mb-4"
                    variants={iconVariants}
                    whileHover="hover"
                >
                    {icon}
                </motion.div>

                {/* Title */}
                <h3 className="card-title text-xl mb-2 justify-center transition-all duration-300 
                    group-hover:text-transparent group-hover:bg-gradient-to-r 
                    group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{description}</p>

            </div>
        </motion.div>
    );
};

export default FeatureCard;
