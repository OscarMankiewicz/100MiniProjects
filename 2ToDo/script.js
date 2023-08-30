document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const doneList = document.getElementById('doneList');


  function addTask() {
    if(taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.textContent = taskInput.value;

      newTask.addEventListener('click', function() {
        doneList.appendChild(newTask);

        newTask.addEventListener('click', function() {
          doneList.removeChild(newTask);
        });
      });

      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keydown', function(event) {
    if(event.keyCode === 'Enter' || event.keyCode === 13) {
      addTask();
    }
  });

  taskList.querySelectorAll('li').forEach(function(task) {
    task.addEventListener('click', function() {
      doneList.appendChild(task);

      task.addEventListener('click', function() {
        doneList.removeChild(task);
      });
    });
  });
});