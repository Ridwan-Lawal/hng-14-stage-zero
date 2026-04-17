

const dueDateEl = document.querySelector('.task-due-date');
const taskTimeRemainingEl = document.querySelector('.task-time-remaining');
const checkboxEl = document.querySelector('#isTaskComplete');
const taskTitleEl = document.querySelector('.task-title');
const statusEl = document.querySelector('.task-status');
const editButtonEl = document.querySelector('.edit-button');    
const deleteButtonEl = document.querySelector('.delete-button');
const priorityEl = document.querySelector('.task-priority');
const descriptionEl = document.querySelector('.task-description');

const editFormContainer = document.querySelector('.edit-form-container');
const taskContainer = document.querySelector('.task-container');

const titleInputEl = document.querySelector('#task-title');
const dueDateInputEl = document.querySelector('#due-date');  
const priorityInputEl = document.querySelector('#priority');
const descriptionInputEl = document.querySelector('#description');
const statusInputEl = document.querySelector('#status');
const saveButtonEl = document.querySelector('.save-button');
const cancelButtonEl = document.querySelector('#cancel-button');
const editFormEl = document.querySelector('.edit-form');

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
    statusEl.textContent = 'Done';
  } else {
    taskTimeRemainingEl.style.textDecoration = 'none';
    dueDateEl.style.textDecoration = 'none';
    taskTitleEl.style.textDecoration = 'none';
    statusEl.textContent = 'Pending';
  }
});



let editTask = false

editButtonEl.addEventListener('click', (e) => {
  console.log('Edit button clicked');
  editTask = true;
  editFormContainer.style.display = 'block';
  taskContainer.style.display = 'none';


  titleInputEl.value = taskTitleEl.textContent;
  dueDateInputEl.value = dueDateEl.textContent;
  priorityInputEl.value = priorityEl.textContent;
  descriptionInputEl.value = descriptionEl.textContent;
  statusInputEl.value = statusEl.textContent;
})


editFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log('Save button clicked');

    taskTitleEl.textContent = titleInputEl.value;
    dueDateEl.textContent = dueDateInputEl.value;
    priorityEl.textContent = priorityInputEl.value;
    descriptionEl.textContent = descriptionInputEl.value;
    statusEl.textContent = statusInputEl.value;

    editFormContainer.style.display = 'none';
    taskContainer.style.display = 'block';

    
const timeDiff = new Date(dueDateInputEl.value) - currentDate.getTime();
const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

if(daysRemaining > 0){
  taskTimeRemainingEl.textContent = `Due in ${daysRemaining} days`; 
} else if(daysRemaining === 0){
  taskTimeRemainingEl.textContent = 'Due today';
} else {
  taskTimeRemainingEl.textContent = 'Task is overdue';
} 
  
})

 
cancelButtonEl.addEventListener('click', (e) => {
  e.preventDefault();
 
  editFormContainer.style.display = 'none';
  taskContainer.style.display = 'block';
})

deleteButtonEl.addEventListener('click', () => {

  taskContainer.parentNode.removeChild(taskContainer);
});