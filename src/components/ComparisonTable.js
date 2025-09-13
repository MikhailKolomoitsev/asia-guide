import React from 'react';
import { useTranslation } from 'react-i18next';

const ComparisonTable = () => {
  const { t } = useTranslation();

  const countries = [
    {
      key: 'thailand',
      name: t('navigation.thailand'),
      flag: '🇹🇭',
      priceQuality: 9,
      medicine: 7,
      convenience: 9,
      foodQuality: 10,
      community: 7
    },
    {
      key: 'vietnam',
      name: t('navigation.vietnam'),
      flag: '🇻🇳',
      priceQuality: 8,
      medicine: 8,
      convenience: 7,
      foodQuality: 8,
      community: 8
    },
    {
      key: 'bali',
      name: t('navigation.bali'),
      flag: '🇮🇩',
      priceQuality: 6,
      medicine: 5,
      convenience: 3,
      foodQuality: 6,
      community: 10
    },
    {
      key: 'kualaLumpur',
      name: t('navigation.kualaLumpur'),
      flag: '🇲🇾',
      priceQuality: 8,
      medicine: 7.5,
      convenience: 8.8,
      foodQuality: 6,
      community: 5
    }
  ];

  const metrics = [
    'priceQuality',
    'medicine',
    'convenience',
    'foodQuality',
    'community'
  ];

  const getScoreColor = (score) => {
    if (score >= 8) return '#22c55e'; // green
    if (score >= 6) return '#ffc002'; // yellow
    if (score >= 4) return '#ff9345'; // orange
    return '#fa2323'; // red
  };

  const getScoreBar = (score) => {
    return (
      <div className="score-container">
        <div className="score-bar">
          <div
            className="score-fill"
            style={{
              width: `${(score / 10) * 100}%`,
              backgroundColor: getScoreColor(score)
            }}
          ></div>
        </div>
        <span className="score-text">{score}/10</span>
      </div>
    );
  };

  return (
    <div className="comparison-table-container">
      <h2 className="comparison-title">📊 {t('comparison.title')}</h2>
      <div className="comparison-table">
        <div className="table-header">
          <div className="metric-column">
            <span>Metrics</span>
          </div>
          {countries.map((country, index) => (
            <div key={index} className="country-column">
              <span className="country-flag">{country.flag}</span>
              <span className="country-name">{country.name}</span>
            </div>
          ))}
        </div>

        {metrics.map((metricKey, metricIndex) => (
          <div key={metricIndex} className="table-row">
            <div className="metric-cell">
              <span className="metric-icon">{t(`comparison.metrics.${metricKey}.icon`)}</span>
              <span className="metric-label">{t(`comparison.metrics.${metricKey}.label`)}</span>
            </div>
            {countries.map((country, countryIndex) => (
              <div key={countryIndex} className="score-cell">
                {getScoreBar(country[metricKey])}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="table-legend">
        <p>💡 {t('comparison.legend')}</p>
      </div>
    </div>
  );
};

export default ComparisonTable;