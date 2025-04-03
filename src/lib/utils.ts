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
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  }
}
