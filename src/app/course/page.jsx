"use client";

import CourseCard from "@/Components/CourseCard";
import { useState, useEffect } from "react";

const Page = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("all");

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('https://cyber-it-park-api-server.vercel.app/course');
            const data = await res.json();
            setCourses(data);
        };
        fetchCourses();
    }, []);

    const filteredCourses = courses
        .filter(course => 
            course.title.toLowerCase().includes(search.toLowerCase()) ||
            course.instructor.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (sort === "high") return b.ratings - a.ratings;
            if (sort === "low") return a.ratings - b.ratings;
            return 0;
        });

    return (
        <div className="w-11/12 mx-auto py-10">
            <h1 className="text-4xl font-bold text-center mb-3">
                All <span className='bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Course</span>
            </h1>
            <p className="text-center w-5/6 mx-auto font-medium mb-5">We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab facilities where high-end computers with the required configuration are ready to facilitate your learning. After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you confident throughout the learning journey with Cyber IT Park.</p>

            {/* Simple Search & Filter */}
            <div className="flex justify-between gap-4 mb-8 flex-wrap">
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="p-3 border rounded-lg min-w-[200px]"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select 
                    className="p-3 border rounded-lg"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="all">All Ratings</option>
                    <option value="high">High to Low</option>
                    <option value="low">Low to High</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                {filteredCourses.map(course => (
                    <CourseCard key={course._id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Page;