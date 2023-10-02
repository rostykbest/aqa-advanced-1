class TodoController {
  async getTodo() {
    const todoEndpoint = "https://jsonplaceholder.typicode.com/todos/1";
    const response = await fetch(todoEndpoint);
    if (!response.ok) {
      throw new Error("HTTP request failed");
    }
    return await response.json();
  }
}

class UserController {
  async getUser() {
    const userEndpoint = "https://jsonplaceholder.typicode.com/users/1";
    const response = await fetch(userEndpoint);
    if (!response.ok) {
      throw new Error("HTTP request failed");
    }
    return await response.json();
  }
}

(async () => {
  const todoController = new TodoController();
  const userController = new UserController();

  try {
    const todo = await todoController.getTodo();
    console.log("Todo:", todo);

    const user = await userController.getUser();
    console.log("User:", user);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
