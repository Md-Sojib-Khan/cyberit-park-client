'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar, FaUsers, FaClock, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCoursesPage = () => {
    const { data: session } = useSession();
    const [myCourse, setMyCourse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (session?.user?.email) {
            fetch(`https://cyber-it-park-api-server.vercel.app/course?email=${session.user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyCourse(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching courses:', error);
                    setLoading(false);
                });
        }
    }, [session]);

    const handleDelete = async (courseId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        });

        if (result.isConfirmed) {
            fetch(`https://cyber-it-park-api-server.vercel.app/course/${courseId}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        setMyCourse(prev => prev.filter(course => course._id !== courseId));

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your course has been deleted.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false
                        });
                    }
                })
                .catch(error => {
                    console.error('Error deleting course:', error);
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete course",
                        icon: "error"
                    });
                });
        }
    };
    // Course Card Component
    const CourseCard = ({ course }) => {
        return (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 ease-in-out">
                {/* Course Image */}
                <div className="relative h-48 w-full">
                    <Image width={250} height={250}
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Ratings Badge */}
                    <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-md">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span className="text-sm font-semibold">{course.ratings}</span>
                    </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                    {/* Title and Instructor */}
                    <div className="mb-3">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">
                            {course.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            By <span className="font-semibold">{course.instructor}</span>
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <FaClock className="text-blue-500" />
                                <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaUsers className="text-green-500" />
                                <span>{course.students} students</span>
                            </div>
                        </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                        <div className="text-left">
                            <p className="text-2xl font-bold text-blue-600">
                                ৳{course.price?.toLocaleString()}
                            </p>
                            <p className="text-xs text-gray-500">Total course fee</p>
                        </div>

                        {/* Delete Button */}
                        <button
                            onClick={() => handleDelete(course._id)}
                            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            <FaTrash className="text-sm" />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading your courses...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">My Courses</h1>
                    <p className="text-gray-600">
                        Welcome back, {session?.user?.name || session?.user?.email}!
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Total {myCourse.length} course{myCourse.length !== 1 ? 's' : ''} found
                    </p>
                </div>

                {/* Courses Grid */}
                {myCourse.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {myCourse.map(course => (
                            <CourseCard
                                key={course._id}
                                course={course}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 max-w-md mx-auto">
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                No Courses Found
                            </h3>
                            <p className="text-gray-500 mb-4">
                                You haven't created any courses yet.
                            </p>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Create Your First Course
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyCoursesPage;