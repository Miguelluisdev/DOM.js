// function que adiciona tarefa

function addTask() {
  //titulo da tarefa
  const taskTittle = document.querySelector("#task-title").value;

  // verificação
  if (taskTittle) {
    // clona template
    const template = document.querySelector(".template");
    const newTask = template.cloneNode(true);

    // add title
    newTask.querySelector(".title-task").textContent = taskTittle;

    // remover as classes
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    // adicionando tarefas na lista
    const list = document.querySelector("#task-list");
    list.appendChild(newTask);

    // botão remover task
    const removeBtn = newTask.querySelector("#remove-btn");
    removeBtn.addEventListener("click", function () {
      removeTask(this);
    });
    // adicionar evento de completar tarefa
    const doneBtn = newTask.querySelector("#done-btn");
    doneBtn.addEventListener("click", function () {
      completeTask(this);
    });
    // limpar input
    document.querySelector("#task-title").value = "";
  }
}

// funçao de remover tarefa
function removeTask(task) {
  task.parentNode.remove(true);
}
// função de completar tarefa
function completeTask(quesk) {
  const taskToComplete = quesk.parentNode;
  taskToComplete.classList.toggle("done");
}

// adicionar tarefa
const addBtn = document.querySelector("#add-btn");
addBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  addTask();
});
