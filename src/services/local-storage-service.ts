import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export const LocalStorageService = {
  get: <T = any>(key: string): T | undefined => {
    try {
      const value = storage.getString(key);
      if (value === undefined) {
        return undefined;
      }

      try {
        return JSON.parse(value) as T;
      } catch {
        return value as T;
      }
    } catch (error) {
      console.error('[LocalStorageService/Error/Get]:', error);
      return undefined;
    }
  },

  set: (key: string, value: any): void => {
    try {
      if (typeof value === 'string') {
        storage.set(key, value);
      } else {
        storage.set(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('[LocalStorageService/Error/Set]:', error);
    }
  },

  remove: (key: string): void => {
    try {
      storage.delete(key);
    } catch (error) {
      console.error('[LocalStorageService/Error/Remove]:', error);
    }
  },

  removeAll: (): void => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('[LocalStorageService/Error/RemoveAll]:', error);
    }
  },
};
