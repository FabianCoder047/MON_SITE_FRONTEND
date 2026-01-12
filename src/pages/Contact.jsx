import React, { useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'contact@fabiancoder.com',
      link: 'mailto:contact@fabiancoder.com',
      color: 'bg-red-100 text-red-600 border-red-200'
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      details: '+228 98 81 34 82',
      link: 'tel:+22898813482',
      color: 'bg-green-100 text-green-600 border-green-200'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localisation',
      details: 'Lomé, Togo',
      link: 'https://maps.google.com/?q=Lomé+Togo',
      color: 'bg-blue-100 text-blue-600 border-blue-200'
    },
    {
      icon: <FaClock />,
      title: 'Disponibilité',
      details: 'Lun - Ven : 9h - 18h',
      link: null,
      color: 'bg-purple-100 text-purple-600 border-purple-200'
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, name: 'LinkedIn', url: '#', color: 'hover:bg-blue-600' },
    { icon: <FaGithub />, name: 'GitHub', url: '#', color: 'hover:bg-gray-800' },
    { icon: <FaTwitter />, name: 'Twitter', url: '#', color: 'hover:bg-blue-400' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', url: '#', color: 'hover:bg-green-500' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simuler l'envoi du formulaire (à remplacer par votre API)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Réinitialiser le formulaire après succès
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-orange-50 to-amber-50"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-70 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-100 rounded-full opacity-70 blur-xl"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-orange-700 font-medium">Contact & Collaboration</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block">Discutons de</span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-amber-500">
                votre projet
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Prêt à donner vie à votre idée ? Contactez-moi pour discuter de votre projet
              web, demande de formation ou toute autre collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Colonne gauche - Informations de contact */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100 sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  Mes <span className="text-orange-500">coordonnées</span>
                </h2>

                {/* Méthodes de contact */}
                <div className="space-y-6 mb-10">
                  {contactMethods.map((method, index) => (
                    <div key={index} className={`p-5 rounded-2xl border ${method.color}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{method.title}</h3>
                          {method.link ? (
                            <a
                              href={method.link}
                              className="text-gray-600 hover:text-orange-600 transition-colors"
                            >
                              {method.details}
                            </a>
                          ) : (
                            <p className="text-gray-600">{method.details}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Réseaux sociaux */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Suivez-moi</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        aria-label={social.name}
                        className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 text-xl transition-all duration-300 transform hover:-translate-y-1 ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Temps de réponse */}
                <div className="mt-10 p-5 bg-linear-to-r from-orange-50 to-amber-50 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-orange-500 text-2xl" />
                    <div>
                      <h4 className="font-bold text-gray-900">Réponse rapide</h4>
                      <p className="text-sm text-gray-600">Je réponds généralement sous 24h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Envoyez-moi un <span className="text-orange-500">message</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez le formulaire ci-dessous et je vous répondrai rapidement.
                </p>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3" />
                      <div>
                        <p className="font-medium text-green-800">
                          Message envoyé avec succès !
                        </p>
                        <p className="text-green-600 text-sm mt-1">
                          Je vous répondrai dans les plus brefs délais.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <div className="flex items-center">
                      <FaExclamationCircle className="text-red-500 mr-3" />
                      <div>
                        <p className="font-medium text-red-800">
                          Une erreur est survenue
                        </p>
                        <p className="text-red-600 text-sm mt-1">
                          Veuillez réessayer ou me contacter directement par téléphone.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom et Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Votre nom *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Votre email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="email@exemple.com"
                      />
                    </div>
                  </div>

                  {/* Téléphone et Sujet */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="+228 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="site-web">Développement de site web</option>
                        <option value="application">Application web/mobile</option>
                        <option value="formation">Demande de formation</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="seo">SEO & Optimisation</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre projet, vos besoins ou vos questions..."
                    ></textarea>
                  </div>

                  {/* Bouton d'envoi */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`group w-full py-4 px-8 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <span className="flex items-center">
                            <FaPaperPlane className="mr-3" />
                            Envoyer le message
                          </span>
                        </>
                      )}
                    </button>
                    <p className="text-sm text-red-500 mt-3 text-center">
                      * Champs obligatoires
                    </p>
                  </div>
                </form>

                {/* Alternative */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 text-center">
                    Vous préférez discuter directement ?{' '}
                    <a href="tel:+22898813482" className="text-orange-600 hover:text-orange-700 font-medium">
                      Appelez-moi au +228 98 81 34 82
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Prêt à concrétiser votre projet ?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Contactez-moi dès aujourd'hui pour discuter de vos idées et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+22898813482"
                className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <FaPhone className="mr-3" />
                  Appeler maintenant
                </span>
              </a>
              <a
                href="mailto:contact@fabiancoder.com"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="flex items-center justify-center">
                  <FaEnvelope className="mr-3" />
                  Envoyer un email
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;