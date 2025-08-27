let tasks = [];
let hideCompleted = false;

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  const filteredTasks = hideCompleted ? tasks.filter(task => !task.completed) : tasks;

  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.classList.add("taskItem");
    if (task.completed) li.classList.add("completed");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTask(index));

    const span = document.createElement("span");
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = () => removeTask(index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });

  updateControls();
}

function updateControls() {
  const controls = document.getElementById("taskControls");
  const completeAllBtn = document.getElementById("completeAllBtn");
  const toggleCompletedBtn = document.getElementById("toggleCompletedBtn");

  if (tasks.length === 0) {
    controls.style.display = "none";
  } else {
    controls.style.display = "flex";
    toggleCompletedBtn.textContent = hideCompleted ? "Pokaż ukończone" : "Ukryj ukończone";

    const allCompleted = tasks.every(task => task.completed);
    completeAllBtn.disabled = allCompleted;
  }
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Wpisz treść zadania!");
    return;
  }

  tasks = [...tasks, { text: taskText, completed: false }];
  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks = tasks.map((task, i) =>
    i === index ? { ...task, completed: !task.completed } : task
  );
  renderTasks();
}

function removeTask(index) {
  tasks = tasks.filter((_, i) => i !== index);
  renderTasks();
}

function toggleHideCompleted() {
  hideCompleted = !hideCompleted;
  renderTasks();
}

function markAllCompleted() {
  tasks = tasks.map(task => ({ ...task, completed: true }));
  renderTasks();
}

renderTasks();
