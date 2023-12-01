// In script.js

// Laden von gespeicherten Einträgen beim Start der Seite
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

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

    // Speichern in localStorage
    saveToLocalStorage();
  }
}

function removeTask(button) {
  const listItem = button.parentNode;
  const todoList = document.getElementById("todo-list");
  todoList.removeChild(listItem);

  // Aktualisieren von localStorage nach dem Entfernen
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const todoList = document.getElementById("todo-list");
  const tasks = [];

  // Durchlaufe alle Einträge und speichere den Text
  todoList.querySelectorAll("li span").forEach((task) => {
    tasks.push(task.textContent);
  });

  // Speichern im localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadFromLocalStorage() {
  const todoList = document.getElementById("todo-list");
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    tasks.forEach((taskText) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;

      todoList.appendChild(listItem);
    });
  }
}