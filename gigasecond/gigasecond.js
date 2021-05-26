

const GIGASECOND_IN_MS = 10 ** 9 * 1000;

export const gigasecond = (date) => {
  return new Date(date.getTime() + GIGASECOND_IN_MS );
};