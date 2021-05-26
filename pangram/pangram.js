
export const isPangram = (str) => {

  const LETTERS = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const lowerCase = str.toLowerCase();

  return LETTERS.every((letter) => lowerCase.includes(letter));

};
