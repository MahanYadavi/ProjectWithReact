import { useTranslation } from 'react-i18next';

const BoardOfDirectors = () => {
  const { t } = useTranslation();

  const members = [
    {
      name: t('aboutBoard.members.ceo.name'),
      role: t('aboutBoard.members.ceo.role'),
      bio: t('aboutBoard.members.ceo.bio'),
    },
    {
      name: t('aboutBoard.members.operations.name'),
      role: t('aboutBoard.members.operations.role'),
      bio: t('aboutBoard.members.operations.bio'),
    },
    {
      name: t('aboutBoard.members.engineering.name'),
      role: t('aboutBoard.members.engineering.role'),
      bio: t('aboutBoard.members.engineering.bio'),
    },
    {
      name: t('aboutBoard.members.finance.name'),
      role: t('aboutBoard.members.finance.role'),
      bio: t('aboutBoard.members.finance.bio'),
    },
  ];

  const governanceItems = [
    t('aboutBoard.governance.items.item1'),
    t('aboutBoard.governance.items.item2'),
    t('aboutBoard.governance.items.item3'),
    t('aboutBoard.governance.items.item4'),
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 text-navy-900 dark:text-white">
      <section
        className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/Banners/aboutBanners.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="relative z-10 max-w-3xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-300 mb-4">
            {t('aboutBoard.badge')}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('aboutBoard.title')}
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {t('aboutBoard.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900 dark:text-white">
              {t('aboutBoard.leadership.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('aboutBoard.leadership.description')}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-navy-900 border border-gray-100 dark:border-navy-800">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
                  {t('aboutBoard.metrics.item1.value')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('aboutBoard.metrics.item1.label')}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-navy-900 border border-gray-100 dark:border-navy-800">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
                  {t('aboutBoard.metrics.item2.value')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('aboutBoard.metrics.item2.label')}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-navy-900 border border-gray-100 dark:border-navy-800">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
                  {t('aboutBoard.metrics.item3.value')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('aboutBoard.metrics.item3.label')}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 dark:bg-navy-900 border border-gray-100 dark:border-navy-800">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2">
                  {t('aboutBoard.metrics.item4.value')}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t('aboutBoard.metrics.item4.label')}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {t('aboutBoard.governance.title')}
            </h3>
            <ul className="space-y-4 text-sm text-gray-200">
              {governanceItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gold-400" />
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
            {t('aboutBoard.members.title')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {members.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white dark:bg-navy-900 p-6 shadow-lg border border-gray-100 dark:border-navy-800"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400 mb-2">
                  {member.role}
                </p>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardOfDirectors;
