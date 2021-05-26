

export const classify = (number = 6) => {

  if (number < 1) throw new Error('Classification is only possible for natural numbers.');

  var divisor = [];

  for (var j = 1; j < Math.sqrt(number); j++) if (number % j == 0) divisor.push(j);

  var divilen = divisor.length;

  for (var j = 1; j < divilen; j++)divisor.push(number / divisor[j])

  var sum = divisor.reduce((prev, current) => prev + current, 0);

  return sum == number ? "perfect" :
    sum > number ? "abundant" :
      "deficient";
};