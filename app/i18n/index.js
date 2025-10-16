import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const initI18next = async (lng, ns) => {
  const i18nInstance = i18next.createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          import(`./locales/${language}.json`)
      )
    )
    .init({
      supportedLngs: ['en', 'uk'],
      fallbackLng: 'en',
      lng,
      fallbackNS: 'translation',
      defaultNS: 'translation',
      ns,
      interpolation: {
        escapeValue: false,
      },
    });
  return i18nInstance;
};

export async function useTranslation(lng, ns = 'translation') {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  };
}
