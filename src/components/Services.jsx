import React, { useState } from 'react';
import { FaWordpress, FaCode, FaLaptopCode, FaDesktop, FaFileAlt, FaSearch, FaRocket, FaLightbulb, FaPalette, FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';

const Services = () => {
    const [activeTab, setActiveTab] = useState('all');

    // Liste complète des services
    const services = [
        {
            id: 1,
            category: 'web',
            icon: <FaWordpress className="text-4xl" />,
            title: 'Développement WordPress',
            description: 'Sites WordPress sur mesure, e-commerce avec WooCommerce, blogs professionnels et sites vitrines optimisés.',
            features: ['Thèmes personnalisés', 'Extensions sur mesure', 'WooCommerce', 'Optimisation performance'],
            price: 'À partir de 150€',
            colorClass: 'blue',
            popular: true
        },
        {
            id: 2,
            category: 'web',
            icon: <FaCode className="text-4xl" />,
            title: 'Sites Vitrines Codés',
            description: 'Sites web statiques ou dynamiques développés de A à Z avec les dernières technologies (React, Laravel, etc.).',
            features: ['HTML/CSS/JS', 'React/Next.js', 'Responsive Design', 'Optimisation SEO'],
            price: 'À partir de 200€',
            colorClass: 'purple',
        },
        {
            id: 3,
            category: 'web',
            icon: <FaLaptopCode className="text-4xl" />,
            title: 'Applications Web',
            description: 'Applications web complexes (SPA, PWA) avec bases de données, authentification et API REST.',
            features: ['Laravel/React', 'API REST', 'Base de données', 'Authentification'],
            price: 'À partir de 800€',
            colorClass: 'green',
            popular: true
        },
        {
            id: 4,
            category: 'desktop',
            icon: <FaDesktop className="text-4xl" />,
            title: 'Applications Desktop',
            description: 'Logiciels desktop cross-platform avec Electron ou technologies natives pour Windows, macOS, Linux.',
            features: ['Electron.js', 'Interface native', 'Base de données locale', 'Mise à jour automatique'],
            price: 'À partir de 300€',
            colorClass: 'red',
        },
        {
            id: 5,
            category: 'design',
            icon: <FaFileAlt className="text-4xl" />,
            title: 'CV & Affiches',
            description: 'Design professionnel de CV attractifs, affiches publicitaires et documents marketing percutants.',
            features: ['CV professionnels', 'Affiches événementiels', 'Flyers', 'Branding personnel'],
            price: 'À partir de 7€',
            colorClass: 'yellow',
        },
        {
            id: 6,
            category: 'seo',
            icon: <FaSearch className="text-4xl" />,
            title: 'SEO & Optimisation',
            description: 'Audit SEO complet, optimisation technique, contenu et référencement local pour booster votre visibilité.',
            features: ['Audit complet', 'Optimisation on-page', 'Référencement local', 'Reporting mensuel'],
            price: 'À partir de 200€/mois',
            colorClass: 'teal',
            popular: true
        },
        {
            id: 7,
            category: 'web',
            icon: <FaRocket className="text-4xl" />,
            title: 'Optimisation Performance',
            description: 'Accélération de votre site web, réduction du temps de chargement et amélioration des Core Web Vitals.',
            features: ['Optimisation images', 'Cache avancé', 'Minification', 'CDN intégration'],
            price: 'À partir de 400€',
            colorClass: 'orange',
        },
        {
            id: 8,
            category: 'web',
            icon: <FaMobileAlt className="text-4xl" />,
            title: 'Sites Responsive',
            description: 'Design adaptatif parfaitement optimisé pour tous les appareils (mobile, tablette, desktop).',
            features: ['Mobile-first', 'Tests multi-appareils', 'UI/UX optimisé', 'Performance mobile'],
            price: 'Inclus dans tous les projets',
            colorClass: 'indigo',
        }
    ];

    // Catégories
    const categories = [
        { id: 'all', label: 'Tous les services', icon: <FaLightbulb /> },
        { id: 'web', label: 'Développement Web', icon: <FaLaptopCode /> },
        { id: 'desktop', label: 'Applications Desktop', icon: <FaDesktop /> },
        { id: 'design', label: 'Design Graphique', icon: <FaPalette /> },
        { id: 'seo', label: 'SEO & Marketing', icon: <GiNetworkBars /> }
    ];

    // Filtrer les services par catégorie
    const filteredServices = activeTab === 'all'
        ? services
        : services.filter(service => service.category === activeTab);

    // Fonction pour obtenir les classes CSS par couleur
    const getColorClasses = (colorClass) => {
        const colorMap = {
            blue: {
                bg: 'bg-blue-100',
                border: 'border-blue-200',
                text: 'text-blue-600',
                gradientFrom: 'from-blue-500',
                gradientTo: 'to-blue-600',
                icon: 'text-blue-600'
            },
            purple: {
                bg: 'bg-purple-100',
                border: 'border-purple-200',
                text: 'text-purple-600',
                gradientFrom: 'from-purple-500',
                gradientTo: 'to-purple-600',
                icon: 'text-purple-600'
            },
            green: {
                bg: 'bg-green-100',
                border: 'border-green-200',
                text: 'text-green-600',
                gradientFrom: 'from-green-500',
                gradientTo: 'to-green-600',
                icon: 'text-green-600'
            },
            red: {
                bg: 'bg-red-100',
                border: 'border-red-200',
                text: 'text-red-600',
                gradientFrom: 'from-red-500',
                gradientTo: 'to-red-600',
                icon: 'text-red-600'
            },
            yellow: {
                bg: 'bg-yellow-100',
                border: 'border-yellow-200',
                text: 'text-yellow-600',
                gradientFrom: 'from-yellow-500',
                gradientTo: 'to-yellow-600',
                icon: 'text-yellow-600'
            },
            teal: {
                bg: 'bg-teal-100',
                border: 'border-teal-200',
                text: 'text-teal-600',
                gradientFrom: 'from-teal-500',
                gradientTo: 'to-teal-600',
                icon: 'text-teal-600'
            },
            orange: {
                bg: 'bg-orange-100',
                border: 'border-orange-200',
                text: 'text-orange-600',
                gradientFrom: 'from-orange-500',
                gradientTo: 'to-orange-600',
                icon: 'text-orange-600'
            },
            indigo: {
                bg: 'bg-indigo-100',
                border: 'border-indigo-200',
                text: 'text-indigo-600',
                gradientFrom: 'from-indigo-500',
                gradientTo: 'to-indigo-600',
                icon: 'text-indigo-600'
            }
        };

        return colorMap[colorClass] || colorMap.blue;
    };

    return (
        <section id="services" className="py-20 bg-linear-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-orange-700 font-medium">Services Professionnels</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Mes <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">Services</span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Des solutions digitales complètes pour propulser votre présence en ligne.
                        De la conception au déploiement, je vous accompagne à chaque étape.
                    </p>
                </div>

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 ${activeTab === category.id
                                ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-orange-300'
                                }`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Grille des services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {filteredServices.map((service) => {
                        const colors = getColorClasses(service.colorClass);

                        return (
                            <div
                                key={service.id}
                                className={`relative bg-white rounded-2xl shadow-xl border ${colors.border} overflow-hidden transform hover:-translate-y-2 transition-all duration-500 group`}
                            >
                                {/* Badge populaire */}
                                {service.popular && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <span className="px-3 py-1 bg-linear-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-full">
                                            Populaire
                                        </span>
                                    </div>
                                )}

                                {/* Icône avec fond */}
                                <div className={`p-8 ${colors.bg} border-b ${colors.border}`}>
                                    <div className={`w-20 h-20 rounded-2xl ${colors.bg} flex items-center justify-center mx-auto`}>
                                        <div className={colors.icon}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Contenu */}
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Prix */}
                                    <div className="mb-6">
                                        <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                                        <div className="text-sm text-gray-500">Forfait personnalisable</div>
                                    </div>

                                    {/* Bouton */}
                                    <button className="w-full py-3 bg-linear-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-[1.02] group-hover:bg-linear-to-r group-hover:from-orange-500 group-hover:to-amber-500">
                                        Demander un devis
                                    </button>
                                </div>

                                {/* Effet de hover */}
                                <div className={`absolute inset-0 bg-linear-to-r ${colors.gradientFrom} ${colors.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Section avantages */}
                <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 mb-16 border border-orange-100">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pourquoi me choisir ?</h3>
                            <p className="text-gray-600">
                                Avec plus de 5 ans d'expérience, je combine expertise technique et créativité pour des résultats exceptionnels.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                                <FaChartLine className="text-3xl text-orange-500 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Suivi en temps réel</h4>
                                <p className="text-sm text-gray-600">Tableau de bord pour suivre l'avancement de votre projet</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100">
                                <FaShieldAlt className="text-3xl text-orange-500 mb-4" />
                                <h4 className="font-bold text-gray-900 mb-2">Garantie qualité</h4>
                                <p className="text-sm text-gray-600">Tests rigoureux et garantie de 6 mois sur tous les projets</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 lg:col-span-1 lg:row-span-2">
                            <h4 className="font-bold text-gray-900 mb-4">Process de travail</h4>
                            <ol className="space-y-4">
                                <li className="flex items-start">
                                    <span className="shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                                    <div>
                                        <h5 className="font-semibold">Consultation</h5>
                                        <p className="text-sm text-gray-600">Analyse de vos besoins</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                                    <div>
                                        <h5 className="font-semibold">Conception</h5>
                                        <p className="text-sm text-gray-600">Maquettes et architecture</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                                    <div>
                                        <h5 className="font-semibold">Développement</h5>
                                        <p className="text-sm text-gray-600">Codage et intégration</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                                    <div>
                                        <h5 className="font-semibold">Livraison</h5>
                                        <p className="text-sm text-gray-600">Tests et formation</p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
                    <h3 className="text-3xl font-bold mb-6">Prêt à démarrer votre projet ?</h3>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Discutons de votre idée et créons ensemble une solution sur mesure qui répond à vos objectifs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Demander un devis gratuit
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                            <span className="flex items-center">
                                <FaRocket className="mr-2" />
                                Voir mes réalisations
                            </span>
                        </button>
                    </div>
                    <p className="mt-6 text-gray-400">Réponse garantie sous 24h</p>
                </div>
            </div>
        </section>
    );
};

export default Services;