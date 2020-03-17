import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ko from './ko.json';

export const initI18n = (): void => {
    i18n
        .use(detector)
        .use(initReactI18next)
        .init({
            detection: {
                order: ['path'],
                lookupFromPathIndex: 0,
            },
            resources: {
                ko: {
                    translation: ko
                },
                en: {
                    translation: en
                }
            },
            fallbackLng: 'ko',
            whitelist: ['ko', 'en'],
            initImmediate: false,
        });
};
