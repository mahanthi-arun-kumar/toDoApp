var taskIndex = 0;
var tasks = new Array();
var inputBar = document.getElementById("myInput");
var taskContainer = document.getElementById("Result");
var checkedItems=new Array();
var checkedItemsIndex=0;
tickedTaskNodesArrayIndex=0;
var arun=0;

function Add()
{
 var newTask = inputBar.value;
 tasks[taskIndex] = newTask;
 var newTaskNode = createTaskNode(newTask);
 taskContainer.appendChild(newTaskNode);
 taskIndex += 1;
 resetInputBar();
}

function resetInputBar() {
 inputBar.value = "";
}

function createTaskNode(task) {

  var taskNode = document.createElement('div'); 
  taskNode.setAttribute("id",checkedItemsIndex);

  checkedItemsIndex++;
  var deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  arun +=1;
  checkbox.setAttribute("id",arun);
  
 // checkbox.setAttribute("id",)
  var taskTextNode=document.createElement('div'); 

  var taskText = document.createTextNode(task);
  taskTextNode.appendChild(taskText);
  taskNode.appendChild(checkbox);
  taskNode.appendChild(taskTextNode);
  taskNode.appendChild(deleteButton);
  taskNode.className = 'taskItemWrapper';
  deleteButton.addEventListener('click',function(){ deleteTaskNode(taskNode)});
  checkbox.addEventListener('click',function(e)
  {
    console.log('e.target',e.target.id);
    
    let checkedNode = document.getElementById(arun);
    if(checkedNode.checked)
    {
      var y=document.getElementById(arun).parentNode;
      var x=y.childNodes;
      x[1].setAttribute("class","strikethrough");   
    }
   // else
   // {
   // untickedTaskNodes(checkedItemsIndex);
   // }
  });
  return taskNode;

}
function deleteTaskNode(node)
{
  var deleteNode=node;
  deleteNode.parentNode.removeChild(deleteNode);
      
}
function tickedTaskNodes(index)
{
   checkedItems[tickedTaskNodesArrayIndex]=index;
   tickedTaskNodesArrayIndex+=1;
   return checkedItems;

}
function remove()
{
  for(var i=0;i<checkedItems.length;i++)
  {
    var x=document.getElementById(checkedItems[i]);
    x.parentNode.removeChild(x);
  }
}
// Pass the checkbox name to the function
function getCheckedBoxes(chkboxName) {
  var checkboxes = document.getElementsByName(chkboxName);
  var checkboxesChecked = [];
  // loop over them all
  for (var i=0; i<checkboxes.length; i++) {
     // And stick the checked ones onto an array...
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  // Return the array if it is non-empty, or null
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}




// Call as
// var checkedBoxes = getCheckedBoxes("mycheckboxes");

/*
var close1 = document.getElementsByClassName("close1");
var i;
for (i = 0; i < close1.length; i++) {
  close1[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

*/

/*

var li = document.createElement("li");
   var span = document.createElement("SPAN");
  var btn = document.createElement("BUTTON");   
  btn.innerHTML = "delete";  
 // btn.className = 'close';                 
  span.className = "close";
   span.appendChild(btn); 
  li.append(span);








 var numberOfNodes = document.getElementsByTagName("LI");
var i;
for (i = 0; i < numberOfNodes.length; i++) {
  var span = document.createElement("SPAN");
  var btn = document.createElement("BUTTON");   
btn.innerHTML = "delete";   
  
  span.className = "close";
  span.appendChild(btn);
  numberOfNodes[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var all_elements=[];
var i=0;

function Add() {
  
  var li = document.createElement("li");
  var checkbox = document.createElement('input');
 checkbox.type = "checkbox";
 li.appendChild(checkbox); 
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.id=i++;
 // li.setAttribute("id",)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var btn = document.createElement("BUTTON");   
  btn.innerHTML = "delete";  
 // btn.className = 'close';                 
  span.className = "close";
   span.appendChild(btn); 
  li.append(span);
  all_elements.push(li.id);
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none"; 
    }
  }
}
document.getElementById("demo").innerHTML = all_elements;

*/