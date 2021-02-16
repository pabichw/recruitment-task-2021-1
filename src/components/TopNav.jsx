import React from 'react';
import '../style/TopNav.css';
import { useTranslation } from 'react-i18next';

const TopNav = () => {
  const { t, i18n } = useTranslation();

  const onLangToggle = () => {
    const newLang = i18n.language === 'en-US' ? 'pl' : 'en-US';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/">{t('topNav.title')}</a>
        <button type="button" className="btn btn-small waves-effect waves-light red lighten-2" onClick={onLangToggle}>
          PL / ENG
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
