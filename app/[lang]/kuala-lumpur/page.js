'use client';

import React, { use } from 'react';
import { useTranslation } from '../../i18n/client';
import Navigation from '../../components/Navigation';

export default function KualaLumpur({ params }) {
  const { lang } = use(params);
  const { t } = useTranslation(lang);

  const sections = [
    {
      key: 'visa',
      icon: '📄',
      title: t('kualaLumpur.sections.visa'),
      content: t('kualaLumpur.content.visa')
    },
    {
      key: 'housing',
      icon: '🏠',
      title: t('kualaLumpur.sections.housing'),
      content: t('kualaLumpur.content.housing')
    },
    {
      key: 'cost',
      icon: '💰',
      title: t('kualaLumpur.sections.cost'),
      content: t('kualaLumpur.content.cost')
    },
    {
      key: 'healthcare',
      icon: '🏥',
      title: t('kualaLumpur.sections.healthcare'),
      content: t('kualaLumpur.content.healthcare')
    },
    {
      key: 'culture',
      icon: '🏛️',
      title: t('kualaLumpur.sections.culture'),
      content: t('kualaLumpur.content.culture')
    }
  ];

  return (
    <>
      <Navigation lang={lang} />
      <div className="country-page kl-page">
        <div className="country-header">
          <div className="country-flag">🇲🇾</div>
          <h1 className="country-title">{t('kualaLumpur.title')}</h1>
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
    </>
  );
}
