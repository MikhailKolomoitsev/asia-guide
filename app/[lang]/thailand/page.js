'use client';

import React, { useState, use } from 'react';
import { useTranslation } from '../../i18n/client';
import Navigation from '../../components/Navigation';

export default function Thailand({ params }) {
  const { lang } = use(params);
  const { t } = useTranslation(lang);
  const [activeLocation, setActiveLocation] = useState('general');

  const locations = [
    {
      key: 'general',
      name: t('thailand.locations.general'),
      icon: '🇹🇭'
    },
    {
      key: 'islands',
      name: t('thailand.locations.islands'),
      icon: '🏝️'
    },
    {
      key: 'phuket',
      name: t('thailand.locations.phuket'),
      icon: '🏖️'
    },
    {
      key: 'bangkok',
      name: t('thailand.locations.bangkok'),
      icon: '🏙️'
    },
    {
      key: 'chiangmai',
      name: t('thailand.locations.chiangmai'),
      icon: '🏔️'
    }
  ];

  const getSections = (location) => {
    return [
      {
        key: 'visa',
        icon: '📄',
        title: t('thailand.sections.visa'),
        content: t(`thailand.content.${location}.visa`)
      },
      {
        key: 'housing',
        icon: '🏠',
        title: t('thailand.sections.housing'),
        content: t(`thailand.content.${location}.housing`)
      },
      {
        key: 'cost',
        icon: '💰',
        title: t('thailand.sections.cost'),
        content: t(`thailand.content.${location}.cost`)
      },
      {
        key: 'healthcare',
        icon: '🏥',
        title: t('thailand.sections.healthcare'),
        content: t(`thailand.content.${location}.healthcare`)
      },
      {
        key: 'culture',
        icon: '🏛️',
        title: t('thailand.sections.culture'),
        content: t(`thailand.content.${location}.culture`)
      }
    ];
  };

  return (
    <>
      <Navigation lang={lang} />
      <div className="country-page thailand-page">
        <div className="country-header">
          <div className="country-flag">🇹🇭</div>
          <h1 className="country-title">{t('thailand.title')}</h1>
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
