/**
 * Formatter Utilities
 * Common string and date formatting helpers.
 */

/**
 * Capitalize the first letter of a string.
 */
export const capitalize = (str: string): string => {
  if (!str) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Format a Date object to a human-readable string (YYYY-MM-DD).
 */
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
