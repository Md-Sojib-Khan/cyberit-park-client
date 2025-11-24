"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
    const router = useRouter();
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
                image: e.target.photoURL.value
            }),
        });

        if (res.status === 201) router.push("/login");
    };

    useEffect(() => {
        if (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error}`,
                footer: '<a href="#">Why do I have this issue?</a>'
            }).then(() => {
                setError(""); // ✅ Error clear after alert
            });
        }
    }, [error]);
    return (
        <div className="hero bg-base-200 md:min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
                <h1 className="text-2xl font-semibold text-blue-600 tracking-tight relative flex items-center pl-10">
                    <span className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full"></span>
                    <span className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full animate-ping"></span>
                    Register Now!
                </h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="font-medium">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        <label className="font-medium">PhotoURL</label>
                        <input type="text" name='photoURL' className="input" placeholder="PhotoURL" />
                        <label className="font-medium">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        <label className="font-medium">Password</label>
                        <div className='relative'>
                            <input type='password' name='password' className="input" placeholder="Password" required />
                            {/* <button onClick={handleShowPassword} type='button' className='cursor-pointer absolute top-3.5 right-8 z-10'>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button> */}
                        </div>
                        <button className="btn btn-neutral mt-4 hover:bg-white hover:text-black border-black">SignUp</button>
                        <div className='mt-3'><div className="font-medium">Already Have An Account ? <Link href={'/login'} className='link link-hover text-red-500'>Login</Link></div></div>
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signIn("google", { callbackUrl: "/" })} className="btn bg-white text-black border-[#e5e5e5] hover:bg-black hover:text-white">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;