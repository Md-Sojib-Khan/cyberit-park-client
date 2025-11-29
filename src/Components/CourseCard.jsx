'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CourseCard = ({ course, index }) => {
    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);
    const cardRef = useRef(null);

    // Visible Animation Trigger
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setShow(true),
            { threshold: 0.1 }
        );
        if (cardRef.current) obs.observe(cardRef.current);
        return () => cardRef.current && obs.unobserve(cardRef.current);
    }, []);

    // Star Renderer
    const renderStars = (rating) => {
        const full = Math.floor(rating);
        return (
            <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                    <motion.span
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: i < full ? 1 : 0.6, rotate: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className={`text-yellow-400 ${i < full ? 'opacity-100' : 'opacity-30'}`}
                    >
                        ⭐
                    </motion.span>
                ))}
                <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
        );
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={show ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 120, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -8 }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            className="card bg-base-100 shadow-xl relative overflow-hidden cursor-pointer"
        >

            {/* Hover Gradient */}
            <motion.div
                className="absolute inset-0 bg-base-100"
                animate={{ opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            />

            {/* IMAGE SECTION */}
            <motion.figure className="overflow-hidden relative">
                <motion.img
                    src={course?.image}
                    alt={course?.title}
                    className="w-full h-56 object-cover"
                    animate={{ scale: hover ? 1.1 : 1 }}
                    transition={{ duration: 0.4 }}
                />

                {/* Featured Badge */}
                {course?.featured && (
                    <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="badge badge-primary badge-sm absolute top-3 left-3 text-white"
                    >
                        Featured
                    </motion.span>
                )}

                <motion.span
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="badge badge-secondary badge-sm absolute top-3 right-3 text-white"
                >
                    {course?.category}
                </motion.span>
            </motion.figure>

            {/* CONTENT */}
            <div className="card-body p-5 relative z-10">

                <motion.h3
                    className="text-lg font-bold line-clamp-2 hover:text-primary transition"
                    animate={{}}
                >
                    {course?.title}
                </motion.h3>

                {/* Instructor */}
                <motion.p className="text-sm text-gray-600 flex items-center gap-2">
                    <motion.span
                        className="w-2 h-2 bg-primary rounded-full"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    By {course?.instructor}
                </motion.p>

                {/* Description */}
                <p className="text-gray-700 text-sm">
                    {course?.description.split(" ").slice(0, 12).join(" ")}...
                </p>

                {/* Details (Icons Animated) */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-600 mt-2">
                    <div className="flex items-center gap-1">
                        <motion.span
                            animate={{ rotate: hover ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            📅
                        </motion.span>
                        {course?.duration}
                    </div>

                    <div className="flex items-center gap-1">
                        <motion.span
                            animate={{ y: hover ? [-2, 2, -2] : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            👥
                        </motion.span>
                        {course?.students}+
                    </div>

                    <div className="flex items-center gap-1">
                        <motion.span
                            animate={{ scale: hover ? [1, 1.2, 1] : 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            🎯
                        </motion.span>
                        {course?.projects} Projects
                    </div>
                </div>

                {/* Ratings */}
                <div className="mt-3">{renderStars(course?.ratings)}</div>

                {/* Price + Button */}
                <div className="mt-4 flex justify-between items-center pt-4 border-t">
                    <div>
                        <motion.span
                            animate={{ scale: hover ? 1.1 : 1 }}
                            className="text-2xl font-bold text-primary"
                        >
                            {course?.price}
                        </motion.span>
                        <span
                            className={`text-xs text-gray-500 line-through transition ${
                                hover ? "opacity-100" : "opacity-0"
                            }`}
                        >
                            ৳{(parseInt(String(course?.price).replace(/৳|,/g, '')) || 0) + 2000}
                        </span>
                    </div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href={`/course/${course?._id}`}
                            className="btn btn-primary btn-sm relative overflow-hidden"
                        >
                            <span className="relative z-10">View Details</span>

                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                animate={{ x: hover ? ["-100%", "200%"] : "-100%" }}
                                transition={{ duration: 0.8 }}
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Hover Border */}
            <motion.div className="absolute inset-0 border-2 border-primary/0 rounded-xl" animate={{ borderColor: hover ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0)' }} transition={{ duration: 0.3 }} />
        </motion.div>
    );
};

export default CourseCard;
