import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Tag } from 'lucide-react';

const categories = ['all', 'substations', 'transmission', 'pelletizing', 'epc', 'automation'];

const projectMetadata = [
  { id: 1, image: '/images/projects/project-1.jpg', category: 'substations', year: '2024' },
  { id: 2, image: '/images/projects/project-2.jpg', category: 'transmission', year: '2023' },
  { id: 3, image: '/images/projects/project-3.jpg', category: 'pelletizing', year: '2024' },
  { id: 4, image: '/images/projects/project-4.jpg', category: 'epc', year: '2023' },
  { id: 5, image: '/images/projects/project-5.jpg', category: 'automation', year: '2024' },
  { id: 6, image: '/images/projects/project-6.jpg', category: 'substations', year: '2023' },
  { id: 7, image: '/images/projects/project-7.jpg', category: 'transmission', year: '2024' },
  { id: 8, image: '/images/projects/project-8.jpg', category: 'pelletizing', year: '2023' },
  { id: 9, image: '/images/projects/project-9.jpg', category: 'automation', year: '2024' },
  { id: 10, image: '/images/projects/project-10.jpg', category: 'substations', year: '2023' },
  { id: 11, image: '/images/projects/project-11.jpg', category: 'epc', year: '2024' },
  ...Array.from({ length: 39 }, (_, i) => ({
    id: 12 + i,
    image: '/images/projects/project-placeholder.jpg',
    category: categories[(i % 5) + 1],
    year: `${2023 + (i % 2)}`
  }))
];

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState(categories[0]);

  const projects = useMemo(() => {
    return projectMetadata.map(p => {
      const key = p.id <= 11 ? `p${p.id}` : 'placeholder';
      const options = p.id > 11 ? { id: p.id } : undefined;
      return {
        ...p,
        title: t(`projectsData.${key}.title`, options),
        description: t(`projectsData.${key}.description`, options),
        location: t(`projectsData.${key}.location`, options),
      };
    });
  }, [i18n.language, t]);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 dark:from-black dark:via-navy-950 dark:to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{t('projectsPage.title')}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('projectsPage.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 bg-white dark:bg-navy-950 sticky top-16 z-40 border-b border-gray-200 dark:border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                  filter === category
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-navy-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-navy-800'
                }`}
              >
                {t(`projectsPage.categories.${category}`)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.05 } }
            }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                layout
                className="group bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mt-auto">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Tag className="w-4 h-4 text-gold-600" />
                      <span>{t(`projectsPage.categories.${project.category}`)}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <MapPin className="w-4 h-4 text-gold-600" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Calendar className="w-4 h-4 text-gold-600" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
