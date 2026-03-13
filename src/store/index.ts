/**
 * Store Index
 * Central state management setup.
 * Extend with Redux Toolkit or Zustand as needed.
 */

export type AppState = {
  isLoading: boolean;
};

export const initialState: AppState = {
  isLoading: false,
};
