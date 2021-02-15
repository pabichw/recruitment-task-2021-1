import React from 'react';
import './style/App.css';

import TopNav from './components/TopNav';
import AlbumsManagement from './components/AlbumsManagement';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  'en': {
    translation: {
      'topNav': {
        'title': 'My Albums'
      },
      'albumsManagement': {
        'form': {
          'namePlaceholder': 'Album name'
        }
      },
      'general': {
        'add': 'Add'
      }
    }
  },
  'pl': {
    translation: {
      'topNav': {
        'title': "Moje albumy"
      },
      'albumsManagement': {
        'form': {
          'namePlaceholder': 'Nazwa albumu'
        }
      },
      'general': {
        'add': 'Dodaj'
      }
    }
  }
};

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
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
