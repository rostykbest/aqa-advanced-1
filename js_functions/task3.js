function recFunc(num) {
  console.log(num);
  if (num <= 0) {
    return;
  }
  recFunc(--num);
}
recFunc(5);
