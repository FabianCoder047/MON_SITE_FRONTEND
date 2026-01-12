import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = ['Développeur Full-Stack', 'Expert Laravel & React', 'Créateur d\'Applications Web', 'Freelance Passionné'];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    // Technologies dans les 4 coins
    const cornerTechnologies = [
        {
            name: 'Laravel',
            color: 'red',
            level: 'Expert',
            icon: 'L',
            position: 'top-left',
            bgColor: 'bg-red-500',
            textColor: 'text-white',
            borderColor: 'border-red-600',
            iconColor: 'text-white',
            zIndex: 'z-30'
        },
        {
            name: 'React JS',
            color: 'blue',
            level: 'Expert',
            icon: 'R',
            position: 'top-right',
            bgColor: 'bg-blue-500',
            textColor: 'text-white',
            borderColor: 'border-blue-600',
            iconColor: 'text-white',
            zIndex: 'z-30'
        },
        {
            name: 'Tailwind CSS',
            color: 'teal',
            level: 'Avancé',
            icon: 'T',
            position: 'bottom-left',
            bgColor: 'bg-teal-500',
            textColor: 'text-white',
            borderColor: 'border-teal-600',
            iconColor: 'text-white',
            zIndex: 'z-30'
        },
        {
            name: 'PHP',
            color: 'purple',
            level: 'Expert',
            icon: 'P',
            position: 'bottom-right',
            bgColor: 'bg-purple-500',
            textColor: 'text-white',
            borderColor: 'border-purple-600',
            iconColor: 'text-white',
            zIndex: 'z-30'
        }
    ];

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentIndex];

            if (!isDeleting) {
                // Typing phase
                if (typedText.length < currentRole.length) {
                    setTimeout(() => {
                        setTypedText(currentRole.substring(0, typedText.length + 1));
                    }, typingSpeed);
                } else {
                    // Pause at the end
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting phase
                if (typedText.length > 0) {
                    setTimeout(() => {
                        setTypedText(typedText.substring(0, typedText.length - 1));
                    }, deletingSpeed);
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentIndex]);

    // Fonction pour déterminer la position CSS
    const getPositionClasses = (position) => {
        switch (position) {
            case 'top-left':
                return '-top-4 -left-4';
            case 'top-right':
                return '-top-4 -right-4';
            case 'bottom-left':
                return '-bottom-4 -left-4';
            case 'bottom-right':
                return '-bottom-4 -right-4';
            default:
                return '';
        }
    };

    // Fonction pour les styles d'ombre
    const getShadowStyle = (color) => {
        switch (color) {
            case 'red':
                return 'shadow-lg shadow-red-500/30';
            case 'blue':
                return 'shadow-lg shadow-blue-500/30';
            case 'teal':
                return 'shadow-lg shadow-teal-500/30';
            case 'purple':
                return 'shadow-lg shadow-purple-500/30';
            default:
                return 'shadow-lg';
        }
    };

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-amber-50 py-16 md:py-24">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="text-center lg:text-left">
                        <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-orange-700 font-medium">Disponible pour de nouvelles collaborations</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="block text-gray-900">Bonjour, je suis</span>
                            <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500 mt-2">
                                FabianCoder
                            </span>
                        </h1>

                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                                <span className="text-gray-600">Je suis </span>
                                <span className="text-orange-600 min-h-10 inline-block">
                                    {typedText}
                                    <span className="inline-block w-1 h-8 bg-orange-500 ml-1 animate-pulse"></span>
                                </span>
                            </h2>
                        </div>

                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
                            Spécialiste en développement d'applications modernes sur mesure.
                            Je crée des solutions robustes, performantes et évolutives qui répondent parfaitement
                            à vos besoins métiers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="group relative px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <span className="relative z-10">Démarrer un projet</span>
                                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></div>
                            </a>

                            <a
                                href="#portfolio"
                                className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Voir mes projets
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Card avec badges en avant des coins */}
                    <div className="relative">
                        <div className="relative mx-auto max-w-md lg:max-w-full">
                            {/* Main card avec logo central */}
                            <div className="relative bg-linear-to-br from-orange-100 to-amber-50 rounded-3xl shadow-2xl overflow-hidden border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                                <div className="aspect-square flex items-center justify-center">
                                    <div className="text-center">
                                        {/* Logo central avec les initiales */}
                                        <div className="w-64 h-64 mx-auto mb-6 rounded-full bg-linear-to-r from-orange-400 to-amber-400 flex items-center justify-center shadow-2xl">
                                            <div className="relative">
                                                {/* Cercle intérieur */}
                                                <div className="w-48 h-48 rounded-full bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                                                    <span className="text-white text-6xl font-bold">FC</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Texte descriptif */}
                                        <div className="space-y-3">
                                            <div className="h-3 bg-linear-to-r from-orange-400 to-amber-400 rounded-full w-3/4 mx-auto"></div>
                                            <div className="h-3 bg-linear-to-r from-amber-400 to-orange-400 rounded-full w-1/2 mx-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Technologies badges - placés en avant des coins */}
                            {cornerTechnologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className={`absolute ${getPositionClasses(tech.position)} ${tech.zIndex} ${getShadowStyle(tech.color)} animate-float`}
                                    style={{ animationDelay: `${index * 500}ms` }}
                                >
                                    <div className={`${tech.bgColor} ${tech.borderColor} border-2 p-4 rounded-2xl min-w-35 transform hover:scale-105 transition-transform duration-300`}>
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-xl ${tech.bgColor === 'bg-red-500' ? 'bg-red-600' : tech.bgColor === 'bg-blue-500' ? 'bg-blue-600' : tech.bgColor === 'bg-teal-500' ? 'bg-teal-600' : 'bg-purple-600'} flex items-center justify-center`}>
                                                <span className={`text-xl font-bold ${tech.iconColor}`}>{tech.icon}</span>
                                            </div>
                                            <div>
                                                <div className={`font-bold ${tech.textColor} text-sm`}>{tech.name}</div>
                                                <div className="text-xs text-gray-200 mt-0.5">{tech.level}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Effets de lumière sur les coins */}
                            <div className="absolute -top-2 -left-2 w-24 h-24 bg-red-500/10 rounded-full blur-md z-20 animate-pulse"></div>
                            <div className="absolute -top-2 -right-2 w-24 h-24 bg-blue-500/10 rounded-full blur-md z-20 animate-pulse animation-delay-1000"></div>
                            <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-teal-500/10 rounded-full blur-md z-20 animate-pulse animation-delay-2000"></div>
                            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-purple-500/10 rounded-full blur-md z-20 animate-pulse animation-delay-3000"></div>
                        </div>

                        {/* Badges supplémentaires en bas */}
                        <div className="mt-12 flex justify-center space-x-4">
                            <div className="bg-white px-5 py-3 rounded-full shadow-lg border border-orange-200 transform hover:-translate-y-1 transition-all duration-300">
                                <span className="text-orange-600 font-semibold">Full-Stack Developer</span>
                            </div>
                            <div className="bg-white px-5 py-3 rounded-full shadow-lg border border-blue-200 transform hover:-translate-y-1 transition-all duration-300">
                                <span className="text-blue-600 font-semibold">Modern Architecture</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center animate-bounce">
                        <span className="text-gray-500 mb-2">Découvrir mes projets</span>
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes shine {
                    100% { left: 125%; }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-1000 {
                    animation-delay: 1s;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-3000 {
                    animation-delay: 3s;
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                .animate-shine {
                    animation: shine 1.5s;
                }
            `}</style>
        </section>
    );
};

export default Hero;