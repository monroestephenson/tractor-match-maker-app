import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility function to handle image paths for both local and deployment environments
 * @param path The image path
 * @returns The correct image path for the current environment
 */
export function getImagePath(path: string): string {
  // Remove leading slash if exists
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For local development, we need to ensure the path points to public directory
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  } else {
    // For production, ensure we don't duplicate the base path
    // If the path already contains tractor-pics, strip the prefix to avoid duplication
    const baseUrl = import.meta.env.BASE_URL;
    if (cleanPath.includes('tractor-pics/')) {
      return `${baseUrl}tractor-pics/${cleanPath.split('tractor-pics/')[1]}`;
    } else {
      return `${baseUrl}${cleanPath}`;
    }
  }
}
