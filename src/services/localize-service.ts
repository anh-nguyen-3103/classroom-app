import i18n, { TOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../assets/lang/en.json';
import vi from '../../assets/lang/vi.json';
import { LocalStorageService } from './local-storage-service';
import { LOCAL_STORAGE_KEYS } from '../constants/local-storage-keys';

type SupportedLanguages = 'en' | 'vi';

const resources = {
  en: { translation: en },
  vi: { translation: vi },
};

export const LocalizeService = {
  init: async (): Promise<void> => {
    const storedLanguage = LocalStorageService.get<string>(LOCAL_STORAGE_KEYS.LANGUAGE);
    const initialLanguage = (storedLanguage as SupportedLanguages) || 'en';

    await i18n.use(initReactI18next).init({
      resources,
      lng: initialLanguage,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
  },

  t: (key: string, options?: TOptions): string => i18n.t(key, options),

  changeLanguage: async (lang: SupportedLanguages): Promise<void> => {
    await i18n.changeLanguage(lang);
    LocalStorageService.set(LOCAL_STORAGE_KEYS.LANGUAGE, lang);
  },

  getCurrentLanguage: (): string => i18n.language,
};
