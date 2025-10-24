'use client';

import React from 'react';
import { useTranslation } from '../i18n/client';

const ComparisonTable = ({ lang }) => {
  const { t } = useTranslation(lang);

  const countries = [
    {
      key: 'thailand',
      name: t('navigation.thailand'),
      flag: '🇹🇭',
      priceQuality: 9,
      medicine: 7,
      convenience: 9,
      foodQuality: 10,
      community: 7,
      costOfLiving: 1300
    },
    {
      key: 'vietnam',
      name: t('navigation.vietnam'),
      flag: '🇻🇳',
      priceQuality: 8,
      medicine: 8,
      convenience: 7,
      foodQuality: 8,
      community: 8,
      costOfLiving: 1050
    },
    {
      key: 'bali',
      name: t('navigation.bali'),
      flag: '🇮🇩',
      priceQuality: 6,
      medicine: 5,
      convenience: 3,
      foodQuality: 6,
      community: 10,
      costOfLiving: 1900
    },
    {
      key: 'kualaLumpur',
      name: t('navigation.kualaLumpur'),
      flag: '🇲🇾',
      priceQuality: 8,
      medicine: 7.5,
      convenience: 8.8,
      foodQuality: 6,
      community: 5,
      costOfLiving: 1500
    }
  ];

  const metrics = [
    'priceQuality',
    'medicine',
    'convenience',
    'foodQuality',
    'community',
    'costOfLiving'
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
                {metricKey === 'costOfLiving' ? (
                  <span className="cost-text">${country[metricKey].toLocaleString()}</span>
                ) : (
                  getScoreBar(country[metricKey])
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;