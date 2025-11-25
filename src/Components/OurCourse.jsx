// components/OurCourse.jsx
import React from 'react';
import Link from 'next/link';
import CourseCard from './CourseCard';

const OurCourse = async () => {
    const res = await fetch('https://cyber-it-park-api-server.vercel.app/course')
    const data = await res.json();
    const courses = data.slice(0, 6);
    
    return (
        <div className='bg-base-200 py-10'>
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>
                        Our <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Courses</span>
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our industry-leading courses designed to transform your career with hands-on projects and expert guidance
                    </p>
                </div>
                
                {/* Courses Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                    {courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* View All Courses Button */}
                <div className="text-center">
                    <Link 
                        href="/course" 
                        className="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-300"
                    >
                        View All Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurCourse;