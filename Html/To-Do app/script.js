document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'list-group-item';

            const span = document.createElement('span');
            span.textContent = taskText;
            li.appendChild(span);

            const btnGroup = document.createElement('div');
            btnGroup.className = 'btn-group btn-group-sm';
            btnGroup.role = 'group';

            const completeBtn = document.createElement('button');
            completeBtn.className = 'btn btn-success';
            completeBtn.textContent = 'Complete';
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
            });
            btnGroup.appendChild(completeBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });
            btnGroup.appendChild(deleteBtn);

            li.appendChild(btnGroup);
            taskList.appendChild(li);

            taskInput.value = '';
        }
    }
});
