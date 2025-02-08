import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CalendarLinkOptions = {
  title: string;
  details: string;
  location: string;
  attendees: string[];
  startDate: Date;
  endDate: Date;
};

export function createGoogleCalendarEventLink(
  opt: CalendarLinkOptions,
): string {
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeParam(opt.title)}&dates=${formatGoogleCalendarDate(opt.startDate)}/${formatGoogleCalendarDate(opt.endDate)}&details=${encodeParam(opt.details)}&location=${encodeParam(opt.location)}&add=${opt.attendees.join(",")}`;
}

function encodeParam(param: string): string {
  return encodeURIComponent(param).replace(/%20/g, "+").replace(/%0A/g, "%0A");
}

function formatGoogleCalendarDate(d: Date): string {
  const [date] = d.toISOString().split("T");
  return date.replace(/([-:])/g, "");
}
