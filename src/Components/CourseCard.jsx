// components/CourseCard.jsx
'use client';
import Link from 'next/link';
import React from 'react';

const CourseCard = ({ course }) => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="flex items-center gap-1">
                {"⭐".repeat(fullStars)}
                {hasHalfStar && "⭐"}
                <span className="text-sm text-gray-600 ml-1">({rating})</span>
            </div>
        );
    };

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl group cursor-pointer transform transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-primary/20">
            {/* Image with overlay */}
            <figure className="overflow-hidden relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Featured Badge */}
                {course.featured && (
                    <div className="absolute top-3 left-3">
                        <span className="badge badge-primary badge-sm text-white font-bold">
                            Featured
                        </span>
                    </div>
                )}
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                    <span className="badge badge-secondary badge-sm text-white">
                        {course.category}
                    </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </figure>

            <div className="card-body p-5">
                {/* Title */}
                <h3 className="card-title text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    By {course.instructor}
                </p>

                {/* Description */}
                <p className="text-gray-700 text-sm">
                    {course.description.split(' ').slice(0, 10).join(' ')}...
                </p>

                {/* Course Details */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                        <span>📅</span>
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>👥</span>
                        <span>{course.students}+</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>🎯</span>
                        <span>{course.projects} Projects</span>
                    </div>
                </div>

                {/* Ratings */}
                <div className="mt-3">
                    {renderStars(course.ratings)}
                </div>

                {/* Price & Button */}
                <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-gray-200">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-primary">{course.price}</span>
                        <span className="text-xs text-gray-500 line-through opacity-0 group-hover:opacity-100 transition-opacity">
                            ৳{parseInt(course.price.replace('৳', '').replace(',', '')) + 2000}
                        </span>
                    </div>

                    <Link
                        href={`/course/${course.id}`}
                        className="btn btn-primary btn-sm hover:scale-105 transition-transform group/btn"
                    >
                        <span className="group-hover/btn:scale-110 transition-transform">
                            View Details
                        </span>
                    </Link>
                </div>
            </div>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
        </div>
    );
};

export default CourseCard;