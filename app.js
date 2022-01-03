//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Functions
function addTodo(event) {
    event.preventDefault();
    const listElement = event.target.parentElement.parentElement
if (todoInput.value === '') {
    listElement.classList.remove('no-input')
    void listElement.offsetWidth;
    listElement.classList.add('no-input')

} else {
    // event.preventDefault);s
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    //create list element
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
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
    buttonsField.appendChild(completeButton)
    buttonsField.appendChild(trashButton)
    todoDiv.appendChild(buttonsField);
    
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input field
    todoInput.value = "";
}


}

function deleteElement(event) {
    const item = event.target;
    // console.log(event.target.parentElement.parentElement)
    if (item.className === 'trash-btn'){
        event.target.parentElement.parentElement.remove()
    } else if (item.className = 'complete-btn'){
        event.target.parentElement.parentElement.classList.toggle('checked')
    }
     
}



//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteElement)
