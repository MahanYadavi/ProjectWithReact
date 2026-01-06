import { useTranslation } from 'react-i18next';

const ProjectRecords = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      title: t('aboutRecords.highlights.item1.title'),
      description: t('aboutRecords.highlights.item1.description'),
    },
    {
      title: t('aboutRecords.highlights.item2.title'),
      description: t('aboutRecords.highlights.item2.description'),
    },
    {
      title: t('aboutRecords.highlights.item3.title'),
      description: t('aboutRecords.highlights.item3.description'),
    },
  ];

  const supplyItems = [
    {
      title: t('aboutRecords.supplies.item1.title'),
      description: t('aboutRecords.supplies.item1.description'),
    },
    {
      title: t('aboutRecords.supplies.item2.title'),
      description: t('aboutRecords.supplies.item2.description'),
    },
    {
      title: t('aboutRecords.supplies.item3.title'),
      description: t('aboutRecords.supplies.item3.description'),
    },
    {
      title: t('aboutRecords.supplies.item4.title'),
      description: t('aboutRecords.supplies.item4.description'),
    },
  ];

  const timeline = [
    {
      year: t('aboutRecords.timeline.item1.year'),
      description: t('aboutRecords.timeline.item1.description'),
    },
    {
      year: t('aboutRecords.timeline.item2.year'),
      description: t('aboutRecords.timeline.item2.description'),
    },
    {
      year: t('aboutRecords.timeline.item3.year'),
      description: t('aboutRecords.timeline.item3.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-navy-900 dark:text-white">
      <section
               className="relative h-48 md:h-64 lg:h-80 text-white overflow-hidden flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/Banners/aboutBanners.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-300 mb-4">
            {t('aboutRecords.badge')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('aboutRecords.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {t('aboutRecords.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
                {t('aboutRecords.intro.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('aboutRecords.intro.description')}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('aboutRecords.metrics.item1.label')}
                  </p>
                  <p className="text-xl font-semibold text-navy-900 dark:text-white">
                    {t('aboutRecords.metrics.item1.value')}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('aboutRecords.metrics.item2.label')}
                  </p>
                  <p className="text-xl font-semibold text-navy-900 dark:text-white">
                    {t('aboutRecords.metrics.item2.value')}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('aboutRecords.metrics.item3.label')}
                  </p>
                  <p className="text-xl font-semibold text-navy-900 dark:text-white">
                    {t('aboutRecords.metrics.item3.value')}
                  </p>
                </div>
                <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t('aboutRecords.metrics.item4.label')}
                  </p>
                  <p className="text-xl font-semibold text-navy-900 dark:text-white">
                    {t('aboutRecords.metrics.item4.value')}
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                {t('aboutRecords.highlights.title')}
              </h3>
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/10 p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-200 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 dark:bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-10">
            {t('aboutRecords.supplies.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {supplyItems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white dark:bg-navy-900 p-6 shadow-lg border border-gray-100 dark:border-navy-800"
              >
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-10">
            {t('aboutRecords.timeline.title')}
          </h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="flex flex-col md:flex-row gap-4 md:items-center rounded-2xl bg-gray-50 dark:bg-navy-900 p-6 border border-gray-100 dark:border-navy-800"
              >
                <div className="text-2xl font-bold text-gold-600 dark:text-gold-400">
                  {item.year}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectRecords;
