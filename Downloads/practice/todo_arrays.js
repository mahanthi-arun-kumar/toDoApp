var todos = [];

function addTodo() {
    var inputValue = document.getElementById('todoInput').value;
    todos.push(inputValue);
}

function printTodos() {
    var list = document.getElementById('toDoList');
    list.innerHTML = ''; 
    
    for (var i = 0; i < todos.length; i++) {
        var li = document.createElement('li');
        var listItem = li.appendChild(document.createTextNode(todos[i]));
        list.appendChild(listItem);
    }
}

document.getElementById('button1', function() {
    addTodo();
    printTodos();
});