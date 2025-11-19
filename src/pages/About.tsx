import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Award,
      title: t('about.coreValues.excellence'),
      description: t('about.coreValues.excellenceDesc'),
    },
    {
      icon: Users,
      title: t('about.coreValues.teamwork'),
      description: t('about.coreValues.teamworkDesc'),
    },
    {
      icon: Target,
      title: t('about.coreValues.innovation'),
      description: t('about.coreValues.innovationDesc'),
    },
    {
      icon: Heart,
      title: t('about.coreValues.integrity'),
      description: t('about.coreValues.integrityDesc'),
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-navy-950 dark:to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="lg:order-last"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.story.p2')}
              </p>
            </motion.div>
            <motion.div
              className="lg:order-first"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/aboutUs.jpg"
                alt="About Us"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                {t('about.vision')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.visionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                {t('about.mission')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.missionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
                {t('about.values')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.valuesText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              {t('about.coreValues.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold-600 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
