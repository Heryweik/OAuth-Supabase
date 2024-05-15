// Archivo que crea chadcn, una función que combina clsx y tailwind-merge para poder usar clases de Tailwind y clases de CSS en un solo string.

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
