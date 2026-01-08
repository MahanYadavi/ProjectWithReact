import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Tag, X } from 'lucide-react';

const categories = ['all', 'industrial', 'transmission', 'panels', 'infrastructure'];

const projectMetadata = [
  { id: 1, image: '/images/projects/1.png', category: 'industrial', year: '1397' },
  { id: 2, image: '/images/projects/2.png', category: 'transmission', year: '1398' },
  { id: 3, image: '/images/projects/3.jpg', category: 'industrial', year: '1400' },
  { id: 4, image: '/images/projects/4.png', category: 'industrial', year: '1402' },
  { id: 5, image: '/images/projects/5.png', category: 'transmission', year: '1397' },
  { id: 6, image: '/images/projects/6.png', category: 'transmission', year: '1397' },
  { id: 7, image: '/images/projects/7.png', category: 'industrial', year: '1397' },
  { id: 8, image: '/images/projects/8.png', category: 'panels', year: '1397' },
  { id: 9, image: '/images/projects/9.png', category: 'industrial', year: '1392' },
  { id: 10, image: '/images/projects/10.png', category: 'transmission', year: '1392' },
  { id: 11, image: '/images/projects/11.png', category: 'transmission', year: '1391' },
  { id: 12, image: '/images/projects/12.png', category: 'transmission', year: '1392' },
  { id: 13, image: '/images/projects/13.png', category: 'industrial', year: '1388' },
  { id: 14, image: '/images/projects/14.png', category: 'transmission', year: '1391' },
  { id: 15, image: '/images/projects/15.png', category: 'industrial', year: '1383' },
  { id: 16, image: '/images/projects/16.png', category: 'industrial', year: '1387' },
  { id: 17, image: '/images/projects/17.png', category: 'industrial', year: '1385' },
  { id: 18, image: '/images/projects/18.png', category: 'industrial', year: '1385' },
  { id: 19, image: '/images/projects/19.png', category: 'industrial', year: '1382' },
  // { id: 20, image: '/images/projects/20.png', category: 'transmission', year: '1389' },
  { id: 21, image: '/images/projects/21.png', category: 'industrial', year: '1380' },
  { id: 22, image: '/images/projects/22.png', category: 'industrial', year: '1386' },
  { id: 23, image: '/images/projects/23.png', category: 'industrial', year: '1382' },
  { id: 24, image: '/images/projects/24.png', category: 'panels', year: '1382' },
  { id: 25, image: '/images/projects/25.png', category: 'panels', year: '1382' },
  { id: 26, image: '/images/projects/26.png', category: 'panels', year: '1382' },
  { id: 27, image: '/images/projects/27.png', category: 'panels', year: '1381' },
  { id: 28, image: '/images/projects/28.png', category: 'transmission', year: '1381' },
  { id: 29, image: '/images/projects/29.png', category: 'transmission', year: '1384' },
  { id: 30, image: '/images/projects/30.png', category: 'transmission', year: '1383' },
  { id: 31, image: '/images/projects/31.png', category: 'panels', year: '1385' },
  { id: 32, image: '/images/projects/32.png', category: 'panels', year: '1385' },
  { id: 33, image: '/images/projects/33.png', category: 'panels', year: '1381' },
  { id: 34, image: '/images/projects/34.png', category: 'industrial', year: '1395' },
  { id: 35, image: '/images/index/janja.jpeg', category: 'infrastructure', year: '1403' },
  { id: 36, image: '/images/index/temp1.png', category: 'infrastructure', year: '1404' }

]


const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState(categories[0]);
    const [selectedProject, setSelectedProject] = useState<{
    id: number;
    image: string;
    category: string;
    year: string;
    title: string;
    description: string;
    location: string;
  } | null>(null);
  const projects = useMemo(() => {
    return projectMetadata.map(p => {
      const key = `p${p.id}`; // کلید ترجمه همیشه مطابق با p1 تا p34
      return {
        ...p,
        title: t(`projectsData.${key}.title`),
        description: t(`projectsData.${key}.description`),
        location: t(`projectsData.${key}.location`),
      };
    });
  }, [i18n.language, t]);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative h-48 md:h-64 lg:h-80 text-white overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Banners/aboutBanners.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/30" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {t('projectsPage.title')}
            </h1>
          </motion.div>
        </div>
      </section>
      {/* فیلتر دسته‌بندی */}
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

      {/* پروژه‌ها */}
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
                               className="group bg-white dark:bg-navy-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all flex flex-col cursor-pointer focus-visible:ring-2 focus-visible:ring-gold-500"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
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
       {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white dark:bg-navy-900 shadow-2xl">
                        <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-navy-900 shadow-lg transition hover:bg-gold-500 hover:text-white dark:bg-navy-800 dark:text-white dark:hover:bg-gold-500"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="max-h-[85vh] overflow-y-auto">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                   className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-300">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-3 py-1 font-semibold text-gold-600 dark:text-gold-300">
                    <Tag className="h-4 w-4" />
                    {t(`projectsPage.categories.${selectedProject.category}`)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold-500" />
                    {selectedProject.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold-500" />
                    {selectedProject.year}
                  </span>
                </div>
                <h2 className="mt-4 text-2xl md:text-3xl font-bold text-navy-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 -z-10"
            aria-label="Close modal"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
