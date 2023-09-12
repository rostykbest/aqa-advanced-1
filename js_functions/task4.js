function divide(numerator, denominator) {
  try {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error("numerator and denominator should be numbers");
    }

    if (denominator === 0) {
      throw new Error("denominator can't be 0");
    }

    return numerator / denominator;
  } catch (error) {
    console.error("Помилка:", error.message);
  } finally {
    console.log("Робота завершена");
  }
}

console.log(divide(10, 2));
console.log(divide(10, 0));
console.log(divide(5, "2"));
console.log(divide(8, undefined));
console.log(divide(null, 3));
