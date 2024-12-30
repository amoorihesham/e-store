import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currencyFormatter = (price: number | string) => {
  const secureNumber = Number(price);

  const formatted = secureNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formatted;
};

export const calculatePriceAfterDiscount = (basePrice: number | string, discountAmount: number | string) => {
  const secureNumber = Number(basePrice);
  const secureDiscountNumber = Number(discountAmount);
  const amountToDecrease = (secureDiscountNumber * secureNumber) / 100;
  const priceAfterDecreased = secureNumber - amountToDecrease;

  return priceAfterDecreased;
};
