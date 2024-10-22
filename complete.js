//vælger ikoner med classen heart.
const hearts = document.querySelectorAll(".heart");

hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    const task = this.parentElement;

    // Vælger 'To do' 'Completed tasks' sektioner.
    const todoSection = document.querySelector(".todo");
    const completedSection = document.getElementById("completed-section");

    // Tjekker om hjerte ikonet er fyldt eller tomt.
    if (this.src.includes("empty_heart.svg")) {
      // Hvis det er et tomt hjerte, flytter den task til til 'Completed tasks' og skifter til fyldt hjerte ikon.
      this.src = "./svg/filled_heart.svg";
      completedSection.appendChild(task);
    } else {
      // Hvis det er et fyldt hjerte, flytter den task tilbage til 'To do' og skifter til et tomt hjerte.
      this.src = "./svg/empty_heart.svg";
      todoSection.appendChild(task);
    }
  });
});
