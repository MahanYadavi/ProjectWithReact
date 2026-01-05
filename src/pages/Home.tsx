import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Network, Flame, Cpu, Factory, HardHat, CheckCircle, Award, Users, GitBranch } from 'lucide-react';
import Counter from '../components/Counter';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css"; // حتما CSS اصلی
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    { icon: Zap, title: t('services.electrical'), description: '' },
    { icon: Network, title: t('services.substations'), description: '' },
    { icon: Cpu, title: t('services.automation'), description: '' },
    { icon: Factory, title: t('services.pelletizing'), description:'' },
  ];
const clients = [
  { name: 'Client 1', logo: '/images/Customers/fakkor.png' },
  { name: 'Client 2', logo: '/images/Customers/Foolad.png' },
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
    { id: 1, title: 'مجتمع گندله سازی خرامه شیراز', image: '/images/index/temp1.png', category: 'معماری و سیویل' },
    { id: 2, title: 'مجتمع صنعتی فولاد و  ذوب آهن نطنز', image: '/images/index/NatanzZobAhan.jpg', category: 'برق و ابزار دقیق' },
    { id: 3, title: 'پست برق شهرستان نطنز', image: '/images/index/post.jpg',category:'برق و ابزار دقیق' },
    { id: 4, title: 'مجتمع صنعتی فولاد پاسارگاد شیراز', image: '/images/index/Foolad.jpg', category: 'برق و ابزار دقیق' },
    { id: 5, title: 'مجتمع معدنی تغلیظ مس جانجا', image: '/images/index/janja.jpeg', category: 'صنعتی' },
    { id: 6, title: 'مجتمع صنعتی ذوب آهن البرز ناب آرش', image: '/images/index/Arash.jpg', category: 'برق و ابزار دقیق' },

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
  { name: 'Cert 1', logo: '/images/certs/1.jpg' },
  { name: 'Cert 2', logo: '/images/certs/2.jpg' },
  { name: 'Cert 3', logo: '/images/certs/3.jpg' },
  { name: 'Cert 4', logo: '/images/certs/4.jpg' },
  { name: 'Cert 5', logo: '/images/certs/5.jpg' }

  ];

  const newsHighlights = [
    {
      key: 'news1',
      image: '/images/index/post.jpg',
      category: t('newsPage.items.news1.category'),
      date: t('newsPage.items.news1.date'),
      readTime: t('newsPage.items.news1.readTime'),
      title: t('newsPage.items.news1.title'),
      excerpt: t('newsPage.items.news1.excerpt'),
    },
    {
      key: 'news2',
      image: '/images/index/Foolad.jpg',
      category: t('newsPage.items.news2.category'),
      date: t('newsPage.items.news2.date'),
      readTime: t('newsPage.items.news2.readTime'),
      title: t('newsPage.items.news2.title'),
      excerpt: t('newsPage.items.news2.excerpt'),
    },
    {
      key: 'news3',
      image: '/images/index/janja.jpeg',
      category: t('newsPage.items.news3.category'),
      date: t('newsPage.items.news3.date'),
      readTime: t('newsPage.items.news3.readTime'),
      title: t('newsPage.items.news3.title'),
      excerpt: t('newsPage.items.news3.excerpt'),
    },
  ];

   return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-navy-900 dark:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/Banners/temp12.jpeg"
      alt="Industrial Background"
      className="w-full h-full object-cover filter brightness-75 scale-105"
    />
  </div>
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/90"></div>
  <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl"></div>
  <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.span variants={itemVariants} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
        {t('hero.title')}
      </motion.span>
      <motion.h1 variants={itemVariants} className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        {t('hero.subtitle')}
      </motion.h1>
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link to="/projects" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-gold-500/50 space-x-2 rtl:space-x-reverse">
          <span>{t('hero.cta')}</span>
          <ArrowRight className="w-5 h-5 rtl:rotate-180" />
        </Link>
        <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all">
          {t('hero.learnMore')}
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom Gradient */}
  <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-white dark:from-navy-950 to-transparent"></div>
</section>


      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-6">{t('intro.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t('intro.description')}</p>
            </motion.div>
            <motion.div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
              {introStats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="text-center bg-gray-50/80 dark:bg-navy-900/70 p-6 rounded-2xl shadow-sm border border-gray-100/70 dark:border-navy-800 hover:-translate-y-1 transition-transform">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent mb-2">
                    <Counter from={0} to={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white/90 dark:bg-navy-900/80 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2 border border-transparent hover:border-gold-500/30 backdrop-blur">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gold-600 to-gold-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('projects.title')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-transparent hover:border-gold-500/30">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-900/30 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-sm font-semibold text-gold-400 mb-1 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/projects" className="inline-flex items-center justify-center px-8 py-4 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 space-x-2 rtl:space-x-reverse shadow-lg hover:shadow-gold-500/30">
              <span>{t('projects.viewAll')}</span>
              <ArrowRight className="w-5 h-5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 md:py-20 bg-navy-900 dark:bg-black overflow-hidden relative">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="text-white lg:order-last" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={containerVariants}>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">{t('whyUs.title')}</motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                {whyChooseUsItems.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start space-x-3 rtl:space-x-reverse rounded-xl bg-white/5 p-3 backdrop-blur-sm">
                    <div className="flex-shrink-0 mt-1 bg-gold-500/20 p-1 rounded-full">
                      <CheckCircle className="w-5 h-5 text-gold-500" />
                    </div>
                    <span className="text-lg text-gray-200">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div className="lg:order-first" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.img 
                src="/images/Banners/whyusSection.jpeg" 
                alt="Why Choose Us" 
                className="rounded-3xl shadow-2xl border-4 border-navy-800/60" 
                whileHover={{ scale: 1.02 }} 
                transition={{ type: 'spring', stiffness: 300 }} 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('workflow.title')}</h2>
          </motion.div>
          <div className="relative">
            {/* Connecting Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 dark:bg-navy-700"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {workflowSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="text-center relative z-10 group">
                  <div className="w-20 h-20 bg-white dark:bg-navy-800 border-4 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-9 h-9 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[200px] mx-auto">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-[#F8FAFC] dark:bg-[#0F172A]">
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

          {/* Responsive Grid: 2 cols mobile, 3 cols tablet, 5 cols desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 place-items-center">
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
  className="
    flex items-center justify-center 
    w-full max-w-[150px] aspect-[3/2]
    bg-white/70 dark:bg-white/5
    rounded-2xl
    border border-transparent
    transition-all duration-300
    hover:bg-yellow-400/20 
    hover:border-gold-400/40
    hover:shadow-lg
  "
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
      <section className="py-20 bg-gray-50 dark:bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* TITLE */}
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-navy-900 dark:text-white">
        {t("certifications.title")}
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
        {t("certifications.description")}
      </p>
    </div>

    {/* CAROUSEL */}
    <Swiper
      spaceBetween={30}
      loop={false} // ← لوپ غیر فعال شد تا duplicate نشود
      autoplay={{
        delay: 1500, // زمان بین اسلایدها
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      modules={[Autoplay]}
    >
      {certifications.map((cert, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white/90 dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100/80 dark:border-gray-800">
            <img
              src={cert.logo}
              alt={cert.name}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>



    </div>
  );
};

export default Home;
