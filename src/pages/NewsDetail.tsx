import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { getNewsItems } from '../data/newsData';

const NewsDetail: React.FC = () => {
  const { t } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const { all } = getNewsItems(t);
  const article = all.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-white dark:bg-navy-950 text-navy-900 dark:text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{t('newsPage.detail.notFound')}</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{t('newsPage.detail.notFoundSubtitle')}</p>
          <Link
            to="/news"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white hover:bg-gold-600"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('newsPage.detail.backToNews')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-navy-950 text-navy-900 dark:text-white">
      <section className="relative">
        <div className="absolute inset-0 h-96">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/50 to-navy-950/90" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('newsPage.detail.backToNews')}
          </Link>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 md:p-10 backdrop-blur">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90">
              {article.category}
            </span>
            <h1 className="mt-5 text-3xl md:text-4xl font-bold text-white">
              {article.title}
            </h1>
            <p className="mt-4 text-white/80">{article.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-gold-300" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold-300" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white dark:bg-navy-900 shadow-2xl border border-gray-100/70 dark:border-navy-800 p-8 md:p-12">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {article.body.map((paragraph, index) => (
                <p key={`${article.key}-body-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gold-500/30 hover:bg-gold-600"
              >
                {t('newsPage.detail.ctaPrimary')}
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-navy-900 hover:border-gold-300 hover:text-gold-600 dark:border-navy-700 dark:text-white"
              >
                {t('newsPage.detail.ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetail;
