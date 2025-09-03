import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, locale: string = 'en-US', currency: string = 'USD'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function calculateDiscountedPrice(price: number, discountPercent: number): number {
  if (discountPercent <= 0) return price;
  if (discountPercent >= 100) return 0;

  const discountAmount = (price * discountPercent) / 100;
  return parseFloat((price - discountAmount).toFixed(2));
}
