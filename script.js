function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const todoList = document.getElementById("todo-list");
    
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button onclick="removeTask(this)">Remove</button>
    `;

    todoList.appendChild(listItem);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const listItem = button.parentNode;
  const todoList = document.getElementById("todo-list");
  todoList.removeChild(listItem);
}