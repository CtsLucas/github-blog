import { differenceInMinutes } from 'date-fns';

export function formatDifferenceDate(value: string) {
  const differenceTime = differenceInMinutes(new Date(), new Date(value));

  const days = Math.floor(differenceTime / 1440);
  const hours = Math.floor(differenceTime / 60);
  const minutes = differenceTime % 60;

  if (days > 0) {
    return `${days}d ${hours}h ${minutes}m`;
  } else if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m`;
  } else {
    return '0m';
  }
}
