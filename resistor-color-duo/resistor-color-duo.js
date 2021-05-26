

export const decodedValue = (color) => {
  const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white',];
let index_one = COLORS.indexOf(color[0].toLowerCase());
let index_two = COLORS.indexOf(color[1].toLowerCase());

return index_one * 10 + index_two;
};

