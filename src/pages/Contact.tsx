import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-navy-950 dark:to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">
                {t('contact.info')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-navy-900 rounded-xl">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
                      {t('contact.address')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t('contact.addressText')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-navy-900 rounded-xl">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
                      {t('contact.phone')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 234 567 8900</p>
                    <p className="text-gray-600 dark:text-gray-400">+1 234 567 8901</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-navy-900 rounded-xl">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
                      {t('contact.email')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">info@powerflow.com</p>
                    <p className="text-gray-600 dark:text-gray-400">support@powerflow.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-gray-50 dark:bg-navy-900 rounded-xl">
                  <div className="w-12 h-12 bg-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
                      {t('contact.businessHours.title')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{t('contact.businessHours.monFri')}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t('contact.businessHours.saturday')}</p>
                    <p className="text-gray-600 dark:text-gray-400">{t('contact.businessHours.sunday')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-navy-900 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">
                  {t('contact.formTitle')}
                </h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-600 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-600 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-600 focus:border-transparent outline-none transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-900 dark:text-white mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white focus:ring-2 focus:ring-gold-600 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-gold-500/50 space-x-2 rtl:space-x-reverse"
                  >
                    <Send className="w-5 h-5" />
                    <span>{t('contact.send')}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-200 dark:bg-navy-900">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1748449044635!2d55.27163631501204!3d25.197196483881097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
