// Button Code
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// Text Input
var createFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // Check if data is empty
    if (!taskNameInput || !taskTypeInput) {
      alert("You Need to Fill Out the Task Form!");
      return false;
    }

    // package up data as an object
    var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
    };

    formEl.reset();

    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
  // Creates the List Elements
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  // Hold Task Info and connects with list
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  // Adds HTML elemts to <div>
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);
  // adds entire list items to list
  tasksToDoEl.appendChild(listItemEl);
}

// Click Response
formEl.addEventListener("submit", createFormHandler);