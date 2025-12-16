import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        projects: 'Projects',
        services: 'Commerce',
        contact: 'Contact Us',
        cta: 'Request Cooperation',
        selectLanguage: 'Select Language'
      },
      hero: {
        title: 'Expert Implementation of Industrial-Scale Electrical, Gas & Pelletizing Projects',
        subtitle: 'From design and engineering to execution and commissioning, we deliver excellence with an expert team and global standards.',
        cta: 'View Projects',
        learnMore: 'Get Technical Consultation',
      },
      intro: {
        title: 'Over 15 Years of Industrial Excellence',
        description: 'With over 15 years of experience in executing EPC projects, industrial power systems, gas transmission lines, and pelletizing plants, our company has a proven track record of successful collaborations with major industrial and mining complexes.',
        stat1: 'Years of Experience',
        stat2: 'Successful Projects',
        stat3: 'Expert Engineers'
      },
      services: {
        title: 'Our Core Services',
        electrical: 'Industrial & Building Electrical Projects',
        electricalDesc: 'Execution of high and low voltage electrical systems for industrial and commercial structures.',
        substations: 'Substations & MV/LV Panels',
        substationsDesc: 'Design, engineering, and implementation of electrical substations and control panels.',
        gas: 'Gas Transmission Lines',
        gasDesc: 'Installation, testing, and commissioning of industrial gas pipelines and stations.',
        automation: 'Automation & Instrumentation',
        automationDesc: 'Implementing advanced PLC-based automation and precision instrumentation systems.',
        pelletizing: 'Pelletizing Plant Projects',
        pelletizingDesc: 'Turnkey solutions for pelletizing plants, from process design to mechanical and electrical execution.',
        epc: 'Industrial EPC Projects',
        epcDesc: 'Comprehensive EPC (Engineering, Procurement, Construction) services for the mining and steel industries.',
      },
      clients: {
        title: 'Our Valued Clients & Partners',
      },
      projects: {
        title: 'Featured Projects',
        viewAll: 'View All Projects',
        category: 'Category',
        location: 'Location',
        year: 'Year',
      },
      whyUs: {
        title: 'Why Partner with PowerFlow?',
        item1: 'High execution capacity for heavy-duty projects',
        item2: 'Compliance with global standards (IEC, NEMA, NFPA)',
        item3: 'Dedicated team of specialized engineers',
        item4: 'Commitment to on-time project delivery',
        item5: 'Proven experience in harsh industrial environments',
        item6: 'Robust equipment and material supply chain',
      },
      workflow: {
        title: 'Our Project Workflow',
        step1: 'Needs Assessment & Site Visit',
        step1Desc: 'We begin by understanding your exact requirements and conducting a thorough site analysis.',
        step2: 'Engineering Design & Proposal',
        step2Desc: 'Our engineers create a detailed technical design and a comprehensive project proposal.',
        step3: 'Full-Scale Execution',
        step3Desc: 'We manage all phases of procurement, construction, and installation with precision.',
        step4: 'Testing & Commissioning',
        step4Desc: 'The project concludes with rigorous testing, commissioning, and final handover.',
      },
      certifications: {
        title: 'Certifications & Standards',
        description: 'We adhere to the highest industry standards to ensure quality, safety, and reliability in every project.'
      },
      about: {
        title: 'About Us',
        subtitle: 'Excellence in Electrical & Gas Contracting',
        description: 'With over 15 years of experience, we have established ourselves as a leading electrical and gas contracting company. Our team of certified professionals delivers innovative solutions for residential, commercial, and industrial projects.',
        story: {
          title: 'Our Story',
          p2: 'From residential projects to large-scale industrial installations, we bring expertise, dedication, and innovation to every challenge. Our commitment to safety, quality, and customer satisfaction has made us a trusted partner in the industry.'
        },
        coreValues: {
          title: 'Our Core Values',
          excellence: 'Excellence',
          excellenceDesc: 'Committed to delivering the highest quality in every project',
          teamwork: 'Teamwork',
          teamworkDesc: 'Collaborative approach with experienced professionals',
          innovation: 'Innovation',
          innovationDesc: 'Utilizing cutting-edge technology and methods',
          integrity: 'Integrity',
          integrityDesc: 'Honest and transparent in all our dealings',
        },
        vision: 'Our Vision',
        visionText: 'To be the most trusted and innovative electrical and gas contracting company in the region.',
        mission: 'Our Mission',
        missionText: 'Delivering exceptional quality, safety, and reliability in every project we undertake.',
        values: 'Our Values',
        valuesText: 'Integrity, Innovation, Safety, and Customer Satisfaction',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our team',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Your Message',
        send: 'Send Message',
        info: 'Contact Information',
        address: 'Address',
        addressText: '123 Industrial Avenue, Business District',
        formTitle: 'Send us a Message',
        businessHours: {
          title: 'Business Hours',
          monFri: 'Monday - Friday: 8:00 AM - 6:00 PM',
          saturday: 'Saturday: 9:00 AM - 2:00 PM',
          sunday: 'Sunday: Closed',
        }
      },
      projectsPage: {
        title: 'Our Projects',
        subtitle: 'Explore our portfolio of successful electrical, gas, and industrial projects',
    categories: {
  all: 'All',
  industrial: 'Industrial Power',
  transmission: 'Transmission & Distribution',
  panels: 'Panels & Equipment',
  infrastructure: 'Architecture & Civil'
}
      },
      projectsData: {
        p1: { title: '400kV Substation Development in Isfahan', location: 'Isfahan, Iran', description: 'Design, engineering, and construction of a new 400/230kV GIS substation to enhance grid stability.' },
        p2: { title: '230kV Transmission Line - Tehran to Qom', location: 'Tehran, Iran', description: 'Construction of a 150km double-circuit transmission line to improve power flow between major cities.' },
        p3: { title: 'Chadormalu Pelletizing Plant Automation', location: 'Yazd, Iran', description: 'Complete automation and control system upgrade for the 5 MTPA pelletizing plant.' },
        p4: { title: 'Mobarakeh Steel Mill EPC Project', location: 'Isfahan, Iran', description: 'EPC contract for the new continuous casting machine electrical and automation systems.' },
        p5: { title: 'NEOM City Smart Grid Consulting', location: 'NEOM, KSA', description: 'Strategic consulting on the design of a resilient and futuristic smart grid.' },
        p6: { title: '63/20kV Mobile Substation Delivery', location: 'Ahvaz, Iran', description: 'Fast-track deployment of a mobile substation for emergency power restoration and grid support.' },
        p7: { title: '400kV OHTL Maintenance Project', location: 'Kerman, Iran', description: 'Comprehensive overhaul and maintenance of critical overhead transmission line assets.' },
        p8: { title: 'Golgohar Pelletizing Plant Expansion', location: 'Kerman, Iran', description: 'Electrical and mechanical works for the expansion of the pelletizing production line.' },
        p9: { title: 'Tabriz Petrochemical Automation Upgrade', location: 'Tabriz, Iran', description: 'DCS and ESD system modernization for the olefin unit.' },
        p10: { title: 'Substation Automation System Upgrade', location: 'Mashhad, Iran', description: 'Retrofitting of a 230kV substation with modern SCADA and protection systems.' },
        p11: { title: 'Sarcheshmeh Copper Complex EPC', location: 'Kerman, Iran', description: 'EPC for power distribution and control systems of the new smelter project.' },
        placeholder: { title: 'Project Title {{id}}', location: 'Regional', description: 'This is a sample description for project number {{id}}, detailing the scope and impact of our work in the region.' }
      },
      servicesPage: {
        title: 'Our Services',
        subtitle: 'Providing comprehensive, end-to-end solutions for complex industrial challenges.'
      },
      footer: {
        description: 'Professional electrical, gas, and industrial contracting services with excellence and reliability.',
        quickLinks: 'Quick Links',
        services: 'Services',
        rights: 'All rights reserved.',
      },
        commerce: {
      main: {
        title: "Our Core Services",
        engineering: "Engineering procurement: Matching requests and equipment documents with supplier lists, providing deviation reports and replacements, and preparing technical datasheets.",
        supplyIndustrial: "Supply of equipment for petrochemical, steel, rolling, cement and downstream industries and raw materials such as FeSi, FeMn, dolomite, lime, iron concentrate, and pellets.",
        bulkMaterial: "Supply of general bulk material needed for industrial and civil projects.",
        qualityControl: "Quality control, inspections during fabrication, inspection at source, quantity control, loading, and coordination with third-party inspection companies."
      },
      hexagons: {
        electricity: "Electricity",
        instrumentation: "Instrumentation",
        specialAlloys: "Special Steel Alloys",
        mechanicsPiping: "Mechanics & Piping",
        qualityAssurance: "Quality Assurance",
        warranty: "Warranty, Installation & Commissioning"
      },
      secondaryContent: {
        title: "International & Domestic Supply",
        items: [
          "Supply of international goods with manufacturer certificates and customs documents.",
          "Supply of domestic products as requested by manufacturers."
        ]
      }
    },
    header: {
      title: "Industrial Procurement & Supply Engineering",
      imageAlt: "Industrial Plant View"
    }
     },
      recordsPage: {
        title: 'Records',
        subtitle: 'Company records and past projects',
        intro: 'This page contains company records, key project summaries and historical information about our work.',
        note: 'Content coming soon.'
      }
  },
  fa: {
    translation: {
        commerce: {
      main: {
        title: "خدمات اصلی ما",
        engineering: "مهندسی خرید: تطابق درخواست و مدارک تجهیزات و لیست تامین کننده با محصولات تولید کنندگان و ارائه اختلاف (Deviation) و پیشنهاد جایگزین (Replacement) و تهیه دیتا شیت و جزئیات فنی (Technical Data Sheet).",
        supplyIndustrial: "تامین تجهیزات صنایع پتروشیمی، فولاد، نورد، سیمان و صنایع پایین‌دستی و تهیه مواد اولیه از قبیل فروسیلیس (FeSi)، فرومنگنز (FeMn)، دولومیت، آهک (Lime)، کنستانتره آهن و گندله.",
        bulkMaterial: "تامین اجناس عمومی Bulk Material مورد نیاز صنایع و پروژه‌های عمرانی و صنعتی.",
        qualityControl: "کنترل کیفیت، بازرسی حین ساخت، بازرسی در مبدا، تهیه و کنترل تعداد و بارگیری و هماهنگی با شرکت‌های بازرسی شخص ثالث."
      },
      hexagons: {
        electricity: "برق",
        instrumentation: "ابزار دقیق",
        specialAlloys: "آلیاژهای خاص فولادی",
        mechanicsPiping: "مکانیک و پایپینگ",
        qualityAssurance: "تضمین کیفیت",
        warranty: "گارانتی، نصب و راه اندازی"
      },
      secondaryContent: {
        title: "تامین کالاهای بین‌المللی و داخلی",
        items: [
          "تامین کالاهای بین المللی و ارائه گواهینامه‌ها و تاییدیه‌های تولید کننده و مدارک گمرکی.",
          "تامین محصولات و اقلام داخلی مورد نیاز تولید کنندگان بر اساس تقاضاها و سفارشات."
        ]
      }
    },
    header: {
      title: "مهندسی خرید و تامین کالاهای صنعتی",
      imageAlt: "نمای کارخانه صنعتی"
    },
      nav: {
        home: 'خانه',
        about: 'درباره ما',
        projects: 'پروژه‌ها',
        services: 'بازرگانی',
        contact: 'تماس با ما',
        cta: 'درخواست همکاری',
        selectLanguage: 'انتخاب زبان'
      },
      hero: {
        title: 'مجری تخصصی پروژه‌های برق، گاز و گندله‌سازی در مقیاس صنعتی',
        subtitle: 'از طراحی و مهندسی تا اجرا و راه اندازی پروژه های صنعتی در کنار شما هستیم',
        cta: 'مشاهده پروژه‌ها',
        learnMore: 'دریافت مشاوره فنی',
      },
      intro: {
        title: 'بیش از 25 سال تعالی صنعتی',
        description: 'شرکت ما با بیش از 25 سال تجربه در اجرای پروژه‌های EPC، برق صنعتی، خطوط انتقال گاز و تأسیسات گندله‌سازی، توانسته همکاری با مجموعه‌های بزرگ صنعتی و معدنی کشور را در کارنامه خود ثبت کند.',
        stat1: 'سال سابقه',
        stat2: 'پروژه موفق',
        stat3: 'مهندس متخصص'
      },
      services: {
        title: 'خدمات اصلی ما',
        electrical: 'پروژه‌های برق صنعتی و ساختمانی',
        electricalDesc: 'طراحی تامین تجهیزات شبکه,عملیات ساختمانی,نصب و راه اندازی پست های توزیع و فوق توزیع برق',
        substations: 'پست‌های برق و تابلوهای MV/LV',
        substationsDesc: 'طراحی، مهندسی و اجرای پست‌های برق و تابلوهای کنترل.',
        gas: 'خطوط انتقال گاز',
        gasDesc: 'گازرسانی به صنایع و مجتمعهای مسکونی و نصب,جا به جایی و جمع آوری انشعابات پراکنده',
        automation: 'اتوماسیون و ابزار دقیق',
        automationDesc: 'پیاده‌سازی سیستم‌های اتوماسیون پیشرفته مبتنی بر PLC و ابزار دقیق.',
        pelletizing: 'پروژه‌های کارخانه گندله‌سازی',
        pelletizingDesc: 'راهکارهای کلید در دست برای کارخانه‌های گندله‌سازی، از طراحی فرآیند تا اجرای مکانیکی و برقی.',
        epc: 'پروژه‌های EPC صنعتی',
        epcDesc: 'خدمات جامع EPC (مهندسی، تأمین، ساخت) برای صنایع معدنی و فولاد.',
      },
      clients: {
        title: 'مشتریان ارزشمند ما',
      },
      projects: {
        title: 'پروژه‌های منتخب',
        viewAll: 'مشاهده همه پروژه‌ها',
        category: 'دسته‌بندی',
        location: 'محل اجرا',
        year: 'سال',
      },
      whyUs: {
        title: 'دلیل انتخاب بهین‌آوران نیرو چیست؟',
        item1: 'توان اجرایی بالا در پروژه‌های سنگین',
        item2: 'رعایت استانداردهای جهانی (IEC, NEMA, NFPA)',
        item3: 'تیم متعهد از مهندسین متخصص',
        item4: 'تعهد به تحویل پروژه در زمان مقرر',
        item5: 'تجربه اثبات‌شده در محیط‌های سخت صنعتی',
        item6: 'زنجیره تأمین قدرتمند تجهیزات و متریال',
      },
      workflow: {
        title: 'روند اجرای پروژه ما',
        step1: 'نیازسنجی و بازدید از سایت',
        step1Desc: 'ما با درک دقیق نیازمندی‌های شما و تحلیل کامل سایت پروژه کار را آغاز می‌کنیم.',
        step2: 'طراحی مهندسی و پیشنهاد',
        step2Desc: 'مهندسان ما یک طرح فنی دقیق و یک پیشنهاد جامع برای پروژه آماده می‌کنند.',
        step3: 'اجرای کامل پروژه',
        step3Desc: 'ما تمام مراحل تأمین، ساخت و نصب را با دقت مدیریت می‌کنیم.',
        step4: 'تست و راه‌اندازی',
        step4Desc: 'پروژه با تست‌های دقیق، راه‌اندازی و تحویل نهایی به پایان می‌رسد.',
      },
      certifications: {
        title: 'گواهینامه‌ها و استانداردها',
        description: 'ما به بالاترین استانداردهای صنعتی پایبندیم تا کیفیت، ایمنی و اطمینان را در هر پروژه تضمین کنیم.'
      },
      about: {
        title: 'درباره ما',
        subtitle: 'تعالی در پیمانکاری برق و گاز',
        description: 'شرکت مهندسین بهین آوران نیرو از سال 1378 با ترکیبی از نیروهای جوان و پر تلاش در حوزه های صنعت برق,گاز و نفت آغاز به کار کرده و تاکنون توانسته است جهت خدمت رسانی به کشور و ملت ایران پروژه های محوله را به نحو شایسته به اتمام برساند',
        story: {
          title: 'داستان ما',
          p2: `امید است با تهیه این گزارش از پروژه های انجام شده، قادر به همکاری با شرکت های محترم باشیم.`
        },
        coreValues: {
          title: 'ارزش‌های اصلی ما',
          excellence: 'برتری',
          excellenceDesc: 'متعهد به ارائه بالاترین کیفیت در هر پروژه',
          teamwork: 'کار تیمی',
          teamworkDesc: 'رویکرد همکاری با متخصصان با تجربه',
          innovation: 'نوآوری',
          innovationDesc: 'استفاده از روش‌ها و فناوری‌های پیشرفته',
          integrity: 'صداقت',
          integrityDesc: 'صادق و شفاف در تمام معاملات خود',
        },
        vision: 'چشم‌انداز ما',
        visionText: 'معتبرترین و نوآورترین شرکت پیمانکاری برق و گاز در منطقه باشیم.',
        mission: 'ماموریت ما',
        missionText: 'ارائه کیفیت استثنایی، ایمنی و قابلیت اطمینan در هر پروژه‌ای که انجام می‌دهیم.',
        values: 'ارزش‌های ما',
        valuesText: 'صداقت، نوآوری، ایمنی و رضایت مشتری',
      },
      contact: {
        title: 'تماس با ما',
        subtitle: 'با ما در ارتباط باشید',
        name: 'نام و نام خانوادگی',
        email: 'آدرس ایمیل',
        phone: 'شماره تلفن',
        message: 'پیام شما',
        send: 'ارسال پیام',
        info: 'اطلاعات تماس',
        address: 'آدرس',
        addressText: 'میرداماد,خیابان کازرون شمالی, خیابان نیک رای, پلاک ۲, طبقه سوم واحد ۶',
        formTitle: 'برای ما پیام ارسال کنید',
        businessHours: {
          title: 'ساعات کاری',
          monFri: 'شنبه - چهارشنبه: ۸:۰۰ صبح تا ۶:۰۰ عصر',
          saturday: 'پنجشنبه: ۹:۰۰ صبح تا ۲:۰۰ بعد از ظهر',
          sunday: 'جمعه: تعطیل',
        }
      },
      projectsPage: {
        title: 'پروژه‌های ما',
        subtitle: 'مجموعه پروژه‌های موفق ما در زمینه برق، گاز و صنعت را کاوش کنید',
        categories: {
          all: 'همه',
          industrial: 'برق',
          transmission: 'انتقال و توزیع',
          panels: 'تابلو و تجهیزات',
          infrastructure: 'معماری و سیویل',
        }
      },
      projectsData: {
        p1: { title: 'نصب سینی و نردبان کابل LF,EAF,ASP', location: 'ابهر، شهرک صنعتی نورین', description: 'طرف قرارداد: مجتمع ذوب آهن البرز ناب آرش' },
        p2: { title: 'اجرای واحد SVC و MAIN SUB STATION', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p3: { title: 'اجرای سیستم الکتریکال و ابزار دقیق واحد تولید اکسیژن', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p4: { title: 'اجرای سیستم الکتریکال و ابزار دقیق واحد هایSHOP,MELT', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p5: { title: 'نصب سیستم ارتینگ', location: 'ابهر,شهرک صنعتی نورین​', description: 'طرف قرارداد:مجتمع البرز غرب' },
        p6: { title: 'نصب سینی و نردبان کابل کانال بطول 8000متر', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p7: { title: 'طراحی و مهندسی واحد های FTP,CCM,LF,EAF', location: 'ابهر,شهرک صنعتی نورین​', description: 'طرف قرارداد:مجتمع البرز غرب' },
        p8: { title: 'نصب تابلو های MV&LV', location: 'ابهر,شهرک صنعتی نورین​', description: 'طرف قرارداد:مجتمع البرز غرب' },
        p9: { title: 'اجرای سیستم الکتریکال و ابزار دقیق', location: 'شیراز,جهرم', description: 'طرف قرارداد:مجتمع صنعتی ذوب آهن پاسارگاد' },
        p10: { title: 'اجرای واحد SVC', location: 'شیراز,جهرم', description: 'طرف قرارداد:مجتمع صنعتی ذوب آهن پاسارگاد' },
        p11: { title: 'اجرای پست 230 به 33کیلوولت', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p12: { title: 'اجرای پست 20 به 63 کیلوولت', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p13: { title: 'اجرای سیستم الکتریکی بزرگترین خط نورد گرم میلگرد کلاف خاورمیانه', location: 'نطنز,شهرک صنعتی شجاع آباد', description:'طرف قرارداد:شرکت فولاد نطنز' },
        p14: { title: 'اجرای کابل 33کیلوولت', location: 'نطنز,شهرک صنعتی شجاع آباد​', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p15: { title: 'اجرای سیستم الکتریکی سالن ذوب', location: 'ملایر -همدان', description: 'طرف قرارداد:شرکت دنا اکباتان' },
        p16: { title: 'نصب کامل پلنت اکسیژن', location: 'اهواز,خوزستان', description: 'طرف قرارداد:شرکت دنا اکباتان' },
        p17: { title: 'اجرای سیستم الکتریکی خط نورد گرم', location: 'ایوانکی-تهران', description: 'طرف قرارداد:شرکت آریانورد' },
        p18: { title: 'اجرای سیستم الکتریکی خط ذوب', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد نطنز' },
        p19: { title: 'اجرای سیستم الکتریکی خط نورد گرم', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد نطنز' },
        p20: { title: 'اجرای شبکه هوایی و زمینی', location: 'شرکت کالای الکتریک', description: 'طرف قرارداد:شرکت کالای الکتریک' },
        p21: { title: 'اجرای سیستم الکتریکی خط نورد سرد', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت صنایع مفتولی توکلی' },
        p22: { title: 'اجرای سیستم الکتریکی خط نورد سرد', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت ورا صنعت شرق' },
        p23: { title: 'اجرای سیستم روشنایی', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت ذوب آهن و فولاد نطنز' },
        p24: { title: 'ساخت تابلو', location: 'سد گتوند,دزفول', description: 'طرف قرارداد:شرکت شهر آذین' },
        p25: { title: 'ساخت کوبیکل 20 ولت', location: 'اصفهان,جنب پالایشگاه', description: 'طرف قرارداد:شرکت شیر و فولاد اصفهان' },
        p26: { title: 'ساخت تابلو', location: 'عسلویه', description: 'طرف قرارداد:شرکت توسعه اجیاد' },
        p27: { title: 'ساخت تابلو های 20کیلوولت', location: 'اصفهان,پالایشگاه', description: 'طرف قرارداد:پالایشگاه اصفهان' },
        p28: { title: 'اجرای شبکه هوایی 20کیلوولت', location: 'نطنز', description:'طرف قرارداد:شهرک صنعتی اصفهان' },
        p29: { title: 'اجرای دو دستگاه برق گیر', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد نطنز' },
        p30: { title: 'اجرای شبکه هوایی 20KV', location: 'حد فاصل بادرود کاشان', description: 'طرف قرارداد:شرکت توزیع برق اصفهان' },
        p31: { title: 'دمونتاژ,تعمیر و راه اندازی 300 تابلو', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p32: { title: 'سرویس,تعمیر و راه اندازی 60 ترانسفورماتور', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p33: { title: 'ساخت تابلوهای 20 کیلوولت', location: 'اصفهان,پالایشگاه', description: 'طرف قرارداد:پالایشگاه اصفهان' },
        p34: { title: 'پروژه تامین برق اسکان کارگری', location: 'منطقه برق بهمن', description: 'طرف قرارداد:برق استان تهران' },

      },
      servicesPage: {
        title: 'خدمات ما',
        subtitle: 'ارائه راهکارهای جامع و یکپارچه برای چالش‌های پیچیده صنعتی.'
      },
      footer: {
        description: 'خدمات حرفه‌ای پیمانکاری برق، گاز و صنعتی با تعالی و اطمینان.',
        quickLinks: 'لینک‌های سریع',
        services: 'خدمات',
        rights: 'تمامی حقوق محفوظ است.',
      }
      ,
      recordsPage: {
        title: 'سوابق',
        subtitle: 'سوابق شرکت و پروژه‌های گذشته',
        intro: 'این صفحه شامل سوابق شرکت، خلاصه پروژه‌های کلیدی و اطلاعات تاریخی درباره فعالیت‌های ما است.',
        note: 'محتوا به‌زودی تکمیل خواهد شد.'
      }
    }
  },
  ar: {
    translation: {
        commerce: {
      main: {
        title: "خدماتنا الأساسية",
        engineering: "الهندسة والشراء: مطابقة الطلبات ومستندات المعدات مع قوائم الموردين، تقديم تقارير الانحراف والاستبدال، وإعداد النشرات الفنية.",
        supplyIndustrial: "توريد المعدات للصناعات البتروكيماوية، الصلب، الأسطوانات، الأسمنت والصناعات التابعة، وتوريد المواد الأولية مثل FeSi، FeMn، الدولوميت، الجير، مركزات الحديد والحبيبات.",
        bulkMaterial: "توريد المواد العامة Bulk Material المطلوبة للصناعات والمشاريع المدنية والصناعية.",
        qualityControl: "مراقبة الجودة، التفتيش أثناء التصنيع، التفتيش عند المصدر، مراقبة الكميات والتحميل والتنسيق مع شركات التفتيش الطرف الثالث."
      },
      hexagons: {
        electricity: "الكهرباء",
        instrumentation: "الأتمتة وأجهزة القياس",
        specialAlloys: "سبائك فولاذية خاصة",
        mechanicsPiping: "الميكانيكا والأنابيب",
        qualityAssurance: "ضمان الجودة",
        warranty: "الضمان، التركيب والتشغيل"
      },
      secondaryContent: {
        title: "توريد دولي وداخلي",
        items: [
          "توريد السلع الدولية مع شهادات الشركة المصنعة والوثائق الجمركية.",
          "توريد المنتجات المحلية حسب طلبات الشركات المصنعة."
        ]
      }
    },
    header: {
      title: "هندسة الشراء وتوريد المعدات الصناعية",
      imageAlt: "منظر المصنع الصناعي"
    }
  },
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        records: 'السجلات',
        projects: 'المشاريع',
        services: 'الخدمات',
        contact: 'اتصل بنا',
        cta: 'طلب تعاون',
        selectLanguage: 'اختر اللغة'
      },
      hero: {
        title: 'تنفيذ متخصص لمشاريع الكهرباء والغاز وتكوير الخام على نطاق صناعي',
        subtitle: 'من التصميم والهندسة إلى التنفيذ والتشغيل، نقدم التميز مع فريق من الخبراء والمعايير العالمية.',
        cta: 'عرض المشاريع',
        learnMore: 'احصل على استشارة فنية',
      },
      intro: {
        title: 'أكثر من ١٥ عامًا من التميز الصناعي',
        description: 'بفضل خبرتنا التي تزيد عن ١٥ عامًا في تنفيذ مشاريع EPC، وأنظمة الطاقة الصناعية، وخطوط نقل الغاز، ومصانع تكوير الخام، تمتلك شركتنا سجلاً حافلاً بالتعاون الناجح مع المجمعات الصناعية والتعدينية الكبرى.',
        stat1: 'سنوات من الخبرة',
        stat2: 'مشروع ناجح',
        stat3: 'مهندس خبير'
      },
      services: {
        title: 'خدماتنا الأساسية',
        electrical: 'مشاريع الكهرباء الصناعية والمباني',
        electricalDesc: 'تنفيذ أنظمة كهربائية للجهد العالي والمنخفض للمنشآت الصناعية والتجارية.',
        substations: 'المحطات الفرعية ولوحات MV/LV',
        substationsDesc: 'تصميم وهندسة وتنفيذ المحطات الكهربائية الفرعية ولوحات التحكم.',
        gas: 'خطوط نقل الغاز',
        gasDesc: 'تركيب واختبار وتشغيل خطوط أنابيب ومحطات الغاز الصناعية.',
        automation: 'الأتمتة والأجهزة الدقيقة',
        automationDesc: 'تنفيذ أنظمة أتمتة متقدمة قائمة على PLC وأنظمة أجهزة دقيقة.',
        pelletizing: 'مشاريع مصانع تكوير الخام',
        pelletizingDesc: 'حلول متكاملة لمصانع تكوير الخام، من تصميم العملية إلى التنفيذ الميكانيكي والكهربائي.',
        epc: 'مشاريع EPC الصناعية',
        epcDesc: 'خدمات شاملة للهندسة والمشتريات والبناء (EPC) لصناعات التعدين والصلب.',
      },
      clients: {
        title: 'عملاؤنا وشركاؤنا الكرام',
      },
      projects: {
        title: 'مشاريع مميزة',
        viewAll: 'عرض جميع المشاريع',
        category: 'الفئة',
        location: 'الموقع',
        year: 'السنة',
      },
      whyUs: {
        title: 'لماذا تتعاون مع PowerFlow؟',
        item1: 'قدرة تنفيذ عالية للمشاريع الثقيلة',
        item2: 'الامتثال للمعايير العالمية (IEC, NEMA, NFPA)',
        item3: 'فريق متخصص من المهندسين المتخصصين',
        item4: 'الالتزام بتسليم المشاريع في الوقت المحدد',
        item5: 'خبرة مثبتة في البيئات الصناعية القاسية',
        item6: 'سلسلة توريد قوية للمعدات والمواد',
      },
      workflow: {
        title: 'سير عمل مشاريعنا',
        step1: 'تقييم الاحتياجات وزيارة الموقع',
        step1Desc: 'نبدأ بفهم متطلباتك بدقة وإجراء تحليل شامل للموقع.',
        step2: 'التصميم الهندسي والعرض الفني',
        step2Desc: 'يقوم مهندسونا بإنشاء تصميم فني مفصل وعرض شامل للمشروع.',
        step3: 'التنفيذ على نطاق كامل',
        step3Desc: 'ندير جميع مراحل الشراء والبناء والتركيب بدقة.',
        step4: 'الاختبار والتشغيل',
        step4Desc: 'ينتهي المشروع باختبارات صارمة وتشغيل وتسليم نهائي.',
      },
      certifications: {
        title: 'الشهادات والمعايير',
        description: 'نلتزم بأعلى معايير الصناعة لضمان الجودة والسلامة والموثوقية في كل مشروع.'
      },
      about: {
        title: 'من نحن',
        subtitle: 'التميز في مقاولات الكهرباء والغاز',
        description: 'مع أكثر من 15 عامًا من الخبرة، رسخنا أنفسنا كشركة رائدة في مقاولات الكهرباء والغاز. يقدم فريقنا من المحترفين المعتمدين حلولاً مبتكرة للمشاريع السكنية والتجارية والصناعية.',
        story: {
          title: 'قصتنا',
          p2: 'من المشاريع السكنية إلى المنشآت الصناعية الكبيرة، نقدم الخبرة والتفاني والابتكار في كل تحد. التزامنا بالسلامة والجودة ورضا العملاء جعلنا شريكًا موثوقًا به في الصناعة.'
        },
        coreValues: {
          title: 'قيمنا الأساسية',
          excellence: 'التميز',
          excellenceDesc: 'ملتزمون بتقديم أعلى مستويات الجودة في كل مشروع',
          teamwork: 'العمل الجماعي',
          teamworkDesc: 'نهج تعاوني مع محترفين ذوي خبرة',
          innovation: 'الابتكار',
          innovationDesc: 'استخدام أحدث التقنيات والأساليب',
          integrity: 'النزاهة',
          integrityDesc: 'صادقون وشفافون في جميع تعاملاتنا',
        },
        vision: 'رؤيتنا',
        visionText: 'أن نكون أكثر شركة مقاولات كهرباء وغاز موثوقة ومبتكرة في المنطقة.',
        mission: 'مهمتنا',
        missionText: 'تقديم جودة استثنائية وسلامة وموثوقية في كل مشروع نقوم به.',
        values: 'قيمنا',
        valuesText: 'النزاهة والابتكار والسلامة ورضا العملاء',
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'تواصل مع فريقنا',
        name: 'الاسم الكامل',
        email: 'عنوان البريد الإلكتروني',
        phone: 'رقم الهاتف',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        info: 'معلومات الاتصال',
        address: 'العنوان',
        addressText: '123 شارع الصناعي، المنطقة التجارية',
        formTitle: 'أرسل لنا رسالة',
        businessHours: {
          title: 'ساعات العمل',
          monFri: 'الاثنين - الجمعة: 8:00 صباحًا - 6:00 مساءً',
          saturday: 'السبت: 9:00 صباحًا - 2:00 ظهرًا',
          sunday: 'الأحد: مغلق',
        }
      },
      projectsPage: {
        title: 'مشاريعنا',
        subtitle: 'استكشف محفظتنا من المشاريع الناجحة في مجال الكهرباء والغاز والصناعة',
        categories: {
            all: 'الكل',
  industrial: 'الكهرباء',
  transmission: 'النقل والتوزيع',
  panels: 'لوحات وتجهيزات',
  infrastructure: 'الهندسة المعمارية والمدنية',
        }
      },
      projectsData: {
        p1: { title: 'تطوير محطة فرعية 400 كيلوفولت في أصفهان', location: 'أصفهان، إيران', description: 'تصميم وهندسة وبناء محطة فرعية جديدة 400/230 كيلوفولت بنظام GIS لتعزيز استقرار الشبكة.' },
        p2: { title: 'خط نقل 230 كيلوفولت - من طهران إلى قم', location: 'طهران، إيران', description: 'بناء خط نقل مزدوج الدائرة بطول 150 كم لتحسين تدفق الطاقة بين المدن الرئيسية.' },
        p3: { title: 'أتمتة مصنع تكوير الخام في تشادورمالو', location: 'يزد، إيران', description: 'تحديث كامل لنظام الأتمتة والتحكم لمصنع تكوير الخام بطاقة 5 مليون طن سنويًا.' },
        p4: { title: 'مشروع EPC لمصنع مباركه للصلب', location: 'أصفهان، إيران', description: 'عقد EPC للأنظمة الكهربائية والأتمتة لآلة الصب المستمر الجديدة.' },
        p5: { title: 'استشارات الشبكة الذكية لمدينة نيوم', location: 'نيوم، المملكة العربية السعودية', description: 'استشارات استراتيجية حول تصميم شبكة ذكية مرنة ومستقبلية.' },
        p6: { title: 'تسليم محطة فرعية متنقلة 63/20 كيلوفولت', location: 'الأهواز، إيران', description: 'نشر سريع لمحطة فرعية متنقلة لاستعادة الطاقة في حالات الطوارئ ودعم الشبكة.' },
        p7: { title: 'مشروع صيانة خطوط النقل الهوائية 400 كيلوفولت', location: 'كرمان، إيران', description: 'إصلاح وصيانة شاملة لأصول خطوط النقل الهوائية الحيوية.' },
        p8: { title: 'توسعة مصنع تكوير الخام في غلغهر', location: 'كرمان، إيران', description: 'الأعمال الكهربائية والميكانيكية لتوسيع خط إنتاج تكوير الخام.' },
        p9: { title: 'تحديث أتمتة بتروكيماويات تبريز', location: 'تبريز، إيران', description: 'تحديث نظام DCS و ESD لوحدة الأولفين.' },
        p10: { title: 'تحديث نظام أتمتة المحطات الفرعية', location: 'مشهد، إيران', description: 'تجديد محطة فرعية 230 كيلوفولت بأنظمة SCADA وحماية حديثة.' },
        p11: { title: 'مشروع EPC لمجمع سرجشمه للنحاس', location: 'كرمان، إيران', description: 'EPC لأنظمة توزيع الطاقة والتحكم لمشروع المصهر الجديد.' },
        placeholder: { title: 'عنوان المشروع {{id}}', location: 'إقليمي', description: 'هذا وصف نموذجي للمشروع رقم {{id}}، يوضح بالتفصيل نطاق وتأثير عملنا في المنطقة.' }
      },
      servicesPage: {
        title: 'خدماتنا',
        subtitle: 'نقدم حلولاً شاملة ومتكاملة للتحديات الصناعية المعقدة.'
      },
      footer: {
        description: 'خدمات مقاولات الكهرباء والغاز والصناعة المهنية مع التميز والموثوقية.',
        quickLinks: 'روابط سريعة',
        services: 'الخدمات',
        rights: 'جميع الحقوق محفوظة.',
      }
      ,
      recordsPage: {
        title: 'السجلات',
        subtitle: 'سجلات الشركة والمشاريع السابقة',
        intro: 'تحتوي هذه الصفحة على سجلات الشركة، وملخصات المشاريع الرئيسية، ومعلومات تاريخية عن أعمالنا.',
        note: 'المحتوى قيد الإعداد.'
      }
    }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fa',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Set initial direction and language on the HTML element
document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.dir(i18n.language);

// Update direction and language on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = i18n.dir(lng);
});

export default i18n;
