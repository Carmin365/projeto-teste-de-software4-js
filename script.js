document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    
    function renderTask(text) {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';
        listItem.textContent = text;
        
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = ' [X]';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => listItem.remove();

        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);
    }

    
    addButton.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            renderTask(text);
            taskInput.value = '';
        }
    });


    renderTask("Tarefa inicial para teste de leitura");
});