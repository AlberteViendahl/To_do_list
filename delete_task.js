const tasks = document.querySelectorAll(".delete_task");

tasks.forEach((task) => {
    task.addEventListener("click", function () {
        task.parentElement.remove();
    });
});
