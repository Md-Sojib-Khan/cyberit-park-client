import { FaWifi, FaBuilding, FaUsers, FaShieldAlt, FaCoffee, FaChartLine, FaLightbulb, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-base-200">
            {/* Hero Section */}
            <div className="hero min-h-[60vh] bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-3xl">
                <div className="hero-content text-center text-white">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Driving Digital Innovation in Bangladesh
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Creating Bangladesh's Premier IT Ecosystem for Global Tech Excellence
                        </p>
                        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 -mt-12">

                {/* Our Story Section */}
                <div className="card bg-white shadow-2xl mb-8 transform hover:scale-[1.02] transition-all duration-300">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4 mb-6">
                            Our Story
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    Cyber IT Park was established to bridge the infrastructure gap in Bangladesh's
                                    technology sector. We provide world-class facilities that empower IT companies
                                    and startups to compete on a global scale.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FaLightbulb className="text-yellow-500 text-xl" />
                                        <span className="text-gray-700"><strong>Vision:</strong> To be Bangladesh's leading technology innovation hub</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaHandshake className="text-green-500 text-xl" />
                                        <span className="text-gray-700"><strong>Mission:</strong> Empowering digital transformation through superior infrastructure</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✅ Prime Location in Heart of City</li>
                                    <li>✅ State-of-the-Art Infrastructure</li>
                                    <li>✅ Vibrant Tech Community</li>
                                    <li>✅ 24/7 Operational Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Offer */}
                <div className="card bg-white shadow-2xl mb-8">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-gray-800 border-l-4 border-green-500 pl-4 mb-6">
                            What We Offer
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: <FaWifi className="text-3xl" />, text: "High-Speed Internet" },
                                { icon: <FaBuilding className="text-3xl" />, text: "Modern Workspaces" },
                                { icon: <FaShieldAlt className="text-3xl" />, text: "24/7 Security" },
                                { icon: <FaCoffee className="text-3xl" />, text: "Cafeteria" },
                                { icon: <FaUsers className="text-3xl" />, text: "Conference Rooms" },
                                { icon: <FaChartLine className="text-3xl" />, text: "Networking Events" },
                                { icon: <FaLightbulb className="text-3xl" />, text: "Startup Incubation" },
                                { icon: <FaHandshake className="text-3xl" />, text: "Business Support" }
                            ].map((service, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                                    <div className="text-blue-600 mb-2 flex justify-center">
                                        {service.icon}
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">{service.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Numbers & Achievements */}
                <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold border-l-4 border-white pl-4 mb-8">
                            Our Impact
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { number: "50+", label: "Companies Housed" },
                                { number: "2,000+", label: "IT Professionals" },
                                { number: "$10M+", label: "Investments Raised" },
                                { number: "100+", label: "Projects Completed" }
                            ].map((stat, index) => (
                                <div key={index} className="p-4">
                                    <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                                    <div className="text-blue-100 text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;