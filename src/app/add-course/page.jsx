'use client';
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const page = () => {
    const { data: session } = useSession();
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const image = e.target.posterUrl.value;
        const ratingStr = e.target.rating.value;
        const ratings = Number(ratingStr)
        const instructor = e.target.genre.value;
        const priceStr = e.target.price.value;
        const price = Number(priceStr)
        const students = e.target.Student.value;
        const duration = e.target.duration.value;
        const description = e.target.plotSummary.value;
        const addedBy = session?.user.email
        const created_at = new Date()
        const newCourse = { title, image, ratings, instructor, duration, description, addedBy, created_at, price, students }

        fetch('https://cyber-it-park-api-server.vercel.app/course', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then((data) => {
                e.target.reset()
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your course has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="card bg-base-100 w-full max-w-sm md:max-w-md shrink-0 shadow-2xl mx-auto my-5">
            <div className="card-body">
                <form onSubmit={handleSubmit} className="fieldset">
                    <div>
                        <label className="font-medium">Course title</label>
                        <input name='title' type="text" className="input w-full" placeholder="Enter course title" required />
                    </div>
                    <div>
                        <label className="font-medium">Poster URL</label>
                        <input name='posterUrl' type="text" className="input w-full" placeholder="Poster URL" required />
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex-1'>
                            <label className="font-medium">Rating</label>
                            <input name='rating' type="number" step="0.1" min="0" max="5" className="input" placeholder="Rating (0-5)" required />
                        </div>
                        <div className='flex-1'>
                            <label className="font-medium">Instructor</label>
                            <input name='genre' type="text" className="input" placeholder="Md Sojib" required />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex-1'>
                            <label className="font-medium">price</label>
                            <input name='price' type="number" className="input" placeholder="price" required />
                        </div>
                        <div className='flex-1'>
                            <label className="font-medium">Student</label>
                            <input name='Student' type="text" className="input" placeholder="550" required />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex-1'>
                            <label className="font-medium">Duration</label>
                            <input name='duration' type="text" className="input" placeholder="6 Months" required />
                        </div>
                        <div className='flex-1'>
                            <label className="font-medium">Added By</label>
                            <input type="email" className="input w-full" placeholder="Email" value={session?.user.email || ''} readOnly />
                        </div>
                    </div>
                    <label className='font-medium'>Description</label>
                    <textarea className='input h-20 w-full' name="plotSummary" placeholder='Master the complete MERN stack with hands-on projects.'></textarea>
                    <button className="btn btn-primary text-white mt-4">Add Course</button>
                </form>
            </div>
        </div>
    );
};

export default page;