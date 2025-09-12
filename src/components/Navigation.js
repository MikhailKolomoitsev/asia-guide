import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🌴 Asia Explorer
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className={isActive('/')}>
            {t('navigation.home')}
          </Link>
          <Link to="/thailand" className={isActive('/thailand')}>
            {t('navigation.thailand')}
          </Link>
          <Link to="/vietnam" className={isActive('/vietnam')}>
            {t('navigation.vietnam')}
          </Link>
          <Link to="/bali" className={isActive('/bali')}>
            {t('navigation.bali')}
          </Link>
          <Link to="/kuala-lumpur" className={isActive('/kuala-lumpur')}>
            {t('navigation.kualaLumpur')}
          </Link>
        </div>

        <div className="language-switcher">
          <span>{t('navigation.language')}: </span>
          <button 
            onClick={() => changeLanguage('en')}
            className={i18n.language === 'en' ? 'lang-btn active' : 'lang-btn'}
          >
            EN
          </button>
          <button 
            onClick={() => changeLanguage('uk')}
            className={i18n.language === 'uk' ? 'lang-btn active' : 'lang-btn'}
          >
            УК
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;