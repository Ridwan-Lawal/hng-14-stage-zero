

const dueDateEl = document.querySelector('.task-due-date');
const taskTimeRemainingEl = document.querySelector('.task-time-remaining');
const checkboxEl = document.querySelector('#isTaskComplete');
const taskTitleEl = document.querySelector('.task-title');
const statusEl = document.querySelector('.task-status');
const editButtonEl = document.querySelector('.edit-button');    
const deleteButtonEl = document.querySelector('.delete-button');


const dueDate = new Date('2026-04-20'); // Example due date
dueDateEl.textContent = dueDate.toLocaleDateString();
const currentDate = new Date();

const timeDiff = dueDate.getTime() - currentDate.getTime();
const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

taskTimeRemainingEl.textContent = `Due in ${daysRemaining} days`;

console.log(checkboxEl.checked, checkboxEl, checkboxEl.value);


checkboxEl.addEventListener('change', () => {
  if(checkboxEl.checked){
    taskTimeRemainingEl.style.textDecoration = 'line-through';
    dueDateEl.style.textDecoration = 'line-through';
    taskTitleEl.style.textDecoration = 'line-through';
    statusEl.textContent = 'Completed';
  } else {
    taskTimeRemainingEl.style.textDecoration = 'none';
    dueDateEl.style.textDecoration = 'none';
    taskTitleEl.style.textDecoration = 'none';
    statusEl.textContent = 'Pending';
  }
});

editButtonEl.addEventListener('click', () => {
  const newTitle = prompt('Enter new task title:', taskTitleEl.textContent);
  if (newTitle) {
    taskTitleEl.textContent = newTitle;
  }
});

deleteButtonEl.addEventListener('click', () => {
  const cardContainerEl = document.querySelector('.card-container');
  alert('Delete clicked');
});

