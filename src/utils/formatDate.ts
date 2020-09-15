import { addHours } from 'date-fns';
import { format } from 'date-fns-tz';
import { zonedTimeToUtc } from 'date-fns-tz';

const formatDate = (value: Date): string => {
  const znDate = zonedTimeToUtc(value, 'America/Sao_Paulo');

  const addedDate = addHours(znDate, 2);

  return format(addedDate, 'dd/MM/yyyy', {
    timeZone: 'America/Sao_Paulo',
  });
};

export default formatDate;
