import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { I18nextProvider } from 'react-i18next';
// import i18next from 'i18next';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import english from './traslete/en.json';
// import spanish from './traslete/es.json';

// i18next
//   .init({
//     interpolation: {
//       escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     },
//     lng: 'es', // if you're using a language detector, do not define the lng option
//     fallbackLng: 'es',
//     resources: {
//       en: {
//         translation: english,
//       },
//       es: {
//         translation: spanish,
//       },
//     },
//   });

ReactDOM.render(
//   <I18nextProvider i18n={i18next}>
  <App />, //   </I18nextProvider>

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
