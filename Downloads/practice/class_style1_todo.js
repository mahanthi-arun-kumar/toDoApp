let taskInput = document.getElementById("newTask");
let addButton = document.getElementById("addButton");
let incompleteTaskHolder = document.getElementById("incompleteTasks");
let completedTasksHolder = document.getElementById("completedTasks");
let taskListener = document.getElementById("tasks");

class Task {  //  class name 
  constructor(task) {
    this.task = task; // never attach datatype with name
    //this.checkBoxStatus = "unChecked"; // make a constant and use it
    // this.id = Math.random(); // could use timeStamp
  }  //data attribute property(set attribute and get attribute)

  createNewTaskElement() {
    let listItem = document.createElement("li");
    // listItem.id = this.id;
    let checkBox = document.createElement("input");
    let label = document.createElement("label");
    let deleteButton = document.createElement("button");
    label.innerText = this.taskString;
    checkBox.type = "checkbox";
    checkBox.className = "checkBox";
    checkBox.id = 1;   // make different way
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    deleteButton.id = 2;
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    return listItem;
  }

  addTask(incompleteTaskHolder, listItem) {  // when do we use static and instance methods,this in classes
    incompleteTaskHolder.appendChild(listItem);
  }
  static makeCompleteTask(taskHolder, listItem) {  //can we access this inside static method

    taskHolder.appendChild(listItem);
  }
  static makeInCompleteTask(taskHolder, listItem) {

    taskHolder.appendChild(listItem);
  }


  static deleteTask(listItem) {
    let unOrderedList = listItem.parentNode;
    unOrderedList.removeChild(listItem);
  }


}

class AddNewListItem { // naming convention
  addTask() {
    let newTask = new Task(taskInput.value); //
    let listItem = newTask.createNewTaskElement();
    newTask.addTask(incompleteTaskHolder, listItem);
    taskInput.value = "";
  }
}

// class newTask{

let ob = new addNewListItem(); //naming
addButton.onclick = ob.addTask;
// }

taskListener.addEventListener("click", function (event) {
  console.log(event.target.id);
  let targetElement = event.target;
  if (targetElement.id === 2) {
    Task.deleteTask(targetElement.parentNode);
  }
  if (targetElement.id === 1) {
    if (targetElement.checked) {
      console.log(ob);
      Task.makeCompleteTask(completedTasksHolder, targetElement.parentNode);
    }
    else {
      Task.makeInCompleteTask(incompleteTaskHolder, targetElement.parentNode);
    }
  }
});