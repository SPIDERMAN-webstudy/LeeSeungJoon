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
  let liId = parseInt(li.id);
  console.log(liId);
  li.remove();
  toDos = toDos.filter(function (item) {
    return item.key !== liId;
  });
  console.log(toDos);
  saveToDos(toDos);
}

function paintToDo(newTodoObj) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodoObj.text;
  list.id = newTodoObj.key;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  list.appendChild(span);
  list.appendChild(button);
  toDoList.appendChild(list);
}

function handleToDo(event) {
  event.preventDefault();
  const toDoObj = {
    text: toDoInput.value,
    key: Date.now(),
  };
  toDoInput.value = "";

  toDos.push(toDoObj);
  saveToDos(toDos);
  paintToDo(toDoObj);
}

function loadToDos() {
  toDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos.forEach(paintToDo);
}

if (localStorage.getItem(TODOS_KEY) !== null) {
  loadToDos();
}

toDoForm.addEventListener("submit", handleToDo);
