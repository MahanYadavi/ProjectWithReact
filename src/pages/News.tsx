import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { label: t('newsPage.categories.all'), active: true },
    { label: t('newsPage.categories.projects'), active: false },
    { label: t('newsPage.categories.energy'), active: false },
    { label: t('newsPage.categories.sustainability'), active: false },
    { label: t('newsPage.categories.technology'), active: false },
  ];

  const highlights = [
    { label: t('newsPage.highlights.total'), value: '48+' },
    { label: t('newsPage.highlights.awards'), value: '12' },
    { label: t('newsPage.highlights.partners'), value: '30+' },
  ];

  const topStories = [
    {
      key: 'story1',
      image: '/images/Banners/temp12.jpeg',
      category: t('newsPage.items.story1.category'),
      date: t('newsPage.items.story1.date'),
      readTime: t('newsPage.items.story1.readTime'),
      title: t('newsPage.items.story1.title'),
      excerpt: t('newsPage.items.story1.excerpt'),
    },
    {
      key: 'story2',
      image: '/images/index/NatanzZobAhan.jpg',
      category: t('newsPage.items.story2.category'),
      date: t('newsPage.items.story2.date'),
      readTime: t('newsPage.items.story2.readTime'),
      title: t('newsPage.items.story2.title'),
      excerpt: t('newsPage.items.story2.excerpt'),
    },
  ];

  const latestNews = [
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
    {
      key: 'news4',
      image: '/images/index/Arash.jpg',
      category: t('newsPage.items.news4.category'),
      date: t('newsPage.items.news4.date'),
      readTime: t('newsPage.items.news4.readTime'),
      title: t('newsPage.items.news4.title'),
      excerpt: t('newsPage.items.news4.excerpt'),
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-navy-950 text-navy-900 dark:text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/Banners/aboutBanners.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <Sparkles className="h-4 w-4 text-gold-300" />
              {t('newsPage.badge')}
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {t('newsPage.title')}
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              {t('newsPage.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <span
                  key={`${category.label}-${index}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    category.active
                      ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {category.label}
                </span>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur"
                >
                  <div className="text-2xl font-bold text-white">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group rounded-3xl overflow-hidden shadow-xl border border-gray-100/70 dark:border-navy-800 bg-white dark:bg-navy-900"
            >
              <div className="relative h-72 md:h-96 overflow-hidden">
                <img
                  src="/images/index/temp1.png"
                  alt={t('newsPage.featured.title')}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                    {t('newsPage.featured.category')}
                  </span>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
                    {t('newsPage.featured.title')}
                  </h2>
                  <p className="mt-3 text-white/80">{t('newsPage.featured.excerpt')}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-5">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gold-500" />
                    {t('newsPage.featured.date')}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gold-500" />
                    {t('newsPage.featured.readTime')}
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 dark:text-gold-400 hover:text-gold-500"
                >
                  {t('newsPage.readMore')}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>

            <div className="space-y-6">
              {topStories.map((story) => (
                <motion.article
                  key={story.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-gray-100/70 dark:border-navy-800 bg-white dark:bg-navy-900 p-5 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-4">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-24 w-24 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="text-xs font-semibold uppercase tracking-wide text-gold-600 dark:text-gold-400">
                        {story.category}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-navy-900 dark:text-white">
                        {story.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="mt-3 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {story.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {story.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between flex-wrap gap-4 mb-10"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white">
                {t('newsPage.latestTitle')}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('newsPage.latestSubtitle')}
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 text-white px-5 py-2 text-sm font-semibold hover:bg-navy-800 dark:bg-white dark:text-navy-900"
            >
              {t('newsPage.viewProjects')}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news) => (
              <motion.article
                key={news.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-100/70 dark:border-navy-800 bg-white dark:bg-navy-900 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900">
                    {news.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                    {news.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {news.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {news.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-black p-10 md:p-14 text-white shadow-2xl">
            <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold-500/30 blur-3xl" />
            <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold">
                {t('newsPage.cta.title')}
              </h3>
              <p className="mt-4 text-white/80 max-w-2xl">
                {t('newsPage.cta.subtitle')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gold-500/40 hover:bg-gold-600"
                >
                  {t('newsPage.cta.primary')}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {t('newsPage.cta.secondary')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
