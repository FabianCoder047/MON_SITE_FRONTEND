import React from 'react';
import { FaCode, FaRocket, FaUsers, FaLightbulb, FaAward, FaHandshake, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const skills = [
        { name: 'Laravel', level: 95, color: 'bg-red-500' },
        { name: 'React JS', level: 90, color: 'bg-blue-500' },
        { name: 'PHP', level: 92, color: 'bg-purple-500' },
        { name: 'JavaScript', level: 88, color: 'bg-yellow-500' },
        { name: 'Tailwind CSS', level: 85, color: 'bg-teal-500' },
        { name: 'MySQL', level: 87, color: 'bg-orange-500' },
    ];

    const milestones = [
        { year: '2019', title: 'Début du parcours', description: 'Premiers pas en développement web' },
        { year: '2020', title: 'Premiers projets', description: 'Freelance et sites vitrines' },
        { year: '2021', title: 'Spécialisation Laravel', description: 'Formation intensive Laravel' },
        { year: '2022', title: 'Expansion Full-Stack', description: 'Ajout de React à ma stack' },
        { year: '2023', title: 'Agence personnelle', description: 'Création de FabianCoder' },
        { year: '2024', title: 'Formations & Mentorat', description: 'Transmission des compétences' },
    ];

    const values = [
        {
            icon: <FaCode />,
            title: 'Excellence Technique',
            description: 'Code propre, architecture solide et bonnes pratiques.'
        },
        {
            icon: <FaHandshake />,
            title: 'Transparence',
            description: 'Communication claire et suivi régulier des projets.'
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovation',
            description: 'Solutions créatives adaptées aux besoins spécifiques.'
        },
        {
            icon: <FaUsers />,
            title: 'Collaboration',
            description: 'Partenaire de confiance plutôt que simple prestataire.'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-orange-100/50 to-amber-100/30"></div>
                <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                            <span className="text-orange-700 font-medium">Mon Histoire & Valeurs</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                            <span className="block">Enchanté, je suis</span>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                                FabianCoder
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Développeur Full-Stack passionné avec plus de 5 ans d'expérience dans la création
                            de solutions digitales innovantes. Mon objectif : transformer vos idées en
                            applications web performantes et élégantes.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mb-12">
                            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-orange-100">
                                <FaCalendarAlt className="text-orange-500" />
                                <span className="font-semibold">+5 ans d'expérience</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-orange-100">
                                <FaRocket className="text-orange-500" />
                                <span className="font-semibold">50+ projets réalisés</span>
                            </div>
                            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-orange-100">
                                <FaGraduationCap className="text-orange-500" />
                                <span className="font-semibold">Formateur passionné</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ma Philosophie */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Ma <span className="text-orange-500">Philosophie</span> de Travail
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <div>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        Je crois fermement que la technologie doit servir les gens,
                                        pas l'inverse. Chaque ligne de code que j'écris a pour objectif
                                        de résoudre un problème réel, d'améliorer une expérience ou
                                        de créer de la valeur.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Mon approche combine rigueur technique et créativité.
                                        Je ne me contente pas de "coder" - je conçois, architecte et
                                        implémente des solutions qui durent dans le temps.
                                    </p>
                                </div>

                                <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Mes Valeurs</h3>
                                    <div className="space-y-6">
                                        {values.map((value, index) => (
                                            <div key={index} className="flex items-start space-x-4">
                                                <div className="shrink-0 w-12 h-12 bg-linear-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white">
                                                    {value.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-1">{value.title}</h4>
                                                    <p className="text-gray-600 text-sm">{value.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mes Compétences */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Mes <span className="text-orange-500">Expertises</span> Techniques
                    </h2>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {skills.map((skill, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="font-semibold text-gray-900">{skill.name}</span>
                                            <span className="text-gray-600 font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Stack Technologique Complète</h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-white rounded-full border border-orange-200 text-orange-700 font-medium">Laravel</span>
                                    <span className="px-4 py-2 bg-white rounded-full border border-blue-200 text-blue-700 font-medium">React JS</span>
                                    <span className="px-4 py-2 bg-white rounded-full border border-purple-200 text-purple-700 font-medium">PHP</span>
                                    <span className="px-4 py-2 bg-white rounded-full border border-teal-200 text-teal-700 font-medium">Tailwind CSS</span>
                                    <span className="px-4 py-2 bg-white rounded-full border border-green-200 text-green-700 font-medium">MySQL</span>
                                    <span className="px-4 py-2 bg-white rounded-full border border-yellow-200 text-yellow-700 font-medium">JavaScript</span>
                                    <span className="px-4 py-2 bg-white rounded-full border border-red-200 text-red-700 font-medium">API REST</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mon Parcours */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Mon <span className="text-orange-500">Parcours</span>
                    </h2>

                    <div className="max-w-6xl mx-auto">
                        <div className="relative">
                            {/* Ligne de timeline */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-orange-400 to-amber-400"></div>

                            {/* Éléments de timeline */}
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                                    >
                                        {/* Point sur la timeline */}
                                        <div className="absolute md:relative left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0 w-6 h-6 bg-white border-4 border-orange-500 rounded-full z-10"></div>

                                        {/* Contenu */}
                                        <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-6 md:mt-0`}>
                                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                                                <div className="text-sm text-orange-600 font-semibold mb-2">{milestone.year}</div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pourquoi Travailler Avec Moi */}
            <section className="py-16 bg-linear-to-r from-orange-50 to-amber-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Pourquoi Choisir <span className="text-orange-500">FabianCoder</span> ?
                    </h2>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 transform hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                                    <FaAward />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise Confirmée</h3>
                                <p className="text-gray-600">
                                    +5 ans d'expérience et 50+ projets réussis.
                                    Je maîtrise les technologies modernes et les bonnes pratiques.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 transform hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                                    <FaHandshake />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Partenaire de Confiance</h3>
                                <p className="text-gray-600">
                                    Communication transparente, respect des délais et engagement
                                    total dans la réussite de votre projet.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-100 transform hover:-translate-y-2 transition-all duration-300">
                                <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                                    <FaLightbulb />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Solutions Innovantes</h3>
                                <p className="text-gray-600">
                                    Je ne me contente pas de coder - je conçois des solutions
                                    créatives qui répondent parfaitement à vos besoins.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Citation */}
                    <div className="max-w-3xl mx-auto mt-16 text-center">
                        <div className="relative">
                            <svg className="w-12 h-12 text-orange-300 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8V18C10 25.732 14.268 30 22 30V26C17.514 26 15.123 24.363 14.753 20.424C16.669 19.677 18 17.706 18 15V8H10ZM30 8V18C30 25.732 25.732 30 18 30V26C22.486 26 24.877 24.363 25.247 20.424C23.331 19.677 22 17.706 22 15V8H30Z"></path>
                            </svg>
                            <p className="text-2xl text-gray-700 italic mb-6">
                                "Mon objectif est simple : créer des solutions digitales qui
                                non seulement fonctionnent parfaitement, mais qui apportent
                                également une réelle valeur à mes clients."
                            </p>
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                                    FC
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">FabianCoder</div>
                                    <div className="text-gray-600">Développeur Full-Stack & Formateur</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-6">Prêt à Donner Vie à Votre Projet ?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            Discutons de vos idées et créons ensemble quelque chose d'extraordinaire.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Discuter de mon projet
                            </a>
                            <a
                                href="#portfolio"
                                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Voir mes réalisations
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};

export default About;