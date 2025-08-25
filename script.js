const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
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
