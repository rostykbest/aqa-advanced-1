function getTodo() {
  const todoEndpoint = "https://jsonplaceholder.typicode.com/todos/1";
  return fetch(todoEndpoint).then((response) => response.json());
}

function getUser() {
  const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";
  return fetch(userEndpoint).then((response) => response.json());
}

function getTodoAndUser() {
  const todoPromise = getTodo();
  const userPromise = getUser();

  const allPromises = [todoPromise, userPromise];

  return Promise.all(allPromises)
    .then(([todo, user]) => {
      console.log("Todo:", todo);
      console.log("User:", user);
      return { todo, user };
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
}

function getFastest() {
  const todoPromise = getTodo();
  const userPromise = getUser();

  const racePromises = [todoPromise, userPromise];

  return Promise.race(racePromises)
    .then((result) => {
      console.log("The fastest result is:", result);
      return result;
    })
    .catch((error) => {
      console.error("An error occurred:", error);
      throw error;
    });
}

// using functions:

getTodoAndUser()
  .then((result) => {
    console.log("Result:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

getFastest()
  .then((result) => {
    console.log("Result from fastest request:", result);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
