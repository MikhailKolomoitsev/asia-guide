import React from 'react';
import { useTranslation } from 'react-i18next';

const Thailand = () => {
  const { t } = useTranslation();

  const sections = [
    {
      key: 'visa',
      icon: '📄',
      title: t('thailand.sections.visa'),
      content: t('thailand.content.visa')
    },
    {
      key: 'housing',
      icon: '🏠',
      title: t('thailand.sections.housing'),
      content: t('thailand.content.housing')
    },
    {
      key: 'cost',
      icon: '💰',
      title: t('thailand.sections.cost'),
      content: t('thailand.content.cost')
    },
    {
      key: 'healthcare',
      icon: '🏥',
      title: t('thailand.sections.healthcare'),
      content: t('thailand.content.healthcare')
    },
    {
      key: 'culture',
      icon: '🏛️',
      title: t('thailand.sections.culture'),
      content: t('thailand.content.culture')
    }
  ];

  return (
    <div className="country-page thailand-page">
      <div className="country-header">
        <div className="country-flag">🇹🇭</div>
        <h1 className="country-title">{t('thailand.title')}</h1>
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

export default Thailand;