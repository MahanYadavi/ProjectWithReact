import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Records: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-4">{t('recordsPage.title')}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t('recordsPage.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert mx-auto text-gray-700 dark:text-gray-300">
            <p>{t('recordsPage.intro') || t('recordsPage.subtitle')}</p>
            <p className="mt-4 text-sm text-gray-500">{t('recordsPage.note')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Records;
