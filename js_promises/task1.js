function delay(text, milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, milliseconds);
  });
}

delay("Message after delay", 2000)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
