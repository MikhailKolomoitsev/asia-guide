import React from 'react';
import { useTranslation } from 'react-i18next';

const Bali = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'visa',
      icon: '📄',
      title: t('bali.sections.visa'),
      content: t('bali.content.visa')
    },
    {
      key: 'housing',
      icon: '🏠',
      title: t('bali.sections.housing'),
      content: t('bali.content.housing')
    },
    {
      key: 'cost',
      icon: '💰',
      title: t('bali.sections.cost'),
      content: t('bali.content.cost')
    },
    {
      key: 'healthcare',
      icon: '🏥',
      title: t('bali.sections.healthcare'),
      content: t('bali.content.healthcare')
    },
    {
      key: 'culture',
      icon: '🏛️',
      title: t('bali.sections.culture'),
      content: t('bali.content.culture')
    }
  ];

  return (
    <div className="country-page bali-page">
      <div className="country-header">
        <div className="country-flag">🇮🇩</div>
        <h1 className="country-title">{t('bali.title')}</h1>
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

export default Bali;