import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';  // اضافه کردن کتابخانه EmailJS

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

    // ارسال ایمیل با استفاده از emailjs
    emailjs
      .sendForm(
        'service_wp5oqh9',  // Service ID که از EmailJS دریافت کرده‌اید
        'template_ouy247h',  // Template ID که در EmailJS ساخته‌اید
        e.target,  // ارسال فرم
        'rzgSkc0XYe5QHMQlR'  // API Key که از EmailJS دریافت کرده‌اید
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          alert('Thank you for your message! We will get back to you soon.');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.log('Error:', error.text);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-48 md:h-64 lg:h-80 text-white overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Banners/contact.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('contact.title')}
            </h1>
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
  <div className="text-right">
    <h3 className="font-semibold text-navy-900 dark:text-white mb-2">
      {t('contact.phone')}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-1 inline-block" dir="ltr">
       021 2290 5211
    </p>
    <br></br>
    <p className="text-gray-600 dark:text-gray-400 inline-block" dir="ltr">
      0998 230 2930
    </p>
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
                    <p className="text-gray-600 dark:text-gray-400">info@mobanir.com</p>
                    
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
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-8">
                {t('contact.info')}
              </h2>
              {/* بخش‌های اطلاعات تماس */}
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
                  src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d202.34924294589138!2d51.4332346!3d35.7609328!3m2!1i1024!2i768!4f13.1!2m1!1z2YXbjNix2K_Yp9mF2KfYryzYrtuM2KfYqNin2YYg2qnYp9iy2LHZiNmGINi02YXYp9mE24wsINiu24zYp9io2KfZhiDZhtuM2qkg2LHYp9uMLCDZvtmE2KfaqSDbsiwg2LfYqNmC2Ycg2LPZiNmFINmI2KfYrdivINu24oCt!5e0!3m2!1sen!2s!4v1763468468527!5m2!1sen!2s"

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
