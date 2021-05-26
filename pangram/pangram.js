

export const isPangram = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (const letter of alphabet) {
    if (text.toLowerCase().search(letter) == -1) {
      return false;
    }
  }

  return true;
};
