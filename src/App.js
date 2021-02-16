import React from 'react';
import './style/App.css';

import TopNav from './components/TopNav';
import AlbumsManagement from './components/AlbumsManagement';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cache from 'i18next-localstorage-cache';
import { resources } from './utils/i18nResources';

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(Cache)
.init({
  resources,
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  },
  Cache: {
    enabled: true,
    prefix: 'translation_',
    expirationTime: Infinity,
    Version: {},
    // defaultVersion: '',
  },
});

function App() {
  return (
    <div className="app"> 
      <TopNav/>
      <main>
        <AlbumsManagement/>
      </main>
    </div>
  );
}

export default App;
