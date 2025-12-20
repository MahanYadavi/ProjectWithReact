import React from 'react';
import { Hexagon } from '../components/Hexagon.tsx';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 pb-20 font-vazir text-navy-900 dark:text-gray-100">
      
      {/* Header */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative bg-gray-900">
        <img
          src="/images/Banners/Commerce.jpg"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop';
          }}
          alt={t('header.imageAlt')}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      <main
        className={`container mx-auto px-4 max-w-6xl mt-8 space-y-12 ${
          isRTL ? 'text-right' : 'text-left'
        }`}
      >
        {/* Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold 
            text-navy-900 dark:text-white 
            border-b-4 border-gold-500/40 pb-3 inline-block">
            {t('commerce.main.title')}
          </h1>
        </div>

        {/* Main Content */}
        <section className="
          bg-gold-400/90 dark:bg-gold-500/90
          border border-gold-600
          p-6 md:p-8
          shadow-xl
          relative overflow-hidden
        ">
          <div className="absolute inset-0 bg-white/5 pointer-events-none" />

          <div className="relative z-10 space-y-4 leading-relaxed text-sm md:text-base text-navy-950">
            <p>{t('commerce.main.engineering')}</p>
            <p>{t('commerce.main.supplyIndustrial')}</p>
            <p>{t('commerce.main.bulkMaterial')}</p>
            <p>{t('commerce.main.qualityControl')}</p>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Hexagons */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
              <div className="absolute top-0 right-10 md:right-12">
                <Hexagon text={t('commerce.hexagons.electricity')} color="yellow" />
              </div>

              <div className="absolute top-0 left-10 md:left-12">
                <Hexagon text={t('commerce.hexagons.instrumentation')} color="brown" />
              </div>

              <div className="absolute top-[6.5rem] left-1/2 -translate-x-1/2 z-10">
                <Hexagon text={t('commerce.hexagons.specialAlloys')} color="brown" />
              </div>

              <div className="absolute top-[6.5rem] -left-2 md:-left-4">
                <Hexagon text={t('commerce.hexagons.mechanicsPiping')} color="yellow" />
              </div>

              <div className="absolute top-[13rem] right-10 md:right-12">
                <Hexagon text={t('commerce.hexagons.qualityAssurance')} color="yellow" />
              </div>

              <div className="absolute top-[13rem] left-10 md:left-12">
                <Hexagon
                  text={t('commerce.hexagons.warranty')}
                  color="grey"
                  className="text-xs"
                />
              </div>
            </div>
          </div>

          {/* Secondary Content */}
          <div className="w-full lg:w-1/2">
            <div className="
              bg-gold-400/90 dark:bg-gold-500/90
              border border-gold-600
              p-6 md:p-8
              shadow-xl
              min-h-[300px]
              flex flex-col justify-center
            ">
              <h2 className="font-bold mb-4 text-navy-950">
                {t('commerce.secondaryContent.title')}
              </h2>

              <ul className={`list-disc ${isRTL ? 'pr-5' : 'pl-5'} space-y-2 text-navy-950`}>
                {t('commerce.secondaryContent.items', { returnObjects: true }).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Services;
