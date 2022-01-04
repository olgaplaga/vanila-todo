//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filter = document.querySelector(".filter-todo");

//Functions
function addTodo(event) {
  event.preventDefault();
  const listElement = event.target.parentElement.parentElement;
  if (todoInput.value === "") {
    listElement.classList.remove("no-input");
    void listElement.offsetWidth;
    listElement.classList.add("no-input");
  } else {
    // event.preventDefault);s
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    //create list element
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.className = "todo-item";
    todoDiv.appendChild(newTodo);

    //save to storage
    saveLocalTodos(todoInput.value);

    //checkmark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="far fa-check-circle"></i>';
    completeButton.className = "complete-btn";
    //   todoDiv.appendChild(completeButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.className = "trash-btn";
    //   todoDiv.appendChild(trashButton);

    //button container
    const buttonsField = document.createElement("div");
    buttonsField.className = "btn-field";
    buttonsField.appendChild(completeButton);
    buttonsField.appendChild(trashButton);
    todoDiv.appendChild(buttonsField);

    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input field
    todoInput.value = "";
  }
}

function deleteElement(event) {
  const item = event.target;
  const listElement = event.target.parentElement.parentElement;
  console.log(event.target.parentElement.parentElement);
  if (item.className === "trash-btn") {
    listElement.classList.add("delete-item");
    removeLocalTodos(listElement);
    listElement.addEventListener("transitionend", () => {
      listElement.remove();
    });
  } else if (item.className === "complete-btn") {
    listElement.classList.toggle("checked");
  }
}

//Local storage
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    //create list element
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.className = "todo-item";
    todoDiv.appendChild(newTodo);

    //checkmark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="far fa-check-circle"></i>';
    completeButton.className = "complete-btn";
    //   todoDiv.appendChild(completeButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    trashButton.className = "trash-btn";
    //   todoDiv.appendChild(trashButton);

    //button container
    const buttonsField = document.createElement("div");
    buttonsField.className = "btn-field";
    buttonsField.appendChild(completeButton);
    buttonsField.appendChild(trashButton);
    todoDiv.appendChild(buttonsField);

    //append to list
    todoList.appendChild(todoDiv);
  });
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteElement);
// filter.addEventListener("click", filterTodo)
