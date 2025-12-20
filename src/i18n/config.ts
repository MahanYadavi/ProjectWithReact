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
        p36: { title: 'مجتمع گندله سازی خرامه شیراز', location: 'شیراز', description: 'طرف قرارداد:شرکت فکور صنعت تهران' } },
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
    },

    nav: {
      home: "الرئيسية",
      about: "من نحن",
      records: "السجلات",
      projects: "المشاريع",
      services: "الخدمات",
      contact: "اتصل بنا",
      cta: "طلب تعاون",
      selectLanguage: "اختر اللغة"
    },

    hero: {
      title: "تنفيذ متخصص لمشاريع الكهرباء والغاز وتكوير الخام على نطاق صناعي",
      subtitle: "من التصميم والهندسة إلى التنفيذ والتشغيل، نقدم التميز مع فريق من الخبراء والمعايير العالمية.",
      cta: "عرض المشاريع",
      learnMore: "احصل على استشارة فنية"
    },

    intro: {
      title: "أكثر من ١٥ عامًا من التميز الصناعي",
      description: "بفضل خبرتنا التي تزيد عن ١٥ عامًا في تنفيذ مشاريع EPC، وأنظمة الطاقة الصناعية، وخطوط نقل الغاز، ومصانع تكوير الخام.",
      stat1: "سنوات من الخبرة",
      stat2: "مشروع ناجح",
      stat3: "مهندس خبير"
    },

    services: {
      title: "خدماتنا الأساسية",
      electrical: "مشاريع الكهرباء الصناعية والمباني",
      electricalDesc: "تنفيذ أنظمة كهربائية للجهد العالي والمنخفض.",
      substations: "المحطات الفرعية ولوحات MV/LV",
      substationsDesc: "تصميم وتنفيذ المحطات الكهربائية.",
      gas: "خطوط نقل الغاز",
      gasDesc: "تركيب واختبار وتشغيل خطوط الغاز.",
      automation: "الأتمتة والأجهزة الدقيقة",
      automationDesc: "تنفيذ أنظمة PLC والأجهزة الدقيقة.",
      pelletizing: "مشاريع تكوير الخام",
      pelletizingDesc: "حلول متكاملة لمصانع التكوير.",
      epc: "مشاريع EPC الصناعية",
      epcDesc: "خدمات EPC شاملة."
    },

    footer: {
      description: "خدمات مقاولات الكهرباء والغاز والصناعة المهنية.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      rights: "جميع الحقوق محفوظة."
    },

    recordsPage: {
      title: "السجلات",
      subtitle: "سجلات الشركة والمشاريع السابقة",
      intro: "معلومات تاريخية عن أعمالنا.",
      note: "المحتوى قيد الإعداد."
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
