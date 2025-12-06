import React from 'react';
import {Hexagon} from '../components/Hexagon.tsx';

function App() {
  // راهنمای تغییر تصویر:
  // 1. تصویر خود را با نام 'header-bg.jpg' در پوشه 'public' قرار دهید.
  // 2. اگر تصویر وجود داشته باشد نمایش داده می‌شود، در غیر این صورت از تصویر آنلاین استفاده می‌شود.
  const headerImage = "/header-bg.jpg"; 
  const fallbackImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-white pb-20 font-vazir">
      {/* Header Image Section */}
      <div className="w-full h-48 md:h-64 lg:h-80 overflow-hidden relative bg-gray-900">
        <img 
          src={headerImage}
          onError={(e) => {
            // اگر تصویر لوکال پیدا نشد، تصویر آنلاین را بارگذاری کن
            e.currentTarget.src = fallbackImage;
          }}
          alt="Industrial Plant View" 
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      <main className="container mx-auto px-4 max-w-6xl mt-8 space-y-12">
        
        {/* Page Title */}
        <div className="text-right">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 border-b-4 border-blue-900/20 pb-3 inline-block">
            مهندسی خرید و تامین کالاهای صنعتی
          </h1>
        </div>

        {/* Main Content Box */}
        <section className="bg-[#d4af37] border-2 border-[#b8860b] p-6 md:p-8 rounded-sm shadow-lg relative overflow-hidden">
           {/* بافت پس‌زمینه تزئینی */}
           <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
           
           <div className="relative z-10 text-blue-950 font-medium space-y-4 leading-relaxed text-justify md:text-right text-sm md:text-base">
             <p>
               <span className="font-extrabold text-black">مهندسی خرید:</span> تطابق درخواست و مدارک تجهیزات و لیست تامین کننده با محصولات تولید کنندگان و ارائه اختلاف (Deviation) و پیشنهاد جایگزین (Replacement) و تهیه دیتا شیت و جزئیات فنی (Technical Data Sheet)
             </p>
             <p>
               <span className="font-extrabold text-black">تامین تجهیزات صنایع</span> و کارخانجات پتروشیمی، فولاد، نورد، سیمان و ... و صنایع پایین دستی و تهیه مواد اولیه از قبیل فروسیلیس (FeSi) و فرومنگنز (FeMn) و دولومیت و آهک (Lime) و کنستانتره آهن و گندله
             </p>
             <p>
               <span className="font-extrabold text-black">تامین اجناس عمومی Bulk Material</span> مورد نیاز صنایع و پروژه های عمرانی و صنعتی.
             </p>
             <p>
               <span className="font-extrabold text-black">کنترل کیفیت،</span> بازرسی و هماهنگی های بازرسی حین ساخت، بازرسی در مبدا، تهیه و کنترل تعداد و بارگیری و هماهنگی با شرکت های بازرسی شخص ثالث.
             </p>
           </div>
        </section>

        {/* Bottom Section: Hexagons + Secondary Text */}
        <section className="flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
          
          {/* Left Side: Hexagonal Grid */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start pt-4 lg:pt-8">
            {/* 
                برای اضافه کردن شش‌ضلعی جدید، کافیست یک تگ <Hexagon /> جدید اضافه کنید
                و موقعیت آن را با کلاس‌های absolute تنظیم کنید.
            */}
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px]">
              
              {/* Top Right - Yellow */}
              <div className="absolute top-0 right-10 md:right-12 hover:z-20 transition-all duration-300">
                <Hexagon text="برق" color="yellow" />
              </div>
              
              {/* Top Left - Brown */}
              <div className="absolute top-0 left-10 md:left-12 hover:z-20 transition-all duration-300">
                <Hexagon text="ابزار دقیق" color="brown" />
              </div>

              {/* Middle Center - Brown */}
              <div className="absolute top-[6.5rem] left-1/2 -translate-x-1/2 z-10 hover:z-20 transition-all duration-300">
                <Hexagon text="آلیاژهای خاص فولادی" color="brown" />
              </div>

              {/* Middle Left - Yellow */}
              <div className="absolute top-[6.5rem] -left-2 md:-left-4 hover:z-20 transition-all duration-300">
                 <Hexagon text="مکانیک و پایپینگ" color="yellow" />
              </div>

              {/* Bottom Right - Yellow */}
              <div className="absolute top-[13rem] right-10 md:right-12 hover:z-20 transition-all duration-300">
                <Hexagon text="تضمین کیفیت" color="yellow" />
              </div>

              {/* Bottom Left - Grey */}
              <div className="absolute top-[13rem] left-10 md:left-12 hover:z-20 transition-all duration-300">
                <Hexagon text="گارانتی ، نصب و راه اندازی" color="grey" className="text-xs" />
              </div>

            </div>
          </div>

          {/* Right Side: Secondary Content Box */}
          <div className="w-full lg:w-1/2 h-full">
             <div className="bg-[#d4af37] border-2 border-[#b8860b] p-6 md:p-8 rounded-sm shadow-lg h-full flex flex-col justify-center min-h-[300px]">
                <div className="text-blue-950 font-medium space-y-6 leading-relaxed text-justify md:text-right text-sm md:text-base">
                  <p>
                    تامین کالاهای بین المللی و ارائه گواهینامه ها و تاییدیه های تولید کننده و مدارک گمرکی.
                  </p>
                  <p>
                    تامین محصولات و اقلام داخلی مورد نیاز تولید کنندگان بر اساس تقاضاها و سفارشات
                  </p>
                </div>
             </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default App;
