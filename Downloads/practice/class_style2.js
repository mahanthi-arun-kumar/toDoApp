class toDoHeader {

  initaliseHeader(callBack) {

    let addButton = document.getElementById("addButton");
    let taskInput = document.getElementById("newTask");
    console.log(taskInput.value);
    addButton.addEventListener('click', function () { callBack(taskInput.value) });
  }
}
class toDoManager {

  getTaskInput() {
    let ob = new toDoHeader();
    ob.initaliseHeader(this.callBack);
  }
  callBack(taskString) {
    let taskInput = taskString;
    obj10.initialiseToDoTask(taskInput);
    // console.log(listItem);
    // let container = new toDoContainer();
    // let incompleteTaskHolder = container.incompleteTaskHolder;
    // incompleteTaskHolder.appendChild(listItem);

  }

}
