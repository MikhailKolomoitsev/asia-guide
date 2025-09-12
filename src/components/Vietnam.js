import React from 'react';
import { useTranslation } from 'react-i18next';

const Vietnam = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'visa',
      icon: '📄',
      title: t('vietnam.sections.visa'),
      content: t('vietnam.content.visa')
    },
    {
      key: 'housing',
      icon: '🏠',
      title: t('vietnam.sections.housing'),
      content: t('vietnam.content.housing')
    },
    {
      key: 'cost',
      icon: '💰',
      title: t('vietnam.sections.cost'),
      content: t('vietnam.content.cost')
    },
    {
      key: 'healthcare',
      icon: '🏥',
      title: t('vietnam.sections.healthcare'),
      content: t('vietnam.content.healthcare')
    },
    {
      key: 'culture',
      icon: '🏛️',
      title: t('vietnam.sections.culture'),
      content: t('vietnam.content.culture')
    }
  ];

  return (
    <div className="country-page vietnam-page">
      <div className="country-header">
        <div className="country-flag">🇻🇳</div>
        <h1 className="country-title">{t('vietnam.title')}</h1>
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