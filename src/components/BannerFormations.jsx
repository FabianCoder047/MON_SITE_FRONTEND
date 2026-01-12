import React, { useState } from 'react';
import { FaGraduationCap, FaCode, FaLaptopCode, FaCommentAlt, FaArrowRight, FaChalkboardTeacher, FaLightbulb } from 'react-icons/fa';

const BannerFormations = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const trainingTopics = [
        {
            icon: <FaCode />,
            title: 'Création de Sites Web',
            topics: ['HTML/CSS/JavaScript', 'WordPress', 'Responsive Design', 'SEO Basics']
        },
        {
            icon: <FaLaptopCode />,
            title: 'Applications Web',
            topics: ['React JS', 'Laravel', 'API REST', 'Base de données']
        },
        {
            icon: <FaChalkboardTeacher />,
            title: 'Développement Full-Stack',
            topics: ['Frontend + Backend', 'Architecture MVC', 'Déploiement', 'Git/GitHub']
        }
    ];

    return (
        <section className="relative py-12 md:py-16 overflow-hidden">
            {/* Background avec dégradé orange */}
            <div className="absolute inset-0 bg-linear-to-r from-orange-50 via-amber-50 to-yellow-50"></div>

            {/* Éléments décoratifs orange */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>

            {/* Points décoratifs orange */}
            <div className="absolute top-10 right-20 w-3 h-3 bg-orange-500 rounded-full animate-ping"></div>
            <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-amber-500 rounded-full animate-pulse"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Colonne gauche - Contenu principal */}
                        <div className="p-8 md:p-12 lg:p-16">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
                                <FaGraduationCap className="text-orange-600 mr-2" />
                                <span className="text-orange-700 font-medium">Formations Professionnelles</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                <span className="block">Apprenez à créer</span>
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                                    vos propres sites web
                                </span>
                            </h2>

                            <p className="text-lg text-gray-600 mb-8">
                                Je vous forme aux technologies modernes pour que vous puissiez créer
                                <span className="font-semibold text-orange-600"> vos sites web et applications</span> en toute autonomie.
                                Formations personnalisées selon votre niveau et vos objectifs.
                            </p>

                            {/* Stats rapides */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-orange-50 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-orange-600">80%</div>
                                    <div className="text-sm text-gray-600">Pratique</div>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-amber-600">Flexible</div>
                                    <div className="text-sm text-gray-600">À votre rythme</div>
                                </div>
                                <div className="bg-yellow-50 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-yellow-600">Sur mesure</div>
                                    <div className="text-sm text-gray-600">Programme adapté</div>
                                </div>
                            </div>

                            {/* Boutons d'action */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contact"
                                    className="group relative px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center"
                                >
                                    <span className="relative z-10 flex items-center">
                                        <FaLightbulb className="mr-3" />
                                        Demander une formation
                                    </span>
                                    <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>

                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                                >
                                    <span className="flex items-center">
                                        {isExpanded ? 'Voir moins' : 'Voir les sujets'}
                                        <FaArrowRight className={`ml-2 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Colonne droite - Illustration/Info */}
                        <div className="bg-linear-to-br from-orange-500 to-amber-600 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative">
                            {/* Message important */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <div className="flex items-start mb-4">
                                    <FaCommentAlt className="text-white text-2xl mr-3 mt-1" />
                                    <h3 className="text-xl font-bold text-white">Boîte à suggestions</h3>
                                </div>
                                <p className="text-orange-100 mb-4">
                                    Vous avez une demande de formation spécifique ?
                                    Laissez votre suggestion dans la boîte à messages !
                                </p>
                                <a
                                    href="#suggestions"
                                    className="inline-flex items-center text-white font-medium hover:text-orange-100 transition-colors"
                                >
                                    Accéder à la boîte
                                    <FaArrowRight className="ml-2" />
                                </a>
                            </div>

                            {/* Formations populaires */}
                            <div className="mt-8">
                                <h4 className="text-white text-lg font-semibold mb-4">Formations les plus demandées :</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center text-white/90">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span>Formation en WordPress</span>
                                    </div>
                                    <div className="flex items-center text-white/90">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span>Formation en React JS</span>
                                    </div>
                                    <div className="flex items-center text-white/90">
                                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                                        <span>Création d'API avec Laravel</span>
                                    </div>
                                </div>
                            </div>

                            {/* Badge en bas */}
                            <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center self-start">
                                <span className="text-white text-sm font-medium">Formateur certifié avec 5+ ans d'expérience</span>
                            </div>
                        </div>
                    </div>

                    {/* Section dépliante avec les sujets de formation */}
                    {isExpanded && (
                        <div className="border-t border-gray-100 bg-linear-to-r from-orange-50 to-amber-50 p-8">
                            <div className="max-w-6xl mx-auto">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                                    Sujets de formation disponibles
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {trainingTopics.map((topic, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transform hover:-translate-y-2 transition-transform duration-300"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white text-2xl mb-4">
                                                {topic.icon}
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h4>
                                            <ul className="space-y-2">
                                                {topic.topics.map((item, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-600">
                                                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                {/* Note supplémentaire */}
                                <div className="mt-8 text-center">
                                    <p className="text-gray-600">
                                        <span className="font-semibold text-orange-600">Tous les programmes sont personnalisables !</span>
                                        {' '}Contactez-moi pour discuter de vos besoins spécifiques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bandeau en bas */}
                    <div className="bg-linear-to-r from-orange-600 to-amber-600 py-4 px-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-white text-center md:text-left">
                                <p className="font-medium">📞 Contactez-moi directement ou laissez un message dans la boîte à suggestions</p>
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href="tel:+22898813482"
                                    className="px-6 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors"
                                >
                                    Appeler maintenant
                                </a>
                                <a
                                    href="mailto:formations@fabiancoder.com"
                                    className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    Envoyer un email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Témoignage fictif */}
                <div className="mt-8 text-center">
                    <p className="text-gray-500 italic">
                        "Formation exceptionnelle ! J'ai pu créer mon premier site WordPress en seulement 2 semaines."
                        <span className="block mt-1 text-gray-700">- Marie L., Entrepreneure</span>
                    </p>
                </div>
            </div>

            {/* Animation CSS */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default BannerFormations;