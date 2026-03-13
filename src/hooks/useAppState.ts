/**
 * useAppState Hook
 * Tracks the current React Native app state (active, background, inactive).
 */

import {useEffect, useState} from 'react';
import {AppState, AppStateStatus} from 'react-native';

const useAppState = (): AppStateStatus => {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState,
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

export default useAppState;
