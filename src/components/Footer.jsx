import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Liens rapides
    const quickLinks = [
        { name: 'Accueil', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Formations', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    // Services
    const services = [
        { name: 'Développement Laravel', href: '#' },
        { name: 'Applications React', href: '#' },
        { name: 'Sites E-commerce', href: '#' },
        { name: 'API REST', href: '#' },
        { name: 'Optimisation SEO', href: '#' },
        { name: 'Maintenance', href: '#' }
    ];

    // Technologies
    const technologies = [
        { name: 'Laravel', color: 'text-red-500' },
        { name: 'React JS', color: 'text-blue-500' },
        { name: 'Tailwind CSS', color: 'text-teal-500' },
        { name: 'PHP', color: 'text-purple-500' },
        { name: 'MySQL', color: 'text-orange-500' },
        { name: 'API REST', color: 'text-green-500' }
    ];

    // Réseaux sociaux
    const socialLinks = [
        { icon: <FaGithub />, href: '#', name: 'GitHub', color: 'hover:bg-gray-800' },
        { icon: <FaLinkedin />, href: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
        { icon: <FaTwitter />, href: '#', name: 'Twitter', color: 'hover:bg-blue-400' },
        { icon: <FaFacebook />, href: '#', name: 'Facebook', color: 'hover:bg-blue-600' },
        { icon: <FaInstagram />, href: '#', name: 'Instagram', color: 'hover:bg-pink-600' },
        { icon: <FaYoutube />, href: '#', name: 'YouTube', color: 'hover:bg-red-600' }
    ];

    return (
        <footer className="bg-linear-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
            {/* Wave separator */}
            <div className="absolute top-0 left-0 right-0 overflow-hidden">
                <svg
                    className="relative block w-full h-12"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-orange-500"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Logo and description */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                                <span className="text-white text-2xl font-bold">FC</span>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">FabianCoder</h2>
                                <p className="text-orange-300 text-sm">Everything is digitable !!</p>
                            </div>
                        </div>

                        <p className="text-gray-300">
                            Développeur Full-Stack spécialisé en Laravel & React.
                            Je transforme vos idées en solutions digitales performantes
                            et innovantes.
                        </p>

                        {/* Newsletter */}
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold mb-4">Restez informé</h3>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-linear-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    S'abonner
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-orange-500 inline-block">Liens Rapides</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-orange-400 hover:pl-2 transition-all duration-300 flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-blue-500 inline-block">Services</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-300 hover:text-blue-400 hover:pl-2 transition-all duration-300 flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Technologies */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`px-3 py-1.5 bg-gray-800 rounded-lg text-sm font-medium ${tech.color} border border-gray-700`}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-teal-500 inline-block">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-teal-400 mt-1 mr-3 shrink-0" />
                                <span className="text-gray-300">Ségbé<br />Lomé, Togo</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-teal-400 mr-3 shrink-0" />
                                <a href="tel:+33123456789" className="text-gray-300 hover:text-teal-400 transition-colors">
                                    +228 98 81 34 82
                                </a>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-teal-400 mr-3 shrink-0" />
                                <a href="mailto:contact@fabiancoder.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                                    contact@fabiancoder.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="mt-8">
                            <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.name}
                                        className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        <p>&copy; {currentYear} FabianCoder. Tous droits réservés.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                            Politique de confidentialité
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                            Conditions d'utilisation
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                            Mentions légales
                        </a>
                        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                            Cookies
                        </a>
                    </div>
                </div>

                {/* Back to top button */}
                <div className="text-center mt-8">
                    <a
                        href="#"
                        className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors"
                    >
                        <span>Retour en haut</span>
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute bottom-20 left-10 w-4 h-4 bg-orange-500 rounded-full opacity-30 animate-ping"></div>
            <div className="absolute bottom-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-teal-500 rounded-full opacity-30 animate-ping animation-delay-2000"></div>
        </footer>
    );
};

export default Footer;