const input = document.querySelector('.input');
const button = document.querySelector('.button');
const ul = document.querySelector('.ul');

button.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'li';

  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '×';

  deleteBtn.addEventListener('click', () => {
    ul.removeChild(li);
  });

  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = '';
  input.focus();
});
