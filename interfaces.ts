console.log('interfaces..')

function showTodo(todo: {title:string, text:string}){
    console.log(todo.title+': '+todo.text);
}

let myTodo = {title:"Trash", text: "Take trash out.."};

showTodo(myTodo);

interface Todo{
    title: string;
    text: string;
}

function ShowTodo2(todo: Todo){
    console.log(todo.title + ': ' + todo.text);

}

ShowTodo2(myTodo);
