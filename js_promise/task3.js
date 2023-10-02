async function getTodo() {
  const todoEndpoint = "https://jsonplaceholder.typicode.com/todos/1";
  const response = await fetch(todoEndpoint);
  if (!response.ok) {
    throw new Error("HTTP request failed");
  }
  return await response.json();
}

async function getUser() {
  const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";
  const response = await fetch(userEndpoint);
  if (!response.ok) {
    throw new Error("HTTP request failed");
  }
  return await response.json();
}

async function getTodoAndUser() {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    console.log("Todo:", todo);
    console.log("User:", user);
    return { todo, user };
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function getFastest() {
  try {
    const [todo, user] = await Promise.all([getTodo(), getUser()]);
    console.log("Todo (Fastest):", todo);
    console.log("User (Fastest):", user);
    return { todo, user };
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

// using functions:

async function getBothFuncs() {
  try {
    const result = await getTodoAndUser();
    console.log("Result:", result);

    const fastestResult = await getFastest();
    console.log("Fastest Result:", fastestResult);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getBothFuncs();
