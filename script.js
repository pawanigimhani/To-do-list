document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const currentDateElement = document.getElementById('currentDate');


    function displayCurrentDate() {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        currentDateElement.textContent = formattedDate;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
        } else if (taskText.length > 25) {
            alert('Task cannot exceed 25 characters.');
        } else {
            const li = document.createElement('li');
            li.textContent = taskText;

            const doneBtn = document.createElement('button');
            doneBtn.textContent = 'Done';
            doneBtn.classList.add('done-btn');
            doneBtn.addEventListener('click', function() {
                li.classList.toggle('completed');
                if (li.classList.contains('completed')) {
                    li.removeChild(doneBtn);
                    li.removeChild(deleteBtn);
                    const tickMark = document.createElement('span');
                    tickMark.textContent = '✔️';
                    tickMark.classList.add('tick-mark');
                    li.appendChild(tickMark);
                }
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(li);
            });

            li.appendChild(doneBtn);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }
   
    addTaskBtn.addEventListener('click', addTask);
    displayCurrentDate();
});
