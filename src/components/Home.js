import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const destinations = [
    {
      name: t('navigation.thailand'),
      path: '/thailand',
      flag: '🇹🇭',
      image: 'thailand-bg'
    },
    {
      name: t('navigation.vietnam'),
      path: '/vietnam',
      flag: '🇻🇳',
      image: 'vietnam-bg'
    },
    {
      name: t('navigation.bali'),
      path: '/bali',
      flag: '🇮🇩',
      image: 'bali-bg'
    },
    {
      name: t('navigation.kualaLumpur'),
      path: '/kuala-lumpur',
      flag: '🇲🇾',
      image: 'kl-bg'
    }
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t('home.title')}</h1>
          <p className="hero-subtitle">{t('home.subtitle')}</p>
          <p className="hero-description">{t('home.description')}</p>
        </div>
      </div>

      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <Link 
            key={index}
            to={destination.path}
            className={`destination-card ${destination.image}`}
          >
            <div className="destination-overlay">
              <span className="destination-flag">{destination.flag}</span>
              <h3 className="destination-name">{destination.name}</h3>
              <button className="destination-btn">{t('home.getStarted')}</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;