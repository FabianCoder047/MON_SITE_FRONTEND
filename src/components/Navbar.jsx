import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Liens directs pour le menu desktop
    const directLinks = [
        { label: 'Services', href: '#' },
        { label: 'Logiciels', href: '#' },
        { label: 'Boites à suggestions', href: '#' }
    ];

    // Sous-liens pour le dropdown Portfolio
    const portfolioLinks = [
        { label: 'A propos', href: '#' },
        { label: 'Projets', href: '#' },
        { label: 'Contact', href: '#' }
    ];

    // Liens pour le menu mobile (tous sauf le dernier)
    const mobileLinks = directLinks.slice(0, -1);

    return (
        <div className="navbar bg-linear-to-r from-orange-100 to-orange-400 px-8 lg:px-20 py-5 sticky top-0 z-50 shadow-lg border-b border-orange-200">
            {/* Logo à gauche */}
            <div className="navbar-start">
                <a href="" className="text-2xl font-bold tracking-tight">
                    <span className="text-orange-700">FabianCoder</span>
                    <p className="text-sm text-gray-700">Everything is digitable !!</p>
                </a>
            </div>

            {/* Menu desktop - centré avec séparateurs */}
            <div className="navbar-center hidden md:flex">
                <div className="flex items-center space-x-10">
                    {/* Menu déroulant PortFolio */}
                    <div className="relative group">
                        <button
                            className="flex items-center font-semibold text-white hover:text-orange-700 focus:outline-none text-lg transition-colors"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            PortFolio
                            <svg
                                className={`ml-2 h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-orange-200 rounded-lg shadow-xl z-10">
                                <div className="py-3">
                                    {portfolioLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className="block px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="h-7 w-px bg-white"></div>

                    {/* Liens directs avec séparateurs */}
                    {directLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <a
                                href={link.href}
                                className="font-semibold text-white hover:text-orange-700 text-lg transition-colors px-3"
                            >
                                {link.label}
                            </a>
                            {index < directLinks.length - 1 && (
                                <div className="h-7 w-px bg-white"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Menu mobile */}
            <div className="navbar-end md:hidden">
                <button
                    className="btn btn-ghost px-3 text-orange-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Menu mobile déroulant */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-orange-50 border-t border-orange-200 shadow-2xl z-20 md:hidden">
                    <div className="px-8 py-6 space-y-4">
                        <div className="pb-3 border-b border-orange-200">
                            <button
                                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 text-lg"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                PortFolio
                                <svg
                                    className={`h-6 w-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="pl-5 pt-3 space-y-3">
                                    {portfolioLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className="block text-gray-700 hover:text-orange-700 py-2 transition-colors pl-2"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        {mobileLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block font-semibold text-gray-900 text-lg border-b border-orange-200 pb-4 hover:text-orange-700 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a href={directLinks[directLinks.length - 1].href} className="block font-semibold text-gray-900 text-lg pb-2 hover:text-orange-700 transition-colors">
                            {directLinks[directLinks.length - 1].label}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;