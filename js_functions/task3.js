function numDecreaser(num) {
  console.log(num);
  if (num > 1) {
    return numDecreaser(num - 1);
  }
}
numDecreaser(5);
