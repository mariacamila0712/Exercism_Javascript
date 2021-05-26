

export const clean = (number) => {
  if(number.match(/[a-zA-Z]/)){
    throw new Error("Letters not permitted");
  }
  if(number.match(/[@:_;,\|!\?]/)){
    throw new Error("Punctuations not permitted");
  }
  number = number.replace(/[-\+\.\(\)\s]/g, "");
  if(number.length <= 9){
    throw new Error("Incorrect number of digits");
  }
  if(number.length > 11){
    throw new Error("More than 11 digits");
  }
  if(number.match(/^[02-9][0-9]{10}$/)){
    throw new Error("11 digits must start with 1");
  }
  if(number.length == 11 && number[0] == 1){
    number = number.substring(1);
  }
  if(number.match(/^[0][0-9]{9}$/)){
    throw new Error("Area code cannot start with zero");
  }
  if(number.match(/^[1][0-9]{9}$/)){
    throw new Error("Area code cannot start with one");
  }
  if(number.match(/^[0-9]{3}[0][0-9]{6}$/)){
    throw new Error("Exchange code cannot start with zero");
  }
  if(number.match(/^[0-9]{3}[1][0-9]{6}$/)){
    throw new Error("Exchange code cannot start with one");
  }
  return number;
};