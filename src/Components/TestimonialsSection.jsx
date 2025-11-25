// components/TestimonialsSection.jsx
'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState([]);

    // Fetch data from public JSON file
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/data/testimonials.json');
                const data = await response.json();
                setTestimonials(data.testimonials);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    const renderStars = (rating) => {
        return "⭐".repeat(rating);
    };
    return (
        <section className="pb-10 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Hear from our students who transformed their careers
                    </p>
                </div>

                {/* Swiper Container */}
                <div className="px-4">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        spaceBetween={30}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // Tablet: 640px - 768px  
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            // Desktop: 768px - 1024px
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            // Large Desktop: 1024px+
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            }
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="card bg-base-100 shadow-xl mx-2 my-8 transform transition-all duration-300 hover:shadow-2xl">
                                    <div className="card-body text-center">
                                        {/* Profile Image */}
                                        <div className="flex justify-center mb-4">
                                            <div className="avatar">
                                                <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                                                    <Image 
                                                        src={testimonial?.image} 
                                                        alt={testimonial.name}
                                                        width={96}  // w-24 = 96px
                                                        height={96} // h-24 = 96px
                                                        className="object-cover rounded-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <h3 className="card-title text-lg justify-center mb-2">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-primary font-semibold mb-1">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-xs text-gray-500 mb-4">
                                            {testimonial.company}
                                        </p>

                                        {/* Rating */}
                                        <div className="flex justify-center mb-4">
                                            <div className="text-yellow-500 text-lg">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="text-gray-700 italic text-sm leading-relaxed">
                                            "{testimonial.text}"
                                        </p>

                                        {/* Quote Icon */}
                                        <div className="text-4xl text-primary opacity-20 mt-4">
                                            ”
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;