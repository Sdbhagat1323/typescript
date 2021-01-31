console.log('interfaces..');
function showTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = { title: "Trash", text: "Take trash out.." };
showTodo(myTodo);
function ShowTodo2(todo) {
    console.log(todo.title + ': ' + todo.text);
}
ShowTodo2(myTodo);
