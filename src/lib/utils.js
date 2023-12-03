import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatTimestamp = (timestamp) => {
  return moment(timestamp).format("h.mm A, D MMM, YYYY");
};
