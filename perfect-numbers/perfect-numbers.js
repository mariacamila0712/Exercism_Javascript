

export const classify = (numbers) => {
  
  if(numbers < 1){
    throw new Error('Classification is only possible for natural numbers.');
  }

  let sum = 0;

  for(let m = 0; m < numbers; m++) {
    if(numbers % m === 0 ) sum += m;
  }

  if (sum === numbers) return 'perfect';
  if (sum < numbers) return 'deficient';
  if (sum > numbers) return 'abundant';

};
