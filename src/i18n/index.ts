import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUS from './en-US';
import zhCN from './zh-CN';

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        debug: false,
        lng: 'zh-cn',
        keySeparator: false,
        returnObjects: true,
        lowerCaseLng: true,
        resources: {
            'en-us': {
                translation: enUS,
            },
            'zh-cn': {
                translation: zhCN,
            },
        },
        // react-i18next options
        react: {
            wait: true,
        },
    });
document.documentElement.setAttribute('lang', i18next.language);

export default i18next;
