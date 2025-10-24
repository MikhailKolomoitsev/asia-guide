'use client';

import React, { useState, useEffect, useRef, use } from 'react';
import Link from 'next/link';
import { useTranslation } from '../i18n/client';
import ComparisonTable from '../components/ComparisonTable';
import AsianParticles from '../components/AsianParticles';
import { useRouter } from 'next/navigation';

export default function Home({ params }) {
  const { lang } = use(params);
  const { t } = useTranslation(lang);
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const [isPhoneFrameHidden, setIsPhoneFrameHidden] = useState(false);
  const cardsRef = useRef([]);
  const router = useRouter();

  const changeLanguage = (newLang) => {
    router.push(`/${newLang}`);
  };

  const hidePhoneFrame = () => {
    setIsPhoneFrameHidden(true);
  };

  const showPhoneFrame = () => {
    setIsPhoneFrameHidden(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1024) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      let newActiveIndex = -1;

      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const cardTop = cardRect.top + scrollY;
          const cardBottom = cardTop + cardRect.height;

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

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const destinations = [
    {
      name: t('navigation.thailand'),
      path: `/${lang}/thailand`,
      flag: '🇹🇭',
      image: 'thailand-bg'
    },
    {
      name: t('navigation.vietnam'),
      path: `/${lang}/vietnam`,
      flag: '🇻🇳',
      image: 'vietnam-bg'
    },
    {
      name: t('navigation.bali'),
      path: `/${lang}/bali`,
      flag: '🇮🇩',
      image: 'bali-bg'
    },
    {
      name: t('navigation.kualaLumpur'),
      path: `/${lang}/kuala-lumpur`,
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
            className={lang === 'en' ? 'lang-btn active' : 'lang-btn'}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('uk')}
            className={lang === 'uk' ? 'lang-btn active' : 'lang-btn'}
          >
            УК
          </button>
        </div>
      </div>

      <div className="hero-section">
        
        <div className="hero-background-image">
          <img src="/content/home_main.PNG" alt="author" />
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <div className={`hero-video-frame ${isPhoneFrameHidden ? 'manually-hidden' : ''}`}>
              <button
                className="phone-frame-hide-btn"
                onClick={hidePhoneFrame}
                aria-label="Hide phone preview"
                title="Hide phone preview"
              >
                ✕
              </button>
              <div className="iphone-frame">
                <div className="iphone-notch"></div>
                <video
                  className="iphone-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/content/presentation.MOV" type="video/mp4" />
                </video>
              </div>
            </div>
            <h1 className="hero-name" dangerouslySetInnerHTML={{ __html: t('home.heroName') }}></h1>
            <p className="hero-tagline">{t('home.description')}</p>
            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary">
                {t('home.auth.registerBtn')}
              </button>
            </div>
          </div>
        </div>
        <button
          className={`phone-frame-show-btn ${isPhoneFrameHidden ? 'visible' : ''}`}
          onClick={showPhoneFrame}
          aria-label="Show phone preview"
          title="Show phone preview"
        >
          📱
        </button>
      </div>

      {isRegistered ? (
        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <Link
              key={index}
              href={destination.path}
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
            {[
              { icon: '💎', key: 'budget' },
              { icon: '❤️', key: 'crafted' },
              { icon: '🏠', key: 'accommodation' },
              { icon: '🗺️', key: 'destinations' },
              { icon: '🍜', key: 'food' },
              { icon: '🍽️', key: 'dining' },
              { icon: '⚠️', key: 'avoid' },
              { icon: '🧠', key: 'mentality' },
              { icon: '💰', key: 'money' }
            ].map((card, index) => (
              <div
                key={index}
                className={`content-card ${activeCardIndex === index ? 'scroll-active' : ''}`}
                tabIndex="0"
                ref={el => cardsRef.current[index] = el}
              >
                <div className="content-card-icon">{card.icon}</div>
                <h4 className="content-card-title">{t(`home.preview.cards.${card.key}.title`)}</h4>
                <p className="content-card-description">{t(`home.preview.cards.${card.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bonus-section">
        <h3 className="bonus-title">{t('home.bonus.title')}</h3>
      </div>

      <ComparisonTable lang={lang} />

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
}
