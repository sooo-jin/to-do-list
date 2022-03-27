const toDoForm = document.querySelector("#todo-form");
const todoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDos= [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deletToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) =>toDo.id !== parseInt(li.id));
    saveToDos();
    }

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "✔";
    btn.addEventListener("click", deletToDo);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos  !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


