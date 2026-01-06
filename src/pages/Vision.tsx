import { useTranslation } from 'react-i18next';

const Vision = () => {
  const { t } = useTranslation();

  const pillars = [
    {
      title: t('aboutVision.pillars.item1.title'),
      description: t('aboutVision.pillars.item1.description'),
    },
    {
      title: t('aboutVision.pillars.item2.title'),
      description: t('aboutVision.pillars.item2.description'),
    },
    {
      title: t('aboutVision.pillars.item3.title'),
      description: t('aboutVision.pillars.item3.description'),
    },
  ];

  const roadmap = [
    t('aboutVision.roadmap.item1'),
    t('aboutVision.roadmap.item2'),
    t('aboutVision.roadmap.item3'),
    t('aboutVision.roadmap.item4'),
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/90" />
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-300 mb-4">
            {t('aboutVision.badge')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('aboutVision.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {t('aboutVision.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
              {t('aboutVision.overview.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('aboutVision.overview.description')}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('aboutVision.metrics.item1.label')}
                </p>
                <p className="text-xl font-semibold text-navy-900 dark:text-white">
                  {t('aboutVision.metrics.item1.value')}
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('aboutVision.metrics.item2.label')}
                </p>
                <p className="text-xl font-semibold text-navy-900 dark:text-white">
                  {t('aboutVision.metrics.item2.value')}
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('aboutVision.metrics.item3.label')}
                </p>
                <p className="text-xl font-semibold text-navy-900 dark:text-white">
                  {t('aboutVision.metrics.item3.value')}
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 dark:bg-navy-900 p-5 border border-gray-100 dark:border-navy-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t('aboutVision.metrics.item4.label')}
                </p>
                <p className="text-xl font-semibold text-navy-900 dark:text-white">
                  {t('aboutVision.metrics.item4.value')}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-gold-500/20 via-white to-white dark:from-gold-400/10 dark:via-navy-900 dark:to-navy-950 p-8 border border-gold-500/20 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-4">
              {t('aboutVision.roadmap.title')}
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
              {roadmap.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 dark:bg-navy-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-10">
            {t('aboutVision.pillars.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white dark:bg-navy-900 p-6 shadow-lg border border-gray-100 dark:border-navy-800"
              >
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
