import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Zap, Network, Flame, Cpu, Factory, HardHat } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Zap, title: t('services.electrical'), description: t('services.electricalDesc') },
    { icon: Network, title: t('services.substations'), description: t('services.substationsDesc') },
    { icon: Flame, title: t('services.gas'), description: t('services.gasDesc') },
    { icon: Cpu, title: t('services.automation'), description: t('services.automationDesc') },
    { icon: Factory, title: t('services.pelletizing'), description: t('services.pelletizingDesc') },
    { icon: HardHat, title: t('services.epc'), description: t('services.epcDesc') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
              {t('servicesPage.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('servicesPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2 flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
