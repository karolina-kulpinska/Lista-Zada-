document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", addTask);
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return;
    
    let li = document.createElement("li");
    li.textContent = taskText;
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Usuń";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);
    
    taskInput.value = "";
}
