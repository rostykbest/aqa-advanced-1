const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((acc, currentValue) => {
  acc += currentValue;
  return acc;
}, 0);
console.log(sum);
