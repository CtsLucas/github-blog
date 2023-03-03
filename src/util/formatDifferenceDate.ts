import { differenceInMinutes } from 'date-fns';

export function formatDifferenceDate(value: string) {
  const differenceTime = differenceInMinutes(new Date(), new Date(value));

  const days = Math.floor(differenceTime / 1440);
  const hours = Math.floor(differenceTime / 60);
  const minutes = differenceTime % 60;

  if (days > 0) {
    return `${days === 1 ? `${days} dia` : `${days} dias`}`;
  } else if (hours > 0) {
    return `${hours === 1 ? `${hours} hora` : `${hours} horas`}`;
  } else if (minutes > 0) {
    return `${minutes === 1 ? `${minutes} minuto` : `${minutes} minutos`}`;
  } else {
    return 'pouco tempo';
  }
}
