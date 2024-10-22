"use strict";

const ulTodo = document.querySelector("#todos");
const inputTodo = document.querySelector("#todo");
const button = document.querySelector("button");

const model = ["Husk at ring til mormor", "Vasketøj", "Køb ind til lørdag"];
init();

function init() {
    button.addEventListener("click", button_click);
    upDateView();
  }
  
  function addTodoToModel(todo) {
    model.push(todo);
  }
  function removeTodoFromModel(id) {
    model.splice(id, 1);
  }
  
  function upDateView() {
    ulTodo.innerHTML = "";
    model.forEach((each, i) => {
      ulTodo.innerHTML += `<li class="clicktodo" data-id="${i}">${each}</li> `;
    });
  
    document.querySelectorAll(".clicktodo").forEach((each) => {
      each.addEventListener("click", klikspan);
    });
  }
  
  function button_click() {
    addTodoToModel(inputTodo.value);
    upDateView();
  }
  function klikspan(evt) {
    removeTodoFromModel(evt.target.dataset.id);
    upDateView();
  }