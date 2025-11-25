import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const page = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className="card-title text-2xl font-bold text-gray-800 my-6 border-l-4 border-emerald-500 pl-4">
                Contact Information
            </h2>

            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-start gap-4 p-3 hover:bg-emerald-50 rounded-lg transition-colors">
                    <div className="p-3 bg-emerald-100 rounded-full">
                        <FaMapMarkerAlt className="text-emerald-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Our Address</h3>
                        <p className="text-gray-600">Bhawanoganj Bazar, Bagmara<br />Rajshahi, Bangladesh</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="p-3 bg-blue-100 rounded-full">
                        <FaPhone className="text-blue-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Phone Number</h3>
                        <p className="text-gray-600">+880 1734-470868<br />+880 XXXX-XXXXXX</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="p-3 bg-purple-100 rounded-full">
                        <FaEnvelope className="text-purple-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Email Address</h3>
                        <p className="text-gray-600">info@cyberitpark.com<br />support@cyberitpark.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-3 hover:bg-orange-50 rounded-lg transition-colors">
                    <div className="p-3 bg-orange-100 rounded-full">
                        <FaClock className="text-orange-600 text-xl" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Business Hours</h3>
                        <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM<br />Friday - Saturday: Closed</p>
                    </div>
                </div>
            </div>


            <div className="bg-gray-200 rounded-lg h-96 my-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.76183661656714!2d88.82137029406255!3d24.582659437234213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc750044b64de1%3A0x7130a76947f58884!2sCyber%20IT%20Park!5e0!3m2!1sen!2sbd!4v1764044296530!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default page;