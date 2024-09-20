import React from 'react';
import Flag from 'react-world-flags';
import './LanguageSelect.css';

const languages = [
    { code: 'en', name: 'English', countryCode: 'us' },
    { code: 'es', name: 'Español', countryCode: 'es' },
    { code: 'fr', name: 'Français', countryCode: 'fr' },
    { code: 'de', name: 'Deutsch', countryCode: 'de' },
    { code: 'it', name: 'Italiano', countryCode: 'it' },
    { code: 'jp', name: '日本語', countryCode: 'jp' },
    { code: 'cn', name: '中文', countryCode: 'cn' },
    { code: 'ru', name: 'Русский', countryCode: 'ru' },
    { code: 'pt', name: 'Português', countryCode: 'pt' },
  ];
  
  const LanguageSelect = () => {
    return (
      <select className="language-select">
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            <span className="language-option">
              <Flag code={lang.countryCode} className="language-flag" alt={`${lang.name} flag`} />
              {lang.name}
            </span>
          </option>
        ))}
      </select>
    );
  };
export default LanguageSelect;
