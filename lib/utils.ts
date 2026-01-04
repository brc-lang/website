import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path for GitHub Pages
// This should match the basePath in next.config.mjs
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/website'
