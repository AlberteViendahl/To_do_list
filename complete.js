"use strict";
// Funktion til at tilføje et task-element med et hjerte.
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.classList.add("clicktodo");

  // Opret task-indhold (opgave tekst og hjerte ikon).
  const heart = document.createElement("img");
  heart.src = "./svg/empty_heart.svg";
  heart.alt = "hjerte";
  heart.classList.add("heart");
  
  const span = document.createElement("span");
  span.textContent = taskText;



  li.appendChild(heart);
  li.appendChild(span);

  return li;
}

// Event listener til hjerterne.
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("heart")) {
    const heart = event.target;
    const task = heart.parentElement; // Task er li-elementet.

    // Vælger 'To do' og 'Completed tasks' sektioner.
    const todoSection = document.querySelector("#todos");
    const completedSection = document.getElementById("completed-section");

    // Tjekker om hjerte ikonet er fyldt eller tomt.
    if (heart.src.includes("empty_heart.svg")) {
      // Hvis det er et tomt hjerte, flytter tasken til 'Completed tasks' og skifter til fyldt hjerte ikon.
      heart.src = "./svg/filled_heart.svg";
      completedSection.appendChild(task);
    } else {
      // Hvis det er et fyldt hjerte, flytter tasken tilbage til 'To do' og skifter til tomt hjerte ikon.
      heart.src = "./svg/empty_heart.svg";
      todoSection.appendChild(task);
    }
  }
});
