'use client';

import React, { useState, use } from 'react';
import { useTranslation } from '../../i18n/client';
import Navigation from '../../components/Navigation';

export default function Vietnam({ params }) {
  const { lang } = use(params);
  const { t } = useTranslation(lang);
  const [activeLocation, setActiveLocation] = useState('general');

  const locations = [
    {
      key: 'general',
      name: t('vietnam.locations.general'),
      icon: '🇻🇳'
    },
    {
      key: 'danang',
      name: t('vietnam.locations.danang'),
      icon: '🏖️'
    },
    {
      key: 'phuquoc',
      name: t('vietnam.locations.phuquoc'),
      icon: '🏝️'
    }
  ];

  const getSections = (location) => {
    return [
      {
        key: 'visa',
        icon: '📄',
        title: t('vietnam.sections.visa'),
        content: t(`vietnam.content.${location}.visa`)
      },
      {
        key: 'housing',
        icon: '🏠',
        title: t('vietnam.sections.housing'),
        content: t(`vietnam.content.${location}.housing`)
      },
      {
        key: 'cost',
        icon: '💰',
        title: t('vietnam.sections.cost'),
        content: t(`vietnam.content.${location}.cost`)
      },
      {
        key: 'healthcare',
        icon: '🏥',
        title: t('vietnam.sections.healthcare'),
        content: t(`vietnam.content.${location}.healthcare`)
      },
      {
        key: 'culture',
        icon: '🏛️',
        title: t('vietnam.sections.culture'),
        content: t(`vietnam.content.${location}.culture`)
      }
    ];
  };

  return (
    <>
      <Navigation lang={lang} />
      <div className="country-page vietnam-page">
        <div className="country-header">
          <div className="country-flag">🇻🇳</div>
          <h1 className="country-title">{t('vietnam.title')}</h1>
        </div>

        <div className="location-tabs">
          {locations.map((location) => (
            <button
              key={location.key}
              className={`location-tab ${activeLocation === location.key ? 'active' : ''}`}
              onClick={() => setActiveLocation(location.key)}
            >
              <span className="location-icon">{location.icon}</span>
              <span className="location-name">{location.name}</span>
            </button>
          ))}
        </div>

        <div className="sections-container">
          {getSections(activeLocation).map((section, index) => (
            <div key={index} className="section-card">
              <div className="section-header">
                <span className="section-icon">{section.icon}</span>
                <h2 className="section-title">{section.title}</h2>
              </div>
              <div className="section-content">
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
