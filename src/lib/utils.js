import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind CSS classes with clsx
 * @param {...string} inputs - The class names to merge
 * @returns {string} - The merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Check if an email is valid
 * @param {string} email - The email to validate
 * @returns {boolean} - True if the email is valid
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
