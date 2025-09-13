import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Vietnam = () => {
  const { t } = useTranslation();
  const [activeLocation, setActiveLocation] = useState('general');

  const locations = [
    { key: 'general', icon: '🇻🇳', name: t('vietnam.locations.general') },
    { key: 'danang', icon: '🏖️', name: t('vietnam.locations.danang') },
    { key: 'phuquoc', icon: '🏝️', name: t('vietnam.locations.phuquoc') }
  ];

  const sections = [
    {
      key: 'visa',
      icon: '📄',
      title: t('vietnam.sections.visa'),
      content: t(`vietnam.content.${activeLocation}.visa`)
    },
    {
      key: 'housing',
      icon: '🏠',
      title: t('vietnam.sections.housing'),
      content: t(`vietnam.content.${activeLocation}.housing`)
    },
    {
      key: 'cost',
      icon: '💰',
      title: t('vietnam.sections.cost'),
      content: t(`vietnam.content.${activeLocation}.cost`)
    },
    {
      key: 'healthcare',
      icon: '🏥',
      title: t('vietnam.sections.healthcare'),
      content: t(`vietnam.content.${activeLocation}.healthcare`)
    },
    {
      key: 'culture',
      icon: '🏛️',
      title: t('vietnam.sections.culture'),
      content: t(`vietnam.content.${activeLocation}.culture`)
    }
  ];

  return (
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
        {sections.map((section, index) => (
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
  );
};

export default Vietnam;