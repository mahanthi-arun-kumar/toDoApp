(function () {
	var taskInput = document.getElementById("newTask");
	var addButton = document.getElementById("addButton");
	var incompleteTaskHolder = document.getElementById("incomplete-tasks");
	var completedTasksHolder = document.getElementById("completed-tasks");
	var TaskListener = document.getElementById("tasks");
	var listElementIndex = 0; // why cannot this be computed.
	var taskArray = []; // why? new array

	TaskListener.addEventListener("click", function (event) {
		var targetElement = event.target;
		if (targetElement.className === "delete") // Should you target by class.
		{
			return deleteTaskById(targetElement.parentNode.id);
		}
		if (targetElement.className === "checkBox") {
			if (targetElement.checked) {
				return taskCompleted(event.target.parentNode); //makeComplete
			}
			else {
				return taskIncomplete(event.target.parentNode);
			}
		}
	});

	//to create a new task
	var createNewTaskElement = function (taskString) {
		if (taskString) {
			var listItem = document.createElement("li");
			listItem.id = listElementIndex++;
			var checkBox = document.createElement("input");
			listItem.label = document.createElement("label");

			listItem.deleteButton = document.createElement("button");
			listItem.label.innerText = taskString;
			checkBox.type = "checkbox";
			checkBox.className = "checkBox";
			listItem.deleteButton.innerText = "Delete";
			listItem.deleteButton.className = "delete";
			listItem.appendChild(checkBox);
			listItem.appendChild(listItem.label);
			listItem.appendChild(listItem.deleteButton);
			return listItem;
		}
	}

	var addTask = function (Task) {
		incompleteTaskHolder.appendChild(Task);
		taskInput.value = "";
	}

	var addTaskArray = function () {
		var taskElement = createNewTaskElement(taskInput.value);
		const length = taskArray.push(taskElement);
		addTask(taskArray[length - 1]);
	}

	addButton.onclick = addTaskArray;

	var getTaskElement = function (taskId) {
		for (let index = 0; index < taskArray.length; index += 1) {
			if (taskArray[index].id === taskId) {
				return taskArray[index];
			}
		}
	}

	//delete a task


	var deleteTaskById = function (taskId) {
		var listItem = getTaskElement(taskId); // spelling mistake
		var ul = listItem.parentNode;
		ul.removeChild(listItem);
	}

	var taskCompleted = function (task) {
		completedTasksHolder.appendChild(task);
	}


	var taskIncomplete = function (task) {
		incompleteTaskHolder.appendChild(task);
	}

})();

