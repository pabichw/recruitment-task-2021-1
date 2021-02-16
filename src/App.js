import React from 'react';
import './style/App.css';

import TopNav from './components/TopNav';
import AlbumsManagement from './components/AlbumsManagement';
import i18n from 'i18next';
import { initReactI18next, withSSR } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import { resources } from './utils/i18nResources';


i18n
.use(initReactI18next)
.use(LngDetector)
.init({
  resources,
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"]
  },
  fallbackLng: "en-US",

  interpolation: {
    escapeValue: false
  },
  
});

const App = withSSR()(() => {
  return (
    <div className="app"> 
      <TopNav/>
      <main>
        <AlbumsManagement/>
      </main>
    </div>
  );
})

export default App;
