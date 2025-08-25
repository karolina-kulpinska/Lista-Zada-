const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });
    taskList.appendChild(li);
    taskInput.value = '';
    taskInput.focus();
  } else {
    alert('Proszę wpisać jakieś zadanie!');
  }
});

taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
