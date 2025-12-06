import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Network, Flame, Cpu, Factory, HardHat, CheckCircle, Award, Users, GitBranch } from 'lucide-react';
import Counter from '../components/Counter';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const introStats = [
    { number: 25, suffix: '+', label: t('intro.stat1') },
    { number: 100, suffix: '+', label: t('intro.stat2') },
    { number: 50, suffix: '+', label: t('intro.stat3') },
  ];

  const services = [
    { icon: Zap, title: t('services.electrical'), description: t('services.electricalDesc') },
    { icon: Network, title: t('services.substations'), description: t('services.substationsDesc') },
    { icon: Flame, title: t('services.gas'), description: t('services.gasDesc') },
    { icon: Cpu, title: t('services.automation'), description: t('services.automationDesc') },
    { icon: Factory, title: t('services.pelletizing'), description: t('services.pelletizingDesc') },
    { icon: HardHat, title: t('services.epc'), description: t('services.epcDesc') },
  ];

const clients = [
  { name: 'Client 1', logo: '/images/Customers/fakkor.png' },
  { name: 'Client 2', logo: '/images/Customers/folladMobarake.png' },
  { name: 'Client 3', logo: '/images/Customers/folladTeknik.png' },
  { name: 'Client 4', logo: '/images/Customers/mapna.png' },
  { name: 'Client 5', logo: '/images/Customers/zoobahanEsfehan.png' },
  { name: 'Client 6', logo: '/images/Customers/mashinsazi.png' },
  { name: 'Client 7', logo: '/images/Customers/Shiraz.png' },
  { name: 'Client 8', logo: '/images/Customers/folladkhozestan.png' },
  { name: 'Client 9', logo: '/images/Customers/ToseeFolladJonob.png' },
  { name: 'Client 10', logo: '/images/Customers/fooladnaztanz.png' }

                                                                                                                                                                                         
      
];

  const featuredProjects = [
    { id: 1, title: 'Golgohar Pelletizing Plant', image: '/images/projects/featured-1.jpg', category: 'Pelletizing' },
    { id: 2, title: '400kV Substation - Isfahan', image: '/images/projects/featured-2.jpg', category: 'Substations' },
    { id: 3, title: 'South Pars Gas Field Automation', image: '/images/projects/featured-3.jpg', category: 'Automation' },
  ];

  const whyChooseUsItems = [
    t('whyUs.item1'), t('whyUs.item2'), t('whyUs.item3'),
    t('whyUs.item4'), t('whyUs.item5'), t('whyUs.item6'),
  ];
  
  const workflowSteps = [
    { icon: Users, title: t('workflow.step1'), description: t('workflow.step1Desc') },
    { icon: GitBranch, title: t('workflow.step2'), description: t('workflow.step2Desc') },
    { icon: HardHat, title: t('workflow.step3'), description: t('workflow.step3Desc') },
    { icon: Award, title: t('workflow.step4'), description: t('workflow.step4Desc') },
  ];

  const certifications = [
    { name: 'ISO 9001', logo: '/images/certs/iso9001.png' },
    { name: 'ISO 14001', logo: '/images/certs/iso14001.png' },
    { name: 'OHSAS 18001', logo: '/images/certs/ohsas18001.png' },
    { name: 'HSE-MS', logo: '/images/certs/hse.png' },
    { name: 'Grade A Contractor', logo: '/images/certs/grade-a.png' },
    { name: 'NEMA Member', logo: '/images/certs/nema.png' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/Banners/main.png"
      alt="Industrial Project"
      className="w-full h-full object-cover filter blur-md"
    />
  </div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
        {t('hero.title')}
      </motion.h1>
      <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto text-balance">
        {t('hero.subtitle')}
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-gold-500/50 space-x-2 rtl:space-x-reverse">
          <span>{t('hero.cta')}</span>
          <ArrowRight className="w-5 h-5 rtl:rotate-180" />
        </Link>
        <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all">
          {t('hero.learnMore')}
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom Gradient (Optional for fade effect) */}
  <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white dark:from-navy-950 to-transparent"></div>
</section>


      

      {/* Intro Section */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-6">{t('intro.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t('intro.description')}</p>
            </motion.div>
            <motion.div className="lg:col-span-2 grid grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
              {introStats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center bg-gray-50 dark:bg-navy-900 p-4 rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent mb-1">
                    <Counter from={0} to={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('services.title')}</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white dark:bg-navy-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-600 to-gold-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('projects.title')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <div className="aspect-[4/3] overflow-hidden"><img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <span className="text-sm font-semibold text-gold-400 mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 space-x-2 rtl:space-x-reverse">
              <span>{t('projects.viewAll')}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-navy-900 dark:bg-navy-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="text-white lg:order-last" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">{t('whyUs.title')}</motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {whyChooseUsItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="lg:order-first" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.img src="/images/Banners/whyUs.jpg" alt="Why Choose Us" className="rounded-2xl shadow-2xl" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('workflow.title')}</h2>
          </motion.div>
          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-300 dark:bg-navy-700"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {workflowSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="text-center relative z-10">
                  <div className="w-20 h-20 bg-white dark:bg-navy-800 border-4 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
<section className="py-16 bg-[#F8FAFC] dark:bg-[#1E2A47]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-4">
        {t('clients.title')}
      </h2>
    </motion.div>

    {/* ثابت: 5 ستون، 2 ردیف */}
    <div className="grid grid-cols-5 gap-12 place-items-center">
      {clients.slice(0, 10).map((client, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.4,
            type: "spring",
            stiffness: 120
          }}
          className="flex items-center justify-center w-32 h-20"
        >
          <motion.img
            src={client.logo}
            alt={client.name}
            className="w-full h-full object-contain"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      ))}
    </div>

  </div>
</section>



      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-4">{t('certifications.title')}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">{t('certifications.description')}</p>
            </motion.div>
            <motion.div 
              className="w-full overflow-hidden relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-black to-transparent z-10"></div>
              <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-black to-transparent z-10"></div>
              <motion.div 
                className="flex"
                animate={{
                  x: ['0%', '-100%'],
                  transition: {
                    ease: 'linear',
                    duration: 30,
                    repeat: Infinity,
                  }
                }}
              >
                {[...certifications, ...certifications].map((cert, index) => (
                  <div key={index} className="flex-shrink-0 w-1/3 md:w-1/4 lg:w-1/6 p-4 flex items-center justify-center">
                    <img 
                      src={cert.logo} 
                      alt={cert.name} 
                      className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
