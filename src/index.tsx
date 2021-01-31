import './webpack.js';
import '@babel/polyfill';
import './style.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n/index';
import router from './router';

const App = <I18nextProvider i18n={i18n}>{router}</I18nextProvider>;
ReactDOM.render(App, document.getElementById('app'));
