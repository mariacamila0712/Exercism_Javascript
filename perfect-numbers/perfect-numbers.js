
export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let sum = [];
  for (let divider = 1; divider < number; divider += 1) {
    if (number % divider === 0) sum.push(divider);
  }
  let result = sum.reduce((total, divider) => (total += divider), 0);

  if (result > number) return 'abundant';
  else if (result === number) return 'perfect';
  else if (result < number) return 'deficient';
};