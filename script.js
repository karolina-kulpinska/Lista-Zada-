const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');

    // Tworzymy span z tekstem zadania
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    // Tworzymy przycisk usuwania
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.className = 'delete-btn';
    li.appendChild(deleteBtn);

    // Event usuwający zadanie po kliknięciu w przycisk
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

taskInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
