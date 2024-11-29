const todosContainer = document.getElementById("todos");

const fetchTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.status}`);
    }
    const data = await response.json();
    displayTodos(data);
  } catch (error) {
    console.error(error);
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to load todos. Please try again later.";
    errorMessage.style.color = "red";
    todosContainer.appendChild(errorMessage);
  }
};

const displayTodos = (data) => {
  data.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.className = `todo-item ${todo.completed ? "completed" : ""}`;

    const title = document.createElement("span");
    title.textContent = todo.title;

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = todo.completed ? "Completed" : "Pending";

    todoItem.appendChild(title);
    todoItem.appendChild(status);
    todosContainer.appendChild(todoItem);
  });
};

fetchTodos();
