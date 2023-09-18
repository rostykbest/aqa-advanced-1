let numberList = [1, 10, 14, 2, 4, 5, 43, 34];
const newNumberList = [...numberList];

let ascendingSortedNums = newNumberList.sort((a, b) => a - b);
console.log(ascendingSortedNums);
