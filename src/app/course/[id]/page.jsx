import Image from "next/image";
import Link from "next/link";

const page = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/course/${id}`)
    const course = await res.json();

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
        <div className="min-h-screen bg-base-100">
            {/* Header Navigation */}
            <nav className="bg-base-200 py-4">
                <div className="container mx-auto px-4">
                    <Link href="/" className="btn btn-ghost hover:scale-105 transition-transform">
                        ← Back to Courses
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Course Image */}
                    <div className="space-y-6">
                        {/* Main Course Image */}
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={600}
                                height={400}
                                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="stat bg-base-200 rounded-lg text-center">
                                <div className="stat-value text-primary text-2xl">{course.ratings}</div>
                                <div className="stat-desc">Rating</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg text-center">
                                <div className="stat-value text-secondary text-2xl">{course.students}+</div>
                                <div className="stat-desc">Students</div>
                            </div>
                            <div className="stat bg-base-200 rounded-lg text-center">
                                <div className="stat-value text-accent text-2xl">{course.projects}</div>
                                <div className="stat-desc">Projects</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Course Details */}
                    <div className="space-y-6">
                        {/* Course Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                {course.featured && (
                                    <span className="badge badge-primary badge-lg text-white">
                                        Featured
                                    </span>
                                )}
                                <span className="badge badge-secondary badge-lg">
                                    {course.category}
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                {course.title}
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                {course.description}
                            </p>
                        </div>

                        {/* Instructor Info */}
                        <div className="card bg-base-200 shadow-lg">
                            <div className="card-body">
                                <h3 className="card-title text-lg">About Instructor</h3>
                                <div className="flex items-center gap-4 mt-2">
                                    <div className="avatar placeholder">
                                        <div className="bg-primary text-white rounded-full w-12">
                                            <span className="text-lg">
                                                {course.instructor.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold">{course.instructor}</p>
                                        <p className="text-sm text-gray-600">Professional Instructor</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course Details Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                                <div className="text-2xl">📅</div>
                                <div>
                                    <p className="font-semibold">Duration</p>
                                    <p className="text-gray-600">{course.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                                <div className="text-2xl">🎯</div>
                                <div>
                                    <p className="font-semibold">Level</p>
                                    <p className="text-gray-600">{course.level}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                                <div className="text-2xl">🌐</div>
                                <div>
                                    <p className="font-semibold">Language</p>
                                    <p className="text-gray-600">{course.language}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-base-200 rounded-lg">
                                <div className="text-2xl">📜</div>
                                <div>
                                    <p className="font-semibold">Certificate</p>
                                    <p className="text-gray-600">{course.certificate ? 'Yes' : 'No'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="p-4 bg-base-200 rounded-lg">
                            <h3 className="font-semibold mb-2">Course Rating</h3>
                            {renderStars(course.ratings)}
                            <p className="text-sm text-gray-600 mt-2">
                                Rated by {course.students}+ students
                            </p>
                        </div>

                        {/* Price & Enrollment */}
                        <div className="card bg-gradient-to-r from-primary to-secondary shadow-2xl">
                            <div className="card-body text-white">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="card-title text-white">Enroll Now</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-bold">{course.price}</span>
                                            <span className="text-lg line-through opacity-80">
                                                ৳{parseInt(course.price.replace('৳', '').replace(',', '')) + 5000}
                                            </span>
                                        </div>
                                        <p className="text-sm opacity-90">Limited time offer</p>
                                    </div>
                                    <button className="btn btn-accent btn-lg hover:scale-105 transition-transform">
                                        Enroll Now 🚀
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Additional Back Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/"
                        className="btn btn-outline btn-lg px-8 hover:scale-105 transition-transform"
                    >
                        ← Back to All Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default page;