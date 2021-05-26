
export const toRna = function(DNA) {
  let RNA = [];
  if (DNA === undefined) return '';

  for (let h = 0; h < DNA.length; h++) {
      if (DNA[h] == 'G') {
          RNA.push('C');
      } else if (DNA[h] == 'C') {
          RNA.push('G');
      } else if (DNA[h] == 'T') {
          RNA.push('A');
      } else if (DNA[h] == 'A') 
        { RNA.push('U') }
  };
  return RNA.join('');
};