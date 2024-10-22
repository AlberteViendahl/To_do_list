const ulTodo = document.querySelector("#todos");
const inputTodo = document.querySelector("#todo");
const button = document.querySelector("button");

const model = ["Husk at ringe til mormor"];
init();

function init() {
  button.addEventListener("click", button_click);
  upDateView();
}

function addTodoToModel(todo) {
  if (todo.trim() !== "") {
    model.push(todo);
  }
}

function upDateView() {
  ulTodo.innerHTML = "";
  model.forEach((each, i) => {
    const li = createTaskElement(each); // Brug den nye funktion.
    li.dataset.id = i; // Tildel ID til hver task.
    ulTodo.appendChild(li);
  });
}

function button_click() {
  addTodoToModel(inputTodo.value);
  inputTodo.value = ""; // Ryd inputfeltet.
  upDateView();
}
