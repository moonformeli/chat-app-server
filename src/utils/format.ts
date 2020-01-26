import moment from 'moment';

export const format = (date: string): string =>
  moment(date).format('YYYY-MM-DD HH:mm:ss');

export const sortTime = (dateA: string, dateB: string) => {
  const momentA = moment(dateA);
  const momentB = moment(dateB);

  if (momentA.isAfter(momentB)) {
    return 1;
  }
  if (momentA.isBefore(momentB)) {
    return -1;
  }
  return 0;
};
