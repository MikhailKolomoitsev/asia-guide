import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ComparisonTable from './ComparisonTable';
import AsianParticles from './AsianParticles';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const cardsRef = useRef([]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Only activate on mobile/tablet screens
      if (window.innerWidth > 1024) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let newActiveIndex = -1;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardTop = cardRect.top + scrollY;
          const cardBottom = cardTop + cardRect.height;

          // Check if card is in the center third of the viewport
          const viewportCenter = scrollY + windowHeight / 2;
          const centerThird = windowHeight / 3;

          if (cardTop <= viewportCenter + centerThird / 2 &&
              cardBottom >= viewportCenter - centerThird / 2) {
            newActiveIndex = index;
          }
        }
      });

      setActiveCardIndex(newActiveIndex);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

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
      <div className="home-language-switcher">
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

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{t('home.title')}</h1>

          <div className="main-image-container">
            <img src="/main.png" alt="Southeast Asia Guide" className="main-image" />
          </div>
          <p className="hero-description">{t('home.description')}</p>
        </div>
      </div>

      {isRegistered ? (
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
      ) : (
        <div className="content-preview">
          <AsianParticles />
          <h3 className="preview-title">{t('home.preview.title')}</h3>
          <div className="content-cards-grid">
            <div
              className={`content-card ${activeCardIndex === 0 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[0] = el}
            >
              <div className="content-card-icon">💎</div>
              <h4 className="content-card-title">{t('home.preview.cards.budget.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.budget.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 1 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[1] = el}
            >
              <div className="content-card-icon">❤️</div>
              <h4 className="content-card-title">{t('home.preview.cards.crafted.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.crafted.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 2 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[2] = el}
            >
              <div className="content-card-icon">🏠</div>
              <h4 className="content-card-title">{t('home.preview.cards.accommodation.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.accommodation.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 3 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[3] = el}
            >
              <div className="content-card-icon">🗺️</div>
              <h4 className="content-card-title">{t('home.preview.cards.destinations.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.destinations.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 4 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[4] = el}
            >
              <div className="content-card-icon">🍜</div>
              <h4 className="content-card-title">{t('home.preview.cards.food.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.food.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 5 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[5] = el}
            >
              <div className="content-card-icon">🍽️</div>
              <h4 className="content-card-title">{t('home.preview.cards.dining.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.dining.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 6 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[6] = el}
            >
              <div className="content-card-icon">⚠️</div>
              <h4 className="content-card-title">{t('home.preview.cards.avoid.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.avoid.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 7 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[7] = el}
            >
              <div className="content-card-icon">🧠</div>
              <h4 className="content-card-title">{t('home.preview.cards.mentality.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.mentality.description')}</p>
            </div>

            <div
              className={`content-card ${activeCardIndex === 8 ? 'scroll-active' : ''}`}
              tabIndex="0"
              ref={el => cardsRef.current[8] = el}
            >
              <div className="content-card-icon">💰</div>
              <h4 className="content-card-title">{t('home.preview.cards.money.title')}</h4>
              <p className="content-card-description">{t('home.preview.cards.money.description')}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bonus-section">
        <h3 className="bonus-title">{t('home.bonus.title')}</h3>
      </div>

      <ComparisonTable />

      <div className="teaser-section">
        <h3 className="teaser-title">{t('home.teaser.title')}</h3>
      </div>

      {!isRegistered && (
        <div className="auth-section">
          <div className="auth-content">
            <h2 className="auth-title">{t('home.auth.title')}</h2>
            <p className="auth-description">
              {t('home.auth.description')}
            </p>
            <div className="auth-buttons">
              <button
                className="auth-btn register-btn"
                onClick={() => setIsRegistered(true)}
              >
                {t('home.auth.registerBtn')}
              </button>
              <div className="auth-separator"></div>
              <button
                className="auth-btn login-btn"
                onClick={() => setIsRegistered(true)}
              >
                {t('home.auth.loginBtn')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;