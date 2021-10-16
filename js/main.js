var taskInput = document.querySelector("#taskInput input"),
  addButton = document.querySelector(".addButton button"),
  allTasks = document.querySelector("#allTasks"),
  taskContent = document.querySelector("#allTasks .task > Span"),
  arrOfTasks;

if (localStorage.getItem("tasks") == null) {
  arrOfTasks = [];
} else {
  arrOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

dataFromLocalStorge();

function addTask() {
  if (taskInput.value !== "") {
    addTasks(taskInput.value);
    taskInput.value = "";
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    addTask();
  }
});

addButton.addEventListener("click", addTask);

function addTasks(taskTxt) {
  const tasksObj = {
    id: Date.now(),
    title: taskTxt,
    completed: false,
  };

  arrOfTasks.unshift(tasksObj);
  displayTasks(arrOfTasks);
  setDataToLocalstorge(arrOfTasks);
}

function displayTasks(arrTasks) {
  var cartona = ``;
  for (var i = 0; i < arrTasks.length; i++) {
    cartona += `<div class="task d-flex justify-content-between align-items-center px-2 py-2 col-md-12">
      <span data-id=${arrTasks[i].id} onclick="done(${i})" class="taskContent py-2 col-md-9">${arrTasks[i].title}</span>
      <div class="btns row col-md-3 d-flex justify-content-around">
      <button type="submit" onclick="update(${i})" class="update btn btn-info col-md-5">
      Update
      </button>
      <button type="submit" onclick="del(${i})" class="del btn btn-danger col-md-5">
      Delete
      </button>
      </div>
      </div>`;
  }
  document.querySelector("#allTasks").innerHTML = cartona;
}

function setDataToLocalstorge(arrOfTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrOfTasks));
}

function dataFromLocalStorge() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    displayTasks(tasks);
  }
}

function del(del) {
  arrOfTasks.splice(del, 1);
  localStorage.setItem("tasks", JSON.stringify(arrOfTasks));
  displayTasks(arrOfTasks);
}

function done(index) {
  
}
