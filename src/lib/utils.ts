import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function timeAgo(dateInput: string | number | Date) {
  const now = Date.now();
  const past = new Date(dateInput).getTime();
  const diff = now - past; // in ms

  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hr  = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const month = Math.floor(day / 30);   // approx but standard for UI
  const year = Math.floor(day / 365);   // approx but standard for UI

  if (sec < 60) return "just now";
  if (min < 60) return `${min} ${min === 1 ? "minute" : "minutes"} ago`;
  if (hr < 24) return `${hr} ${hr === 1 ? "hour" : "hours"} ago`;
  if (day < 30) return `${day} ${day === 1 ? "day" : "days"} ago`;
  if (month < 12) return `${month} ${month === 1 ? "month" : "months"} ago`;
  return `${year} ${year === 1 ? "year" : "years"} ago`;
}
