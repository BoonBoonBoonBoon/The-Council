/**
 * Storage Service
 * Thin wrapper around AsyncStorage for persisting data.
 */

import {Platform} from 'react-native';

const storage = {
  setItem: async (key: string, value: string): Promise<void> => {
    try {
      // AsyncStorage is available once installed:
      // import AsyncStorage from '@react-native-async-storage/async-storage';
      // await AsyncStorage.setItem(key, value);
      console.log(`[storage] setItem: ${key} on ${Platform.OS}`);
    } catch (error) {
      console.error('[storage] setItem error:', error);
    }
  },

  getItem: async (key: string): Promise<string | null> => {
    try {
      // return await AsyncStorage.getItem(key);
      console.log(`[storage] getItem: ${key} on ${Platform.OS}`);
      return null;
    } catch (error) {
      console.error('[storage] getItem error:', error);
      return null;
    }
  },

  removeItem: async (key: string): Promise<void> => {
    try {
      // await AsyncStorage.removeItem(key);
      console.log(`[storage] removeItem: ${key} on ${Platform.OS}`);
    } catch (error) {
      console.error('[storage] removeItem error:', error);
    }
  },
};

export default storage;
