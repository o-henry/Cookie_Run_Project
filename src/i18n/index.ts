import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

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
                    translation: {
                        content: {
                            message1: "사전예약을 신청하신",
                            message2: "모든분들께 5만원 상당의",
                            message3: "아이템을 드립니다!"
                        },
                        placeholder: {
                            input: "'-'없이 숫자만 입력해주세요"
                        },
                        button: {
                            content: "사전예약하기 >"
                        }
                    }
                },
                en: {
                    translation: {
                        content: {
                            message1: "We will give ",
                            message2: "50,000 won worth of items to all ",
                            message3: "those who have applied for pre - booking!"
                        },
                        placeholder: {
                            input: "Please enter a number without '-'"
                        },
                        button: {
                            content: "Advance reservation >"
                        }
                    }
                }
            },
            fallbackLng: 'ko',
            whitelist: ['ko', 'en'],
            initImmediate: false,
        });
};
