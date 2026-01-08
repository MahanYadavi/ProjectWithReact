const ProjectRecords = () => {
  const rows = [
    {
      right: {
        title: 'تأمین لوله‌های پلی‌وینیل کلراید (U-PVC)',
        supplier: 'پتروشیمی شازند',
        logo: 'PS',
      },
      left: {
        title: 'تأمین ملزومات ابزار دقیق و کابل‌های فرمان',
        supplier: 'هلدینگ مپنا',
        logo: 'MAP',
      },
    },
    {
      right: {
        title: 'تأمین منبع تغذیه سوئیچینگ تک فاز',
        supplier: 'شرکت هیرو',
        logo: 'H',
      },
      left: {
        title: 'تأمین تجهیزات اتاق کنترل و سیستم‌های مانیتورینگ',
        supplier: 'شرکت پایش صنعت',
        logo: 'PSI',
      },
    },
    {
      right: {
        title: 'تأمین نوار برنجی نیمه‌سخت',
        supplier: 'شرکت ذوب فلزات',
        logo: 'ZF',
      },
      left: {
        title: 'تأمین سرووموتور و گیربکس کنترل تکنیک',
        supplier: 'شرکت مبدل‌کاران',
        logo: 'MK',
      },
    },
    {
      right: {
        title: 'تأمین کارت زیمنس مدل 6ES7-153-2BA82',
        supplier: 'زیمنس آلمان',
        logo: 'S',
      },
      left: {
        title: 'تأمین باتری نیم‌سل نیکل-کادمیم',
        supplier: 'شرکت مپنا',
        logo: 'MAP',
      },
    },
    {
      right: {
        title: 'تأمین میله تونل (TUNNEL ROD)',
        supplier: 'فولاد مبارکه',
        logo: 'FM',
      },
      left: {
        title: 'تأمین کابل ابزار دقیق و کنترل',
        supplier: 'کابل یزد',
        logo: 'KY',
      },
    },
    {
      right: {
        title: 'تأمین پمپ سانتریفیوژ چندمرحله‌ای عمودی',
        supplier: 'گراندفوس',
        logo: 'GR',
      },
      left: {
        title: 'تأمین زنجیر نقاله صنعتی (RENOLD)',
        supplier: 'شرکت رنولد',
        logo: 'R',
      },
    },
    {
      right: {
        title: 'تأمین ورق PVC سخت طبق ASTM D1784',
        supplier: 'پتروشیمی امیرکبیر',
        logo: 'AK',
      },
      left: {
        title: 'تأمین قطعات ایمنی خطوط تولید گاز',
        supplier: 'شرکت سامان انرژی',
        logo: 'SE',
      },
    },
    {
      right: {
        title: 'تأمین منبع تغذیه موکسا 75W',
        supplier: 'موکسا تایوان',
        logo: 'MX',
      },
      left: {
        title: 'تأمین پوزیشنر روتار 1300KW FA',
        supplier: 'شرکت اریا انرژی',
        logo: 'AE',
      },
    },
    {
      right: {
        title: 'تأمین دستگاه جوش و قطعات یدکی',
        supplier: 'لینکلن',
        logo: 'L',
      },
      left: {
        title: 'تأمین تجهیزات ابزار دقیق',
        supplier: 'شرکت دانش تجهیز',
        logo: 'DT',
      },
    },
    {
      right: {
        title: 'تأمین پتانسیومتر روتاری موقعیت‌یاب',
        supplier: 'شرکت پارس صنعت',
        logo: 'PS',
      },
      left: {
        title: 'تأمین ولوهای کنترل و شیرآلات صنعتی',
        supplier: 'شرکت صنعت آریا',
        logo: 'SA',
      },
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#f8f4ef] text-navy-900 py-12 px-4"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-[#b05d16] mb-2">
            سوابق تأمین و پروژه‌ها
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
            Project Records
          </h1>
        </div>

        <div className="rounded-3xl border border-[#d8c7b2] bg-white shadow-[0_20px_60px_-40px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="grid grid-cols-[1fr_auto_1fr] text-xs md:text-sm font-semibold bg-[#f0e4d6] text-[#6c4b2f]">
            <div className="grid grid-cols-[1.2fr_0.6fr_0.4fr] gap-2 p-3 border-r border-[#d8c7b2]">
              <span>شرح تأمین و سفارش پروژه</span>
              <span className="text-center">کارفرما</span>
              <span className="text-center">نشان</span>
            </div>
            <div className="w-3 bg-[#b05d16]" />
            <div className="grid grid-cols-[1.2fr_0.6fr_0.4fr] gap-2 p-3">
              <span>شرح تأمین و سفارش پروژه</span>
              <span className="text-center">کارفرما</span>
              <span className="text-center">نشان</span>
            </div>
          </div>

          <div className="divide-y divide-[#eadccd]">
            {rows.map((row) => (
              <div
                key={`${row.right.title}-${row.left.title}`}
                className="grid grid-cols-[1fr_auto_1fr] text-sm text-[#3d2a1c] bg-white"
              >
                <div className="grid grid-cols-[1.2fr_0.6fr_0.4fr] gap-3 p-4 border-r border-[#eadccd]">
                  <p className="leading-6">{row.left.title}</p>
                  <p className="text-center text-xs md:text-sm text-[#6c4b2f]">
                    {row.left.supplier}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full border border-[#d8c7b2] bg-[#f8f1e8] text-xs font-bold text-[#6c4b2f] flex items-center justify-center">
                      {row.left.logo}
                    </div>
                  </div>
                </div>
                <div className="w-3 bg-[#b05d16]" />
                <div className="grid grid-cols-[1.2fr_0.6fr_0.4fr] gap-3 p-4">
                  <p className="leading-6">{row.right.title}</p>
                  <p className="text-center text-xs md:text-sm text-[#6c4b2f]">
                    {row.right.supplier}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full border border-[#d8c7b2] bg-[#f8f1e8] text-xs font-bold text-[#6c4b2f] flex items-center justify-center">
                      {row.right.logo}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 mt-10 text-[#6c4b2f]">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl border border-[#d8c7b2] bg-white flex items-center justify-center text-xs font-bold">
              QR
            </div>
            <div className="text-sm">
              <p className="font-semibold">اطلاعات بیشتر</p>
              <p className="text-xs text-[#8c6a4a]">کد رهگیری و گواهی‌ها</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full border border-[#d8c7b2] bg-white flex items-center justify-center text-[10px] font-bold">
              ISO
            </div>
            <div className="h-12 w-12 rounded-full border border-[#d8c7b2] bg-white flex items-center justify-center text-[10px] font-bold">
              QA
            </div>
            <div className="h-12 w-12 rounded-full border border-[#d8c7b2] bg-white flex items-center justify-center text-[10px] font-bold">
              CE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRecords;
