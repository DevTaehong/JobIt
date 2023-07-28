import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDaysLeft(expTime: number): number {
  const expDate = new Date(expTime * 1000); // Convert to milliseconds
  const currentDate = new Date();

  const timeDiff = expDate.getTime() - currentDate.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return daysLeft;
}
