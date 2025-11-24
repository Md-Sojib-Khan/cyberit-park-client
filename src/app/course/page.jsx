import CourseCard from "@/Components/CourseCard";

const page = async () => {
    const res = await fetch('http://localhost:5000/course')
    const data = await res.json();
    return (
        <div className="w-11/12 mx-auto py-10">
            <h1 className="text-4xl font-bold text-center">All Course</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
                {data.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default page;