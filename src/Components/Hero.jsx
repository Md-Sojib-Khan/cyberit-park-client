'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed relative"
            style={{ backgroundImage: `url('https://i.gifer.com/J4o.gif')` }}
        >
            {/* হালকা black overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content with white text */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-10">

                {/* Left Side - Text Content */}
                <div className={`flex-1 text-left transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>

                    {/* Badge */}
                    <div className="mb-6">
                        <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                            🚀 Most Popular IT Training
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        <span className="block text-white">Welcome to</span>
                        <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mt-2">
                            CyberIT Park
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg text-white md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                        Transform your career with our industry-focused courses in
                        <span className="text-primary font-semibold"> Web Development</span>,
                        <span className="text-secondary font-semibold"> Programming</span>, and
                        <span className="text-accent font-semibold"> Cutting-edge Technologies</span>.
                        Start your journey today!
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6 mb-8">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">5000+</div>
                            <div className="text-sm text-white">Students Trained</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-secondary">12+</div>
                            <div className="text-sm text-white">Courses</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
                            <div className="text-sm text-white">Success Rate</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={'/course'} className="btn btn-primary btn-lg px-8 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            🎯 Explore Courses
                        </Link>
                        <button className="btn btn-outline text-white btn-lg px-8 text-lg font-semibold border-gray-300 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:text-black">
                            📞 Free Consultation
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 bg-primary rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-secondary rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-accent rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center text-xs text-white">
                                +500
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold">Join 300+</span> students already learning
                        </div>
                    </div>
                </div>

                {/* Right Side - Coding GIF/Animation */}
                <div className={`flex-1 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}>
                    <div className="relative">
                        {/* Main Coding GIF Container */}
                        <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                            {/* Browser-like Window */}
                            <div className="bg-gray-800 rounded-t-xl p-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="text-xs text-gray-400 ml-2">coder.jsx</div>
                            </div>

                            {/* Coding GIF */}
                            <div className="rounded-b-xl overflow-hidden">
                                <Image
                                    width={500}
                                    height={300}
                                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzdqeWpwcmkxMW4wbWl3ZW0zNnU2azdqbXUxdGpmcTFnOHlvZzk2MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif"
                                    alt="Coding Animation"
                                    className="w-full h-auto rounded-b-xl"
                                />
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg animate-bounce">
                            Live Coding
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-secondary text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg animate-pulse">
                            Real Projects
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;