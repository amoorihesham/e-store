import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amount: number,
  locale: string = "en-US",
  currency: string = "USD"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function calculateDiscountedPrice(
  price: number,
  discountPercent: number
): number {
  if (discountPercent <= 0) return price;
  if (discountPercent >= 100) return 0;

  const discountAmount = (price * discountPercent) / 100;
  return parseFloat((price - discountAmount).toFixed(2));
}

export function formatDateTime(date: Date | string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const d = new Date(date);

  const day = String(d.getDate()).padStart(2, "0");
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // convert 0 → 12 and 13–23 → 1–11
  const formattedHours = String(hours).padStart(2, "0");

  return `${day} ${month}, ${year} - ${formattedHours}:${minutes} ${ampm}`;
}
