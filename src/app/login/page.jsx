"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const page = () => {
    const router = useRouter();
    const [error, setError] = useState("");

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

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: false,
            email: e.target.email.value,
            password: e.target.password.value,
        });

        if (res.ok) router.push("/");
        else setError("Invalid email or password");
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-2xl font-semibold text-blue-600 tracking-tight relative flex items-center pl-10 mt-3">
                    <span className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full"></span>
                    <span className="absolute left-4 w-4 h-4 bg-blue-600 rounded-full animate-ping"></span>
                    Login Now!
                </h1>

                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="font-medium">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="font-medium">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {/* <button className="btn btn-neutral mt-4">Login</button> */}
                        <input className="btn btn-neutral mt-4" type="submit" value="Login" />
                    </form>
                    <div className='mt-3'><div className="font-medium text-xs">Don`t Have An Account ? <Link href={'/register'} className='link link-hover text-red-500'>Register</Link></div></div>
                    <div className="divider">OR</div>
                    {/* Google */}
                    <button onClick={() => signIn("google", { callbackUrl: "/" })} className="btn bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    {/* {error && <p>{error}</p>} */}
                </div>
            </div>
        </div>
    );
};

export default page;