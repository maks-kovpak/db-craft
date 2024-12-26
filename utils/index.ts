import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

/**
 * Merges and deduplicates class names, including Tailwind CSS utility classes.
 *
 * Combines the functionality of `clsx` for conditional class merging and `tailwind-merge`
 * for resolving conflicting Tailwind CSS classes.
 *
 * @param inputs - The class names to merge. Can include strings, arrays, objects, or falsy values.
 * @returns A single string with merged and deduplicated class names.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
