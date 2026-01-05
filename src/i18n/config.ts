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
        news: 'News',
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
      newsPage: {
        badge: 'Latest Updates',
        title: 'Company News & Insights',
        subtitle: 'Stay informed with our latest project milestones, technology breakthroughs, and industry perspectives.',
        readMore: 'Read more',
        latestTitle: 'Latest Updates',
        latestSubtitle: 'Curated highlights from our industrial and energy portfolio.',
        viewProjects: 'Explore projects',
        categories: {
          all: 'All updates',
          projects: 'Project milestones',
          energy: 'Energy systems',
          sustainability: 'Sustainability',
          technology: 'Technology',
        },
        highlights: {
          total: 'Published stories',
          awards: 'Industry awards',
          partners: 'Strategic partners',
        },
        featured: {
          category: 'Spotlight',
          title: 'High-voltage substation delivered ahead of schedule in Natanz',
          excerpt: 'A multi-discipline delivery with zero downtime upgrades, advanced automation, and enhanced operational safety.',
          date: 'May 2024',
          readTime: '6 min read',
          body: [
            'Our teams completed a complex substation expansion that kept the site running while we upgraded protection, automation, and power quality systems.',
            'New digital relays and redundant communication links improved fault isolation speed, while a refreshed control room interface gave operators deeper diagnostics.',
            'The project wrapped up ahead of schedule, enabling the client to accelerate downstream production without interruption.',
          ],
        },
        items: {
          story1: {
            category: 'Execution',
            title: 'Advanced automation package commissioned for pelletizing line',
            excerpt: 'Our control team integrated a new PLC suite to boost uptime, diagnostics, and energy efficiency.',
            date: 'April 2024',
            readTime: '4 min read',
            body: [
              'The new automation layer replaced legacy panels with an integrated PLC and SCADA stack designed for high-throughput pelletizing.',
              'We standardized alarm management, added predictive maintenance dashboards, and synchronized drives to reduce mechanical wear.',
              'Commissioning was completed in staged windows to keep the production schedule intact.',
            ],
          },
          story2: {
            category: 'Engineering',
            title: 'Power distribution upgrade completed for industrial complex',
            excerpt: 'A full MV/LV upgrade that optimized load balancing and reduced operational risk.',
            date: 'March 2024',
            readTime: '5 min read',
            body: [
              'Engineering teams reconfigured feeders, implemented new busbar protection, and delivered a staged cutover plan.',
              'The upgrade improved voltage stability during peak demand and created redundancy across critical production lines.',
              'Operators now have centralized visibility into load profiles and maintenance schedules.',
            ],
          },
          news1: {
            category: 'Grid',
            title: 'New protection relays installed for regional substation',
            excerpt: 'Modern relay coordination improved reliability and shortened response time for critical assets.',
            date: 'Feb 2024',
            readTime: '3 min read',
            body: [
              'A new suite of numerical relays was deployed with synchronized settings to eliminate nuisance trips.',
              'Testing included end-to-end signal validation, breaker timing analysis, and fault simulation.',
              'The substation now meets updated grid compliance requirements while improving resilience.',
            ],
          },
          news2: {
            category: 'Construction',
            title: 'Smart cabling routes delivered for steel production line',
            excerpt: 'Our teams completed precision cable management to accelerate commissioning.',
            date: 'Jan 2024',
            readTime: '4 min read',
            body: [
              'Dedicated trays and modular routing reduced cable congestion and shortened installation time.',
              'Color-coded labeling and GIS mapping improved troubleshooting and future expansion planning.',
              'The client reported faster commissioning and fewer on-site corrections.',
            ],
          },
          news3: {
            category: 'Sustainability',
            title: 'Energy optimization audit reduces annual consumption',
            excerpt: 'A targeted audit identified efficiency upgrades across high-load equipment.',
            date: 'Dec 2023',
            readTime: '5 min read',
          },
          news4: {
            category: 'Safety',
            title: 'Zero-incident milestone achieved across job sites',
            excerpt: 'A culture of safety and proactive training keeps our projects secure.',
            date: 'Nov 2023',
            readTime: '3 min read',
          },
        },
        cta: {
          title: 'Subscribe for project intelligence and industry trends',
          subtitle: 'Request briefings, technical updates, and insight reports curated by our engineering leadership.',
          primary: 'Request briefing',
          secondary: 'View services',
        },
        detail: {
          backToNews: 'Back to news',
          notFound: 'News article not found',
          notFoundSubtitle: 'The update you are looking for may have moved or is no longer available.',
          ctaPrimary: 'Start a project discussion',
          ctaSecondary: 'Browse our projects',
        },
      },
      whyUs: {
        title: 'Why Partner with Behin Avaran Niroo?',
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
          title: "Contact Us",
  subtitle: "Get in Touch",
  name: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  message: "Your Message",
  send: "Send Message",
  info: "Contact Information",
  address: "Address",
  addressText: "Unit 6, 3rd Floor, No. 2, Nikray Street, North Kazeroun Street, Mirdamad, Tehran, Iran",
  formTitle: "Send Us a Message",
  businessHours: {
    title: "Business Hours",
    monFri: "Saturday – Wednesday: 8:00 AM – 6:00 PM",
    saturday: "Thursday: 9:00 AM – 2:00 PM",
    sunday: "Friday: Closed"
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
      p1: { title: "Execution of Ladder & Cable Tray Systems in ASP, LF, and EAF Units (15 km)", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Nab Arash Steel Complex" },
      p2: { title: "Execution of 33 kV Static Var Compensator (SVC) Unit", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Nab Arash Steel Complex" },
      p3: { title: "Electrical & Instrumentation Execution for ASP Oxygen Production Unit", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Nab Arash Steel Complex" },
      p4: { title: "Electrical & Instrumentation Execution for Melt Shop Units", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Nab Arash Steel Complex" },
      p5: { title: "Installation of Earthing System (10 km)", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Gharb Complex" },
      p6: { title: "Execution of 33 kV Ladder & Tray System in Utility Tunnel (8 km)", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Nab Arash Steel Complex" },
      p7: { title: "Design & Engineering of Electrical Systems for FTP, CCM, LF, and EAF Units", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Gharb Complex" },
      p8: { title: "Installation of MV & LV Switchboards", location: "Abhar, Noorin Industrial Town", description: "Client: Alborz Gharb Complex" },
      p9: { title: "Electrical & Instrumentation System Execution", location: "Shiraz, Kavar", description: "Client: Pasargad Steel Industrial Complex" },
      p10:{ title: "Execution of SVC Unit", location: "Shiraz, Jahrom", description: "Client: Pasargad Steel Industrial Complex" },
      p11:{ title: "Execution of 230/33 kV Substation", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel & Iron Company" },
      p12:{ title: "Execution of 63/20 kV Substation", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel & Iron Company" },
      p13:{ title: "Electrical Execution of the Largest Hot Rolling Rebar Coil Line in the Middle East", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel Company" },
      p14:{ title: "Execution of 33 kV XLPE Cables (400 & 500 mm²)", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel & Iron Company" },
      p15:{ title: "Electrical Execution of 100-Ton Melting Hall", location: "Malayer, Hamedan", description: "Client: Dena Ekbatan Company" },
      p16:{ title: "Complete Installation of Oxygen Plant", location: "Ahvaz, Khuzestan", description: "Client: Dena Ekbatan Company" },
      p17:{ title: "Electrical Execution of Hot Rolling Line", location: "Eyvanekey, Tehran", description: "Client: Arianvard Amir Company" },
      p18:{ title: "Electrical Execution of SMP2 Melting Line", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel Company" },
      p19:{ title: "Electrical Execution of RM1 Hot Rolling Line", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel Company" },
      p20:{ title: "Execution of Overhead & Underground Electrical Networks", location: "Kala Electric Company", description: "Client: Kala Electric Company" },
      p21:{ title: "Electrical Execution of Cold Rolling Line", location: "Natanz, Shojaabad Industrial Town", description: "Client: Toukli Wire Industries" },
      p22:{ title: "Electrical Execution of Cold Rolling Line", location: "Natanz, Shojaabad Industrial Town", description: "Client: Vara Sanat Shargh Company" },
      p23:{ title: "Execution of Lighting System", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel & Iron Company" },
      p24:{ title: "Switchboard Manufacturing", location: "Gotvand Dam, Dezful", description: "Client: Shahrazin Company" },
      p25:{ title: "Manufacturing of 20 kV Cubicles", location: "Isfahan, Near Refinery", description: "Client: Isfahan Dairy Industries" },
      p26:{ title: "Switchboard Manufacturing", location: "Asaluyeh", description: "Client: Tose’e Ehya" },
      p27:{ title: "Manufacturing of 20 kV Switchboards", location: "Isfahan Refinery", description: "Client: Isfahan Refinery" },
      p28:{ title: "Execution of 20 kV Overhead Network", location: "Natanz", description: "Client: Isfahan Industrial Towns Company" },
      p29:{ title: "Development of 2 Bays at 63/20 kV Substation", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel Company" },
      p30:{ title: "Execution of 20 kV Overhead Network", location: "Isfahan Province", description: "Client: Isfahan Electricity Distribution Company" },
      p31:{ title: "Dismantling, Repair & Commissioning of 143 Units of 5.5 kV Switchboards", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel & Iron Company" },
      p32:{ title: "Service, Repair, Testing & Commissioning of 60 Transformers (5.5 kV) – RM3 Line", location: "Natanz, Shojaabad Industrial Town", description: "Client: Natanz Steel & Iron Company" },
      p33:{ title: "Manufacturing of 20 kV Switchboards", location: "Isfahan Refinery", description: "Client: Isfahan Refinery" },
      p34:{ title: "Power Supply Project for Workers’ Accommodation", location: "Bahman Power District", description: "Client: Tehran Province Electricity Company" },
      p35:{ title: "Janja Copper Concentration Plant Project", location: "South Khorasan Province", description: "Client: Fakoor Sanat Tehran Company" },
      p36:{ title: "Kharameh Shiraz Pelletizing Complex", location: "Shiraz", description: "Client: Fakoor Sanat Tehran Company" }
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
        warranty: "Warranty & Installation"
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
        news: 'اخبار',
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
        description: 'شرکت ما با بیش از ۲۵ سال تجربه در اجرای پروژه‌های صنعتی در حوزه‌های برق، ابزار دقیق، مکانیک، تأسیسات، سیویل و معماری، توانسته است همکاری با مجموعه‌های بزرگ صنعتی و معدنی کشور را در کارنامه خود ثبت کند.'
,
        stat1: 'سال سابقه',
        stat2: 'پروژه موفق',
        stat3: 'مهندس متخصص'
      },
      services: {
        title: 'خدمات اصلی ما',
        electrical: 'پروژه‌های برق و ابزار دقیق',
        electricalDesc: 'طراحی تامین تجهیزات شبکه,عملیات ساختمانی,نصب و راه اندازی پست های توزیع و فوق توزیع برق',
        substations: 'پست های توزیع و فوق توزیع',
        substationsDesc: '',
        gas: 'خطوط انتقال گاز',
        gasDesc: 'گازرسانی به صنایع و مجتمعهای مسکونی و نصب,جا به جایی و جمع آوری انشعابات پراکنده',
        automation: ' سیویل و معماری',
        automationDesc: 'پیاده‌سازی سیستم‌های اتوماسیون پیشرفته مبتنی بر PLC و ابزار دقیق.',
        pelletizing: 'مکانیک و تاسیسات',
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
      newsPage: {
        badge: 'آخرین به‌روزرسانی‌ها',
        title: 'اخبار و دیدگاه‌های شرکت',
        subtitle: 'جدیدترین دستاوردهای پروژه‌ها، پیشرفت‌های فنی و تحلیل‌های صنعتی را دنبال کنید.',
        readMore: 'ادامه خبر',
        latestTitle: 'جدیدترین خبرها',
        latestSubtitle: 'گلچینی از مهم‌ترین رویدادهای صنعتی و انرژی.',
        viewProjects: 'مشاهده پروژه‌ها',
        categories: {
          all: 'همه خبرها',
          projects: 'دستاوردهای پروژه',
          energy: 'سیستم‌های انرژی',
          sustainability: 'پایداری',
          technology: 'فناوری',
        },
        highlights: {
          total: 'خبرهای منتشر شده',
          awards: 'افتخارات صنعتی',
          partners: 'شرکای استراتژیک',
        },
        featured: {
          category: 'ویژه',
          title: 'تحویل پست فشار قوی نطنز پیش از موعد مقرر',
          excerpt: 'اجرای چندرشته‌ای با ارتقای اتوماسیون، ایمنی عملیاتی و بدون توقف تولید.',
          date: 'اردیبهشت ۱۴۰۳',
          readTime: '۶ دقیقه مطالعه',
          body: [
            'تیم‌های ما توسعه پست را به‌گونه‌ای اجرا کردند که در طول ارتقا، بهره‌برداری سایت بدون توقف ادامه پیدا کند.',
            'رله‌های دیجیتال جدید، لینک‌های ارتباطی افزونه و داشبوردهای کنترلی، سرعت عیب‌یابی و ایمنی بهره‌برداری را افزایش داد.',
            'پروژه زودتر از برنامه تحویل شد و امکان افزایش ظرفیت تولید برای کارفرما فراهم گردید.',
          ],
        },
        items: {
          story1: {
            category: 'اجرا',
            title: 'راه‌اندازی بسته اتوماسیون پیشرفته برای خط گندله‌سازی',
            excerpt: 'پیاده‌سازی PLC جدید برای افزایش بهره‌وری، پایش و بهره‌وری انرژی.',
            date: 'فروردین ۱۴۰۳',
            readTime: '۴ دقیقه مطالعه',
            body: [
              'لایه اتوماسیون جدید با PLC و SCADA یکپارچه جایگزین تجهیزات قدیمی شد.',
              'مدیریت آلارم‌ها، داشبوردهای پایش وضعیت و هم‌زمان‌سازی درایوها برای کاهش استهلاک به‌روزرسانی گردید.',
              'راه‌اندازی به‌صورت مرحله‌ای انجام شد تا برنامه تولید حفظ شود.',
            ],
          },
          story2: {
            category: 'مهندسی',
            title: 'ارتقای توزیع برق برای مجتمع صنعتی با موفقیت تکمیل شد',
            excerpt: 'بهینه‌سازی کامل شبکه MV/LV برای بالانس بار و کاهش ریسک عملیاتی.',
            date: 'اسفند ۱۴۰۲',
            readTime: '۵ دقیقه مطالعه',
            body: [
              'تیم مهندسی با بازآرایی فیدرها و افزودن حفاظت باس‌بار، کیفیت توزیع را ارتقا داد.',
              'این ارتقا موجب پایداری ولتاژ در پیک مصرف و ایجاد افزونگی در خطوط حساس تولید شد.',
              'اکنون پایش بار و برنامه‌ریزی تعمیرات به‌صورت متمرکز انجام می‌شود.',
            ],
          },
          news1: {
            category: 'شبکه برق',
            title: 'نصب رله‌های حفاظتی نسل جدید برای پست منطقه‌ای',
            excerpt: 'هماهنگی حفاظتی جدید باعث افزایش پایداری و سرعت واکنش شد.',
            date: 'بهمن ۱۴۰۲',
            readTime: '۳ دقیقه مطالعه',
            body: [
              'مجموعه رله‌های عددی جدید با تنظیمات همگام‌سازی شده نصب شد تا تریپ‌های ناخواسته حذف گردد.',
              'آزمون‌های انتها به انتها، تحلیل زمان کلیدها و شبیه‌سازی خطا اجرا شد.',
              'پست اکنون مطابق الزامات جدید شبکه، تاب‌آوری بالاتری دارد.',
            ],
          },
          news2: {
            category: 'ساخت',
            title: 'تحویل مسیرهای کابل‌کشی هوشمند برای خط فولاد',
            excerpt: 'تکمیل مدیریت کابل‌ها برای تسریع راه‌اندازی پروژه.',
            date: 'دی ۱۴۰۲',
            readTime: '۴ دقیقه مطالعه',
            body: [
              'سینی‌های ماژولار و مسیرهای اختصاصی، تراکم کابل‌ها را کاهش داد و زمان نصب را کم کرد.',
              'برچسب‌گذاری رنگی و نقشه‌برداری دیجیتال، عیب‌یابی و توسعه‌های آتی را آسان‌تر کرد.',
              'نتیجه، راه‌اندازی سریع‌تر و کاهش اصلاحات در محل بود.',
            ],
          },
          news3: {
            category: 'پایداری',
            title: 'ممیزی انرژی باعث کاهش مصرف سالانه شد',
            excerpt: 'بهبودهای پیشنهادی برای تجهیزات پرمصرف شناسایی گردید.',
            date: 'آذر ۱۴۰۲',
            readTime: '۵ دقیقه مطالعه',
          },
          news4: {
            category: 'ایمنی',
            title: 'ثبت رکورد بدون حادثه در تمامی سایت‌ها',
            excerpt: 'فرهنگ ایمنی و آموزش‌های پیشگیرانه، پروژه‌ها را ایمن نگه داشت.',
            date: 'آبان ۱۴۰۲',
            readTime: '۳ دقیقه مطالعه',
          },
        },
        cta: {
          title: 'برای دریافت گزارش‌های فنی و روندهای صنعتی همراه شوید',
          subtitle: 'گزارش‌های پروژه، به‌روزرسانی‌های تخصصی و تحلیل‌های مهندسی را دریافت کنید.',
          primary: 'درخواست گزارش',
          secondary: 'مشاهده خدمات',
        },
        detail: {
          backToNews: 'بازگشت به اخبار',
          notFound: 'خبر موردنظر پیدا نشد',
          notFoundSubtitle: 'ممکن است خبر جابه‌جا شده باشد یا دیگر در دسترس نباشد.',
          ctaPrimary: 'شروع گفتگو برای پروژه',
          ctaSecondary: 'مشاهده پروژه‌ها',
        },
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
          transmission: 'فوق توزیع',
          panels: 'تابلو و تجهیزات',
          infrastructure: 'معماری و سیویل',
        }
      },
      projectsData: {
        p1: { title: 'اجرای Ladder&Tray در واحد های ASP,LF,EAF به متراژ 15KM', location: 'ابهر، شهرک صنعتی نورین', description: 'طرف قرارداد: مجتمع ذوب آهن البرز ناب آرش' },
        p2: { title: 'اجرای واحد (SVC,STATIC VAR COMPENSATOR) 33KV', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p3: { title: 'احرای سیستم الکتریکال و ابزار دقیق واحد تولید اکسیژن ASP', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p4: { title: 'اجرای سیستم الکتریکال و ابزار دقیق واحد هایMeltShop', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p5: { title: 'نصب سیستم ارتینگ به طول 10 کیلومتر', location: 'ابهر,شهرک صنعتی نورین​', description: 'طرف قرارداد:مجتمع البرز غرب' },
        p6: { title: 'اجرای Ladder & Tray خط 33kv در کانال تاسیسات به طول 8 کیلومتر', location: 'ابهر,شهرک صنعتی نورین', description: 'طرف قرارداد:مجتمع ذوب آهن البرز ناب آرش' },
        p7: { title: 'طراحی و مهندسی سیستم الکتریکال واحد های FTP,CCM,LF,EAF', location: 'ابهر,شهرک صنعتی نورین​', description: 'طرف قرارداد:مجتمع البرز غرب' },
        p8: { title: 'نصب تابلو های MV&LV', location: 'ابهر,شهرک صنعتی نورین​', description: 'طرف قرارداد:مجتمع البرز غرب' },
        p9: { title: 'اجرای سیستم الکتریکال و ابزار دقیق', location: 'شیراز,کوار', description: 'طرف قرارداد:مجتمع صنعتی ذوب آهن پاسارگاد' },
        p10: { title: 'اجرای واحد SVC', location: 'شیراز,جهرم', description: 'طرف قرارداد:مجتمع صنعتی ذوب آهن پاسارگاد' },
        p11: { title: 'اجرای پست 230/33 کیلوولت', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p12: { title: 'اجرای پست 63/20 کیلوولت', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p13: { title: 'اجرای سیستم الکتریکی بزرگترین خط نورد گرم میلگرد کلاف خاورمیانه', location: 'نطنز,شهرک صنعتی شجاع آباد', description:'طرف قرارداد:شرکت فولاد نطنز' },
        p14: { title: 'اجرای کابل کراسلینک 33 کیلوولت با مقاطع 400 و 500 میلی متر مربع', location: 'نطنز,شهرک صنعتی شجاع آباد​', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p15: { title: 'اجرای سیستم الکتریکی سالن ذوب 100 تن', location: 'ملایر -همدان', description: 'طرف قرارداد:شرکت دنا اکباتان' },
        p16: { title: 'نصب کامل پلنت اکسیژن', location: 'اهواز,خوزستان', description: 'طرف قرارداد:شرکت دنا اکباتان' },
        p17: { title: 'اجرای سیستم الکتریکی خط نورد گرم', location: 'ایوانکی-تهران', description: 'طرف قرارداد:شرکت آریانورد امیر' },
        p18: { title: 'اجرای سیستم الکتریکی خط ذوب SMP2', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد نطنز' },
        p19: { title: 'اجرای سیستم الکتریکی خط نورد گرمRM1', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد نطنز' },
        p20: { title: 'اجرای شبکه هوایی و زمینی', location: 'شرکت کالای الکتریک', description: 'طرف قرارداد:شرکت کالای الکتریک' },
        p21: { title: 'اجرای سیستم الکتریکی خط نورد سرد', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت صنایع مفتولی توکلی' },
        p22: { title: 'اجرای سیستم الکتریکی خط نورد سرد', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت ورا صنعت شرق' },
        p23: { title: 'اجرای سیستم روشنایی', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت ذوب آهن و فولاد نطنز' },
        p24: { title: 'ساخت تابلو', location: 'سد گتوند,دزفول', description: 'طرف قرارداد:شرکت شهر آذین' },
        p25: { title: 'ساخت کوبیکل 20 ولت', location: 'اصفهان,جنب پالایشگاه', description: 'طرف قرارداد:شرکت صنایع شیر اصفهان' },
        p26: { title: 'ساخت تابلو', location: 'عسلویه', description:'توسعه احیا' },
        p27: { title: 'ساخت تابلو های 20کیلوولت', location: 'اصفهان,پالایشگاه', description: 'طرف قرارداد:پالایشگاه اصفهان' },
        p28: { title: 'اجرای شبکه هوایی 20کیلوولت', location: 'نطنز', description:'طرف قرارداد:شهرک صنعتی اصفهان' },
        p29: { title: 'توسعه 2BAY پست 63/20 کیلوولت‌', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد نطنز' },
        p30: { title: 'اجرای شبکه هوایی 20KV', location: 'استان اصفهان', description: 'طرف قرارداد:شرکت توزیع برق اصفهان' },
        p31: { title: 'دمونتاژ,تعمیر و راه اندازی 143 تابلو 5.5 کیلوولت', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p32: { title: 'سرویس تعمیر , تست و راه اندازی 60 دستگاه ترانسی (5.5کیلوولت)خط نورد RM3', location: 'نطنز,شهرک صنعتی شجاع آباد', description: 'طرف قرارداد:شرکت فولاد و ذوب آهن نطنز' },
        p33: { title: 'ساخت تابلوهای 20 کیلوولت', location: 'اصفهان,پالایشگاه', description: 'طرف قرارداد:پالایشگاه اصفهان' },
        p34: { title: 'پروژه تامین برق اسکان کارگری', location: 'منطقه برق بهمن', description: 'طرف قرارداد:برق استان تهران' },
        p35: { title: 'پروژه تغلیظ مجتمع مس جانجا', location: 'استان خراسان جنوبی', description: 'طرف قرارداد:شرکت فکور صنعت تهران' },
        p36: { title: 'مجتمع گندله سازی خرامه شیراز', location: 'شیراز', description:'طرف قرارداد:شرکت فکور صنعت تهران' },

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
        title: "خدماتنا الرئيسية",
        engineering: "هندسة المشتريات: مطابقة الطلب والمستندات الفنية للمعدات وقائمة الموردين مع منتجات المصنعين وتقديم الفروقات (Deviation) والاقتراحات البديلة (Replacement) وإعداد البيانات الفنية (Technical Data Sheet).",
        supplyIndustrial: "توفير معدات لصناعات البتروكيماويات والفولاذ واللدائن والأسمنت والصناعات التحويلية، وتوفير المواد الأولية مثل فروسليكون (FeSi)، فيرومنجنيز (FeMn)، الدولوميت، الجير (Lime)، تركيز الحديد والهيماتيت.",
        bulkMaterial: "توفير المواد العامة Bulk Material المطلوبة للصناعات والمشاريع العمرانية والصناعية.",
        qualityControl: "مراقبة الجودة، التفتيش أثناء التصنيع، التفتيش في المصدر، إعداد ومراجعة الكمية والشحن، والتنسيق مع شركات التفتيش الخارجية."
      },
      hexagons: {
        electricity: "كهرباء",
        instrumentation: "أجهزة دقيقة",
        specialAlloys: "سبائك فولاذية خاصة",
        mechanicsPiping: "ميكانيكا وأنابيب",
        qualityAssurance: "ضمان الجودة",
        warranty: "الضمان، التركيب والتشغيل"
      },
      secondaryContent: {
        title: "توفير السلع المحلية والدولية",
        items: [
          "توفير السلع الدولية وتقديم الشهادات والموافقات من المصنعين والمستندات الجمركية.",
          "توفير المنتجات والمواد المحلية المطلوبة للمصنعين حسب الطلب."
        ]
      }
    },
    header: {
      title: "هندسة المشتريات وتوريد المعدات الصناعية",
      imageAlt: "صورة لمصنع صناعي"
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      projects: "المشاريع",
      services: "الخدمات",
      news: "الأخبار",
      contact: "اتصل بنا",
      cta: "طلب التعاون",
      selectLanguage: "اختر اللغة"
    },
    hero: {
      title: "المتخصصون في مشاريع الكهرباء والغاز وتصنيع الكرة الصناعية",
      subtitle: "من التصميم والهندسة إلى التنفيذ وتشغيل المشاريع الصناعية بجانبكم",
      cta: "عرض المشاريع",
      learnMore: "الحصول على استشارة فنية"
    },
    intro: {
      title: "أكثر من 25 سنة من التميز الصناعي",
      description: "لقد نفذت شركتنا، بخبرة تزيد عن 25 عامًا في المشاريع الصناعية في مجالات الكهرباء والأجهزة الدقيقة والميكانيكا والإنشاءات المدنية والهندسة المعمارية، العديد من المشاريع مع كبرى الشركات الصناعية والمعدنية في البلاد.",
      stat1: "سنوات خبرة",
      stat2: "مشاريع ناجحة",
      stat3: "مهندسون متخصصون"
    },
    services: {
      title: "خدماتنا الرئيسية",
      electrical: "مشاريع الكهرباء والأجهزة الدقيقة",
      electricalDesc: "تصميم وتوريد معدات الشبكات، الأعمال الإنشائية، التركيب وتشغيل محطات التوزيع والفوق التوزيع",
      substations: "محطات التوزيع والفوق التوزيع",
      substationsDesc: "",
      gas: "خطوط نقل الغاز",
      gasDesc: "توريد الغاز للصناعات والمجمعات السكنية، وتركيب ونقل وتجميع التفرعات",
      automation: "المدنية والمعمارية",
      automationDesc: "تنفيذ أنظمة التشغيل الآلي المتقدمة القائمة على PLC والأجهزة الدقيقة",
      pelletizing: "الميكانيكا والتأسيسات",
      pelletizingDesc: "حلول متكاملة لمصانع تصنيع الكرة، من تصميم العمليات إلى التنفيذ الميكانيكي والكهربائي",
      epc: "مشاريع EPC الصناعية",
      epcDesc: "خدمات EPC شاملة (الهندسة، التوريد، البناء) للصناعات المعدنية والفولاذية"
    },
    clients: {
      title: "عملائنا الكرام"
    },
    projects: {
      title: "المشاريع المختارة",
      viewAll: "عرض جميع المشاريع",
      category: "الفئة",
      location: "الموقع",
      year: "السنة"
    },
    newsPage: {
      badge: "آخر التحديثات",
      title: "الأخبار والرؤى",
      subtitle: "تابع أحدث إنجازات المشاريع والتطورات التقنية والرؤى الصناعية.",
      readMore: "اقرأ المزيد",
      latestTitle: "آخر الأخبار",
      latestSubtitle: "مختارات من أبرز التطورات في الطاقة والمشاريع الصناعية.",
      viewProjects: "استعرض المشاريع",
      categories: {
        all: "جميع الأخبار",
        projects: "إنجازات المشاريع",
        energy: "أنظمة الطاقة",
        sustainability: "الاستدامة",
        technology: "التقنية",
      },
      highlights: {
        total: "قصص منشورة",
        awards: "جوائز صناعية",
        partners: "شركاء استراتيجيون",
      },
      featured: {
        category: "مميز",
        title: "تسليم محطة الضغط العالي في نطنز قبل الموعد",
        excerpt: "تنفيذ متعدد التخصصات مع ترقية الأتمتة ورفع مستوى السلامة التشغيلية دون توقف الإنتاج.",
        date: "مايو 2024",
        readTime: "6 دقائق قراءة",
        body: [
          "أكمل فريقنا توسعة المحطة مع الحفاظ على تشغيل الموقع دون توقف أثناء أعمال الترقية.",
          "تمت إضافة مرحلات رقمية وروابط اتصال احتياطية ولوحات مراقبة تمنح المشغلين تشخيصًا أفضل.",
          "انتهى المشروع قبل الموعد، مما سمح للعميل بتسريع الإنتاج.",
        ],
      },
      items: {
        story1: {
          category: "تنفيذ",
          title: "تشغيل حزمة أتمتة متقدمة لخط التكوير",
          excerpt: "تكامل نظام PLC جديد لتعزيز الأداء والكفاءة ومراقبة الطاقة.",
          date: "أبريل 2024",
          readTime: "4 دقائق قراءة",
          body: [
            "تم استبدال اللوحات القديمة بحزمة PLC وSCADA متكاملة مصممة للعمليات عالية الإنتاجية.",
            "تم توحيد إدارة الإنذارات وإضافة لوحات صيانة تنبؤية مع مزامنة المشغلات لتقليل التآكل.",
            "أُنجزت عملية التشغيل على مراحل للحفاظ على خطة الإنتاج.",
          ],
        },
        story2: {
          category: "هندسة",
          title: "إنجاز ترقية توزيع الطاقة للمجمع الصناعي",
          excerpt: "تحديث شامل لشبكات MV/LV لتحسين توازن الأحمال وتقليل المخاطر.",
          date: "مارس 2024",
          readTime: "5 دقائق قراءة",
          body: [
            "أعادت فرق الهندسة تهيئة المغذيات وأضافت حماية لقضبان التوزيع وخطة تحويل مرحلية.",
            "حسّنت الترقية استقرار الجهد في أوقات الذروة ورفعت مستوى الاعتمادية.",
            "أصبح لدى المشغلين رؤية مركزية لأحمال الشبكة وجداول الصيانة.",
          ],
        },
        news1: {
          category: "الشبكة",
          title: "تركيب مرحلات حماية جديدة لمحطة إقليمية",
          excerpt: "تنسيق حماية حديث زاد من الاعتمادية وسرّع الاستجابة.",
          date: "فبراير 2024",
          readTime: "3 دقائق قراءة",
          body: [
            "تم تركيب مرحلات رقمية بتهيئة متزامنة لتقليل الفصل غير الضروري.",
            "شملت الاختبارات محاكاة الأعطال وتحليل زمن القواطع وفحص الإشارات من طرف إلى طرف.",
            "أصبحت المحطة متوافقة مع متطلبات الشبكة الحديثة وأكثر موثوقية.",
          ],
        },
        news2: {
          category: "الإنشاء",
          title: "إنجاز مسارات كابلات ذكية لخط إنتاج الفولاذ",
          excerpt: "إدارة دقيقة للكابلات لتسريع مرحلة التشغيل.",
          date: "يناير 2024",
          readTime: "4 دقائق قراءة",
          body: [
            "قلّلت المسارات المعيارية ازدحام الكابلات وخفضت زمن التركيب.",
            "ساعدت الملصقات الملونة والخرائط الرقمية في تسهيل الصيانة والتوسع.",
            "أدى ذلك إلى تشغيل أسرع وتقليل التعديلات الميدانية.",
          ],
        },
        news3: {
          category: "الاستدامة",
          title: "تدقيق الطاقة يخفض الاستهلاك السنوي",
          excerpt: "تم تحديد تحسينات فاعلة لمعدات الاستهلاك العالي.",
          date: "ديسمبر 2023",
          readTime: "5 دقائق قراءة",
        },
        news4: {
          category: "السلامة",
          title: "تحقيق إنجاز بدون حوادث في مواقع العمل",
          excerpt: "ثقافة السلامة والتدريب الوقائي يحافظان على أمان المشاريع.",
          date: "نوفمبر 2023",
          readTime: "3 دقائق قراءة",
        },
      },
      cta: {
        title: "احصل على تقارير تقنية واتجاهات الصناعة",
        subtitle: "اطلب الإحاطات الفنية والتحديثات المتخصصة والرؤى من فريقنا الهندسي.",
        primary: "طلب إحاطة",
        secondary: "عرض الخدمات",
      },
      detail: {
        backToNews: "العودة إلى الأخبار",
        notFound: "لم يتم العثور على الخبر",
        notFoundSubtitle: "قد يكون هذا الخبر قد نُقل أو لم يعد متاحًا.",
        ctaPrimary: "ابدأ مناقشة مشروع",
        ctaSecondary: "استعرض المشاريع",
      },
    },
    whyUs: {
      title: "لماذا اختيار بهين آوران نیرو؟",
      item1: "قدرة تنفيذ عالية في المشاريع الثقيلة",
      item2: "الالتزام بالمعايير العالمية (IEC, NEMA, NFPA)",
      item3: "فريق من المهندسين المتخصصين والمخلصين",
      item4: "الالتزام بتسليم المشاريع في الوقت المحدد",
      item5: "خبرة مثبتة في البيئات الصناعية الصعبة",
      item6: "سلسلة توريد قوية للمعدات والمواد"
    },
    workflow: {
      title: "طريقة تنفيذ المشروع",
      step1: "تحديد الاحتياجات وزيارة الموقع",
      step1Desc: "نبدأ بفهم متطلباتكم وتحليل الموقع بدقة",
      step2: "التصميم الهندسي والاقتراح",
      step2Desc: "يعد مهندسونا خطة فنية دقيقة واقتراح شامل للمشروع",
      step3: "تنفيذ المشروع بالكامل",
      step3Desc: "ندير جميع مراحل التوريد والبناء والتركيب بدقة",
      step4: "الاختبار والتشغيل",
      step4Desc: "يتم إنهاء المشروع مع اختبارات دقيقة وتشغيل وتسليم نهائي"
    },
    certifications: {
      title: "الشهادات والمعايير",
      description: "نلتزم بأعلى المعايير الصناعية لضمان الجودة والسلامة والثقة في كل مشروع"
    },
    about: {
      title: "من نحن",
      subtitle: "التميز في المقاولات الكهربائية والغازية",
      description: "بدأت شركة مهندسي بهين آوران نیرو منذ عام 1378 مع فريق شاب ومجتهد في مجالات الكهرباء والغاز والنفط، واستمرت في تقديم المشاريع الموكلة إليها بكفاءة عالية لخدمة البلاد.",
      story: {
        title: "قصتنا",
        p2: "نأمل من خلال هذا التقرير عن المشاريع المنفذة أن نتمكن من التعاون مع الشركات الموقرة."
      },
      coreValues: {
        title: "قيمنا الأساسية",
        excellence: "التميز",
        excellenceDesc: "ملتزمون بتقديم أعلى جودة في كل مشروع",
        teamwork: "العمل الجماعي",
        teamworkDesc: "نهج التعاون مع خبراء ذوي خبرة",
        innovation: "الابتكار",
        innovationDesc: "استخدام طرق وتقنيات متقدمة",
        integrity: "النزاهة",
        integrityDesc: "صادقون وشفافون في جميع معاملتنا"
      },
      vision: "رؤيتنا",
      visionText: "أن نكون الشركة الأكثر موثوقية وابتكارًا في المقاولات الكهربائية والغازية في المنطقة",
      mission: "مهمتنا",
      missionText: "تقديم جودة استثنائية وسلامة وموثوقية في كل مشروع نقوم به",
      values: "قيمنا",
      valuesText: "النزاهة، الابتكار، السلامة ورضا العملاء"
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "ابق على تواصل معنا",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      message: "رسالتك",
      send: "إرسال الرسالة",
      info: "معلومات الاتصال",
      address: "العنوان",
      addressText: "ميرداماد، شارع كازرون الشمالية، شارع نيك راي، رقم 2، الطابق الثالث، الوحدة 6",
      formTitle: "أرسل لنا رسالة",
      businessHours: {
        title: "ساعات العمل",
        monFri: "السبت - الأربعاء: 8:00 صباحًا حتى 6:00 مساءً",
        saturday: "الخميس: 9:00 صباحًا حتى 2:00 ظهرًا",
        sunday: "الجمعة: عطلة"
      }
    },
    projectsPage: {
      title: "مشاريعنا",
      subtitle: "استكشاف مشاريعنا الناجحة في مجالات الكهرباء والغاز والصناعة",
      categories: {
        all: "الكل",
        industrial: "الكهرباء",
        transmission: "الفوق التوزيع",
        panels: "لوحات ومعدات",
        infrastructure: "الهندسة المدنية والمعمارية"
      }
    },
    projectsData: {
      p1: { title: "تنفيذ Ladder & Tray في وحدات ASP, LF, EAF بطول 15 كم", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع صهر الحديد البرز ناب آرش" },
      p2: { title: "تنفيذ وحدة (SVC, STATIC VAR COMPENSATOR) 33KV", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع صهر الحديد البرز ناب آرش" },
      p3: { title: "تنفيذ النظام الكهربائي والأجهزة الدقيقة لوحدة إنتاج الأكسجين ASP", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع صهر الحديد البرز ناب آرش" },
      p4: { title: "تنفيذ النظام الكهربائي والأجهزة الدقيقة لوحدات MeltShop", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع صهر الحديد البرز ناب آرش" },
      p5: { title: "تركيب نظام التأريض بطول 10 كم", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع البرز غرب" },
      p6: { title: "تنفيذ Ladder & Tray خط 33KV في قناة التأسيسات بطول 8 كم", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع صهر الحديد البرز ناب آرش" },
      p7: { title: "تصميم وهندسة النظام الكهربائي للوحدات FTP, CCM, LF, EAF", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع البرز غرب" },
      p8: { title: "تركيب لوحات MV & LV", location: "ابهار، المدينة الصناعية نورين", description: "طرف العقد: مجمع البرز غرب" },
      p9: { title: "تنفيذ النظام الكهربائي والأجهزة الدقيقة", location: "شيراز، كوار", description: "طرف العقد: مجمع صناعي صهر الحديد پاسارگاد" },
      p10: { title: "تنفيذ وحدة SVC", location: "شيراز، جهرم", description: "طرف العقد: مجمع صناعي صهر الحديد پاسارگاد" },
      p11: { title: "تنفيذ محطة 230/33 كيلو فولت", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد وصهر الحديد نطنز" },
      p12: { title: "تنفيذ محطة 63/20 كيلو فولت", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد وصهر الحديد نطنز" },
      p13: { title: "تنفيذ النظام الكهربائي لأكبر خط لف الكابل الحار في الشرق الأوسط", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد نطنز" },
      p14: { title: "تنفيذ كابل Cross Link 33 كيلو فولت بمقاطع 400 و 500 ملم²", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد وصهر الحديد نطنز" },
      p15: { title: "تنفيذ النظام الكهربائي لصالة صهر 100 طن", location: "ملاير - همدان", description: "طرف العقد: شركة دنا اكباتان" },
      p16: { title: "تركيب كامل محطة الأكسجين", location: "أهواز، خوزستان", description: "طرف العقد: شركة دنا اكباتان" },
      p17: { title: "تنفيذ النظام الكهربائي لخط الدرفلة الساخنة", location: "ايوانكي-طهران", description: "طرف العقد: شركة آريانورد أمير" },
      p18: { title: "تنفيذ النظام الكهربائي لخط صهر SMP2", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد نطنز" },
      p19: { title: "تنفيذ النظام الكهربائي لخط الدرفلة الساخنة RM1", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد نطنز" },
      p20: { title: "تنفيذ الشبكة الهوائية والأرضية", location: "شركة كالا إلكتريك", description: "طرف العقد: شركة كالا إلكتريك" },
      p21: { title: "تنفيذ النظام الكهربائي لخط الدرفلة الباردة", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة صناعات موفتولي توكلي" },
      p22: { title: "تنفيذ النظام الكهربائي لخط الدرفلة الباردة", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة ورا صناعة الشرق" },
      p23: { title: "تنفيذ نظام الإضاءة", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة صهر الحديد وفولاد نطنز" },
      p24: { title: "صنع اللوحات الكهربائية", location: "سد جتوند، دزفول", description: "طرف العقد: شركة شهر آذين" },
      p25: { title: "صنع الكابينة 20 فولت", location: "اصفهان، بجانب مصفاة النفط", description: "طرف العقد: شركة صناعات الحليب اصفهان" },
      p26: { title: "صنع اللوحات الكهربائية", location: "عسلویه", description: "توسيع الإحياء" },
      p27: { title: "صنع لوحات 20 كيلو فولت", location: "اصفهان، المصفاة", description: "طرف العقد: مصفاة اصفهان" },
      p28: { title: "تنفيذ الشبكة الهوائية 20 كيلو فولت", location: "نطنز", description: "طرف العقد: المدينة الصناعية اصفهان" },
      p29: { title: "توسيع 2BAY محطة 63/20 كيلو فولت", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد نطنز" },
      p30: { title: "تنفيذ الشبكة الهوائية 20KV", location: "محافظة اصفهان", description: "طرف العقد: شركة توزيع الكهرباء اصفهان" },
      p31: { title: "فك، إصلاح وتشغيل 143 لوحة 5.5 كيلو فولت", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد وصهر الحديد نطنز" },
      p32: { title: "خدمة، اختبار وتشغيل 60 جهاز ترانس (5.5 كيلو فولت) خط الدرفلة RM3", location: "نطنز، المدينة الصناعية شجاع آباد", description: "طرف العقد: شركة فولاد وصهر الحديد نطنز" },
      p33: { title: "صنع لوحات 20 كيلو فولت", location: "اصفهان، المصفاة", description: "طرف العقد: مصفاة اصفهان" },
      p34: { title: "مشروع توفير كهرباء لمساكن العمال", location: "منطقة كهرباء بهمن", description: "طرف العقد: كهرباء محافظة طهران" },
      p35: { title: "مشروع تركيز مجمع مس جانجا", location: "محافظة خراسان الجنوبي", description: "طرف العقد: شركة فكور صناعات طهران" },
      p36: { title: "مجمع تصنيع الكرة خرامه شيراز", location: "شيراز", description: "طرف العقد: شركة فكور" }
    },
    servicesPage: {
      title: "خدماتنا",
      subtitle: "تقديم حلول شاملة ومتكاملة للتحديات الصناعية المعقدة"
    },
    footer: {
      description: "خدمات مقاولات كهرباء وغاز وصناعية باحترافية وموثوقية",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      rights: "جميع الحقوق محفوظة"
    },
    recordsPage: {
      title: "السجلات",
      subtitle: "سجلات الشركة والمشاريع السابقة",
      intro: "تتضمن هذه الصفحة سجلات الشركة، ملخصًا للمشاريع الرئيسية، ومعلومات تاريخية عن أنشطتنا.",
      note: "سيتم استكمال المحتوى قريبًا."
    }
  }
  }
}
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
