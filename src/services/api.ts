/**
 * API Service
 * Base HTTP client for making API requests.
 */

const BASE_URL = 'https://api.example.com';

const api = {
  get: async <T>(endpoint: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json() as Promise<T>;
  },

  post: async <T>(endpoint: string, body: unknown): Promise<T> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json() as Promise<T>;
  },
};

export default api;
