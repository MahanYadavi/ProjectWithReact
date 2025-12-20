import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-950 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
            </div>
            {/* <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p> */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.projects')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">{t('footer.services')}</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{t('services.electrical')}</li>
              <li>{t('services.substations')}</li>
              <li>{t('services.automation')}</li>
              <li>{t('services.pelletizing')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">{t('contact.info')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 rtl:space-x-reverse text-gray-400">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('contact.addressText')}</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-sm">02122905211</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <span className="text-sm">info@mobanir.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; Mobanir {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
