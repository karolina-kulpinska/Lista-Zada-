const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  const delBtn = document.createElement('button');
  delBtn.textContent = '×';
  delBtn.className = 'delete-btn';
  delBtn.onclick = () => taskList.removeChild(li);

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = '';
  input.focus();
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') addBtn.click();
});
