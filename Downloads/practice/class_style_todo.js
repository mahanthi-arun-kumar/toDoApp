class ToDoManager {
   constructor() {
      this.tasks = [];
      this.toDoWrapper = document.getElementById("app");
      this.toDoHeader = new ToDoHeader();
      const header = this.toDoHeader.init(this.addTask.bind(this));
      this.toDoContainer = new ToDoContainer();
      const container = this.toDoContainer.init(this.deleteTask.bind(this), this.updateTask.bind(this), this.duplicateTask.bind(this));
      this.toDoWrapper.append(header);
      this.toDoWrapper.append(container);
   }
   addTask(taskInput) {
      if (taskInput) {
         let task = {};
         task.taskInput = taskInput;
         task.checkBoxStatus = false;
         this.tasks.push(task);
         this.toDoContainer.renderTasks(this.tasks);
      }
   }
   deleteTask(task) {
      let taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
      this.toDoContainer.renderTasks(this.tasks);
   }
   updateTask(task, checkBoxStatus) {
      let taskIndex = this.tasks.indexOf(task);
      for (let i = 0; i < this.tasks.length; i++) { console.log(this.tasks[i]); }
      this.tasks[taskIndex].checkBoxStatus = checkBoxStatus;
      this.toDoContainer.renderTasks(this.tasks);
   }
   duplicateTask(task) {
      let taskIndex = this.tasks.indexOf(task);
      let duplicateTask = {};
      duplicateTask.taskInput = task.taskInput;
      duplicateTask.checkBoxStatus = task.checkBoxStatus;
      this.tasks.splice(taskIndex + 1, 0, duplicateTask);
      console.log(this.tasks[taskIndex + 1].checkBoxStatus);
      // this.tasks[taskIndex + 1].checkBoxStatus = false;
      console.log(this.tasks[taskIndex + 1].checkBoxStatus);
      this.toDoContainer.renderTasks(this.tasks);
   }
}


class ToDoHeader {
   init(addTask) {
      let headerWrapper = document.createElement("div");
      let taskInput = document.createElement("input");
      taskInput.id = "newTask";
      let addButton = document.createElement("button");
      addButton.innerText = "Add";
      addButton.id = "add";
      headerWrapper.append(taskInput);
      headerWrapper.append(addButton);
      taskInput.addEventListener("keyup", function (event) {
         if (event.keyCode === 13) {

            addTask(taskInput.value);
            taskInput.value = ""
         }
      });
      addButton.addEventListener('click', function () { addTask(taskInput.value); taskInput.value = ""; });
      return headerWrapper;
   }
}


class ToDoContainer {

   init(deleteTask, updateTask, duplicateTask) {
      // this.toDoTask = new ToDoTask();
      let containerWrapper = document.createElement("div");
      containerWrapper.className = "container";
      this.inCompletedTasksList = document.createElement("ul");
      this.completedTasksList = document.createElement("ul");
      containerWrapper.append(this.inCompletedTasksList);
      containerWrapper.append(this.completedTasksList);
      this.deleteTask = deleteTask;
      this.updateTask = updateTask;
      this.deleteTask = deleteTask;
      this.duplicateTask = duplicateTask;
      return containerWrapper;
   }


   renderTasks(tasks) {
      this.inCompletedTasksList.innerHTML = "";
      this.completedTasksList.innerHTML = "";
      let toDoTask = new ToDoTask(); // what is the difference if i have used same thing in the 
      for (let i = 0; i < tasks.length; i++) {


         if (tasks[i].checkBoxStatus) {
            this.completedTasksList.append(toDoTask.init(tasks[i], this.deleteTask, this.updateTask, this.duplicateTask));
         }
         else {
            this.inCompletedTasksList.append(toDoTask.init(tasks[i], this.deleteTask, this.updateTask, this.duplicateTask));
         }

      }
   }
}

class ToDoTask {
   init(task, deleteTask, updateTask, duplicateTask) {
      let listItem = document.createElement("li");
      let checkBox = document.createElement("input");
      let label = document.createElement("label");
      let deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete";
      let duplicateButton = document.createElement("button");
      duplicateButton.innerText = "Duplicate";
      duplicateButton.className = "duplicate"
      deleteButton.addEventListener('click', function () {
         deleteTask(task);
      });
      label.innerText = task.taskInput;
      checkBox.type = "checkbox";
      checkBox.className = "checkBox";
      checkBox.checked = task.checkBoxStatus;
      checkBox.addEventListener('click', function (event) {
         if (event.target.className === "checkBox") {
            console.log(event.target.checked);
            if (event.target.checked) {
               task.checkBoxStatus = true;
               updateTask(task, task.checkBoxStatus);

            }
            else {
               task.checkBoxStatus = false;
               updateTask(task, task.checkBoxStatus);

            }
         }
      }
      );
      duplicateButton.addEventListener('click', function () {
         duplicateTask(task);
      });

      listItem.appendChild(checkBox);
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      listItem.appendChild(duplicateButton);
      return listItem;
   }

}
class ToDoApp {
   constructor() {
      this.toDoManager = new ToDoManager();
   }
}
let toDoApp = new ToDoApp();

//duplicate a task
//whether creating instance is better 
//I have to pull that into an github account
//way of creating an instance what is the difference 
//Rather than binding that function shall I send the entire reference of ToDo Manager
