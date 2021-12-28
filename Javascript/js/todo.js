const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(item) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(item));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  const idx = toDos.indexOf(li.value);
  toDos.splice(idx, 1);
  saveToDos(toDos);
}

function paintToDo(newTodo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function handleToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(toDo);
  saveToDos(toDos);
  paintToDo(toDo);
}

function loadToDos() {
  toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos.forEach(paintToDo);
}

if (localStorage.getItem(TODOS_KEY) !== null) {
  loadToDos();
}

toDoForm.addEventListener("submit", handleToDo);
