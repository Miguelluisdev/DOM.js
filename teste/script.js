document.addEventListener('DOMContentLoaded', function () {
  const taskList = document.getElementById('task-list');
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-button');
  const generatePdfButton = document.getElementById('generate-pdf');

  addTaskButton.addEventListener('click', function () {
      const taskText = taskInput.value;
      if (taskText) {
          const li = document.createElement('li');
          li.textContent = taskText;
          taskList.appendChild(li);
          taskInput.value = '';
          saveTasksToLocalStorage();
      }
  });

  generatePdfButton.addEventListener('click', function () {
      // Aqui você pode implementar a lógica para gerar um PDF da lista de tarefas
  });

  function saveTasksToLocalStorage() {
      const tasks = Array.from(taskList.children).map(li => li.textContent);
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      for (const task of tasks) {
          const li = document.createElement('li');
          li.textContent = task;
          taskList.appendChild(li);
      }
  }

  loadTasksFromLocalStorage();
});
