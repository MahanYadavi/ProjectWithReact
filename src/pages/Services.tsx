import React from 'react';
import { Hexagon } from '../components/Hexagon.tsx';
import { useTranslation } from 'react-i18next';

function Services() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white pb-20 font-vazir">
      {/* Header Image Section */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative bg-gray-900">
        <img
          src="/header-bg.jpg"
          onError={(e) => {
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop';
          }}
          alt={t('header.imageAlt')}
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <main
        className={`container mx-auto px-4 max-w-6xl mt-8 space-y-12 text-${
          i18n.dir() === 'rtl' ? 'right' : 'left'
        }`}
      >
        {/* Page Title */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 border-b-4 border-blue-900/20 pb-3 inline-block">
            {t('commerce.main.title')}
          </h1>
        </div>

        {/* Main Content Box */}
        <section className="bg-[#d4af37] border-2 border-[#b8860b] p-6 md:p-8 rounded-sm shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
          <div className="relative z-10 font-medium space-y-4 leading-relaxed text-sm md:text-base">
            <p>{t('commerce.main.engineering')}</p>
            <p>{t('commerce.main.supplyIndustrial')}</p>
            <p>{t('commerce.main.bulkMaterial')}</p>
            <p>{t('commerce.main.qualityControl')}</p>
          </div>
        </section>

        {/* Bottom Section: Hexagons + Secondary Text */}
        <section className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
          {/* Left Side: Hexagonal Grid */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-4 lg:pt-8">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
              <div className="absolute top-0 right-10 md:right-12 hover:z-20 transition-all duration-300">
                <Hexagon text={t('commerce.hexagons.electricity')} color="yellow" />
              </div>
              <div className="absolute top-0 left-10 md:left-12 hover:z-20 transition-all duration-300">
                <Hexagon text={t('commerce.hexagons.instrumentation')} color="brown" />
              </div>
              <div className="absolute top-[6.5rem] left-1/2 -translate-x-1/2 z-10 hover:z-20 transition-all duration-300">
                <Hexagon text={t('commerce.hexagons.specialAlloys')} color="brown" />
              </div>
              <div className="absolute top-[6.5rem] -left-2 md:-left-4 hover:z-20 transition-all duration-300">
                <Hexagon text={t('commerce.hexagons.mechanicsPiping')} color="yellow" />
              </div>
              <div className="absolute top-[13rem] right-10 md:right-12 hover:z-20 transition-all duration-300">
                <Hexagon text={t('commerce.hexagons.qualityAssurance')} color="yellow" />
              </div>
              <div className="absolute top-[13rem] left-10 md:left-12 hover:z-20 transition-all duration-300">
                <Hexagon text={t('commerce.hexagons.warranty')} color="grey" className="text-xs" />
              </div>
            </div>
          </div>

          {/* Right Side: Secondary Content Box */}
          <div className="w-full lg:w-1/2 h-full">
            <div className="bg-[#d4af37] border-2 border-[#b8860b] p-6 md:p-8 rounded-sm shadow-lg h-full flex flex-col justify-center min-h-[300px]">
              <div className="font-medium space-y-6 leading-relaxed text-sm md:text-base">
                <h2 className="font-bold">{t('commerce.secondaryContent.title')}</h2>
                <ul className="list-disc pl-5">
                  {t('commerce.secondaryContent.items', { returnObjects: true }).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Services;
