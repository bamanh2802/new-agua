'use client'

import React from "react";
import "./header.css"; // Nhập CSS cho kiểu dáng
import { MapPinIcon, LanguageIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Để sử dụng biểu tượng
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"; // Biểu tượng rắn
import {
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Biểu tượng thương hiệu
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

const Header = () => {
  const g = useTranslations('Global');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  
  // Function to switch language
  const switchLanguage = (newLocale: string) => {
    // Get the current path without the locale prefix
    const segments = pathname.split('/');
    const pathnameWithoutLocale = segments.length > 2 ? '/' + segments.slice(2).join('/') : '/';
    
    // Redirect to the same page with the new locale
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
  };
  
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="header-item">
            <MapPinIcon className="header-iconn" />
            <span>{g('location')}</span>
          </div>

          <div className="header-item">
            <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
            <span>{g('email')}</span>
          </div>
        </div>
        
        <div className="header-right">
          {/* Language switcher */}
          <div className="language-switcher">
            <LanguageIcon className="header-iconn" />
            <div className="language-options">
              <button 
                className={`lang-option ${locale === 'vi' ? 'active' : ''}`} 
                onClick={() => switchLanguage('vi')}
              >
                VI
              </button>
              <span className="lang-divider">|</span>
              <button 
                className={`lang-option ${locale === 'en' ? 'active' : ''}`} 
                onClick={() => switchLanguage('en')}
              >
                EN
              </button>
            </div>
          </div>
          
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;