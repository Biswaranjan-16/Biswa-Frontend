const form = document.getElementById('task-form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');


form.addEventListener('submit', addTask);


function addTask(e) {
    e.preventDefault();

 
    const task = taskInput.value;


    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(task));

  
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

   
    taskList.appendChild(li);

  
    taskInput.value = '';
}


taskList.addEventListener('click', deleteTask);

function deleteTask(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this task?')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
}
