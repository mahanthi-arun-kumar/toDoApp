(function(){
    var taskInput = document.getElementById("new-task");
    var addButton = document.getElementsByTagName("button")[0];
    var incompleteTaskHolder = document.getElementById("incomplete-tasks");
    var completedTasksHolder = document.getElementById("completed-tasks");
    var stopEventPropagator = document.getElementsByClassName("container")[0];
    var taskArray =new Array();
    stopEventPropagator.addEventListener("click",doSomething,false);
    var listItemIndex=0;
    
    document.addEventListener('click', function(){
        console.log(taskArray.length);
    },false);


    var taskObjectCreation = function()
    {
        var obj={};
        obj.taskToDo=taskInput;
        obj.deleteStatus="notDeleted";
        obj.checkBoStatus="notChecked";
        return obj;
    }


    //to create a new task
    var createNewTaskElement = function (taskString) {
    
        if(taskString)
        {	
        var listItem = document.createElement("li");
        listItem.id=listItemIndex++;
       
        var checkBox = document.createElement("input");
        var label = document.createElement("label");
        var deleteButton = document.createElement("button");
        label.innerText = taskString;
        checkBox.type="checkbox";
        deleteButton.innerText="Delete";
        deleteButton.className="delete";
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        return listItem;
        }
    }

    var arrayAddTask = function(ObjectToBeAdded)
    {
        console.log(ObjectToBeAdded.taskToDo);
        var listItemToBeAdded= createNewTaskElement(ObjectToBeAdded.taskToDo);
        incompleteTaskHolder.appendChild(listItemToBeAdded);
        bindTaskEvents(listItemToBeAdded, taskCompleted);   // the function which gives the functionality of delete,edit
	taskInput.value="";
        
       
        
    }
                
    var callArrayAddTaskObject = function()
    {
        var ob=new taskObjectCreation();
        const length=taskArray.push(ob);
        arrayAddTask(taskArray[length-1]);
    
    }

   
    var taskCompleted=function(){
            
        var listItem=this.parentNode;
        completedTasksHolder.appendChild(listItem);
                    bindTaskEvents(listItem, taskIncomplete);
    
    }
    
    var taskIncomplete=function(){
            var listItem=this.parentNode;
        incompleteTaskHolder.appendChild(listItem);
                bindTaskEvents(listItem,taskCompleted);
    }
 

    
    var arrayObjectDeletion = function(parentNode)
    {
          var listItemToBeDeleted =  parentNode;
          var indexToBeDeleted    = taskArray.indexOf(listItemToBeDeleted);
          taskArray.splice(indexToBeDeleted,1);
          console.log(taskArray);
          incompleteTaskHolder.innerHTML=null;
          arrayAddTask(taskArray);    
    }
    
    addButton.onclick=callArrayAddTaskObject;

    var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
        console.log(taskListItem);
        var checkBox=taskListItem.querySelector("input[type=checkbox]");
    
        var deleteButton=taskListItem.querySelector("button.delete");
            
        deleteButton.addEventListener("click", function(event)
        { 
            return arrayObjectDeletion(event.target.parentNode);
        });
        //   deleteButton.onclick=arrayObjectDeletion;
               
                checkBox.onchange=checkBoxEventHandler;
    }
    
    
    function doSomething(e) {
      
        e.stopPropagation();
    }
    
    
    
    }
    )();
    
    