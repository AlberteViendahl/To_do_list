"use strict";

const ulTodo = document.querySelector("#todos");
const inputTodo = document.querySelector("#todo");
const button = document.querySelector("button");
const completedSection = document.getElementById("completed-section");

const todoModel = ["Husk at ringe til mormor"]; // To-do tasks
const completedModel = []; 

init();

function init() {
  button.addEventListener("click", button_click);
  updateView();
}

function addTodoToModel(todo) {
  if (todo) {
    todoModel.push(todo);
  }
}

function removeTodoFromModel(id) {
  todoModel.splice(id, 1);
}

function removeCompletedFromModel(id) {
  completedModel.splice(id, 1);
}

function completeTask(id) {
  const task = todoModel[id]; 
  completedModel.push(task); 
  removeTodoFromModel(id);    
  updateView();               
}

function undoCompleteTask(id) {
  const task = completedModel[id]; 
  todoModel.push(task);            
  removeCompletedFromModel(id);    
  updateView();                  
}

function updateView() {
  ulTodo.innerHTML = ""; 
  todoModel.forEach((task, i) => {
    ulTodo.innerHTML += `
      <li class="clicktodo flex" data-id="${i}">
              <img src="./svg/empty_heart.svg" alt="hjerte" class="heart" />
        <span>${task}</span>
      </li>
    `;
  });

  completedSection.innerHTML = `<h1>Completed tasks</h1>`;
  completedModel.forEach((task, i) => {
    completedSection.innerHTML += `
      <li class="flex" data-id="${i}"><span>${task}</span><img src="./svg/filled_heart.svg" alt="hjerte" class="heart" /></li>
    `;
  });

  document.querySelectorAll("#todos .heart").forEach((heart, index) => {
    heart.addEventListener("click", function () {
      completeTask(index); 
    });
  });

  document.querySelectorAll("#completed-section .heart").forEach((heart, index) => {
    heart.addEventListener("click", function () {
      undoCompleteTask(index); 
    });
  });

  document.querySelectorAll(".clicktodo span").forEach((each) => {
    each.addEventListener("click", klikspan); 
  });
}

function button_click() {
  const newTodo = inputTodo.value.trim(); 
  if (newTodo) {
    addTodoToModel(newTodo);
    inputTodo.value = "";
    updateView();
  } else {
    alert("Please enter a task!");
  }
}

function klikspan(evt) {
  const id = evt.target.closest("li").dataset.id;
  removeTodoFromModel(id);
  updateView();
}
