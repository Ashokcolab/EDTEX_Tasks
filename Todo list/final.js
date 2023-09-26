
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentDate = `${day}-${month}-${year}`;
        document.getElementById("dat").innerHTML = currentDate;

        const taskInput = document.getElementById('taskInput');
        const addButton = document.getElementById('addButton');
        const taskList = document.getElementById('taskList');

        addButton.addEventListener('click', addTask);

        function addTask() {
            
            const taskText = taskInput.value.trim();
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;
            taskTextSpan.classList.add('task-text');
            if (taskText == '') {
                alert("You must add the task");
            } else {
                const li = document.createElement('li');
                li.classList.add('task-item');

                const taskTextSpan = document.createElement('span');
                taskTextSpan.textContent = taskText;

                const doneButton = document.createElement('button');
                doneButton.textContent = 'Done';
                doneButton.addEventListener('click', markTaskAsDone);

                const crossSpan = document.createElement('span');
                crossSpan.textContent = '✕';
                crossSpan.classList.add('cross');
                crossSpan.addEventListener('click', removeTask);

                const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('done-button');
                buttonContainer.appendChild(doneButton);
                buttonContainer.appendChild(crossSpan);

                li.appendChild(taskTextSpan);
                li.appendChild(buttonContainer);
                taskList.appendChild(li);

                taskInput.value = '';
            }
        }

        function markTaskAsDone(event) {
            const taskItem = event.target.parentNode.parentNode;
            taskItem.classList.toggle('done');
            const doneButton = taskItem.querySelector('.done-button button');
            doneButton.textContent = taskItem.classList.contains('done') ? 'Undone' : 'Done';
        }

        function removeTask(event) {
            const crossSpan = event.target;
            const li = crossSpan.parentNode.parentNode;
            taskList.removeChild(li);
        }
 
