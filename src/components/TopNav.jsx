import React from 'react';
import '../style/TopNav.css';
import { useTranslation } from 'react-i18next';
import { save, KEYS } from '../utils/localStorage';

const TopNav = () => {
    const { t, i18n} = useTranslation();

    const onLangToggle = () => {
        const newLang = i18n.language === 'en' ? 'pl' : 'en';
        i18n.changeLanguage(newLang);
        save(KEYS.LOCALE, newLang);
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#">{t('topNav.title')}</a>
                <div className="nav-wrapper__lang-container right" onClick={onLangToggle}>PL / ENG</div>
            </div>
        </nav>
    );
};

export default TopNav;