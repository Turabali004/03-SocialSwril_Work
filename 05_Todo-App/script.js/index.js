let addTodo = document.getElementById("addTodo");
let todoInput = document.getElementById("userData");
let todoList = document.getElementById("todoList");

addTodo.addEventListener("click", () => {
  // todos should not be added if the input field is empty
  let todos = document.createElement("li");
  todos.textContent = todoInput.value;
  todos.setAttribute("class", "todoLists");
  let parentTodos = document.createElement("div");
  parentTodos.setAttribute("id", "parentTodos");

  // Editer Buttons
  let doneTask = document.createElement("button");
  let editTask = document.createElement("button");
  let removeTask = document.createElement("button");
  doneTask.textContent = "Done";
  editTask.textContent = "Edit";
  removeTask.textContent = "Remove";
//   Buttons id config
    doneTask.setAttribute("id", "doneTask");
    editTask.setAttribute("id", "editTask");
    removeTask.setAttribute("id", "removeTask");
  
  todoList.appendChild(todos);
  todos.appendChild(parentTodos);
  parentTodos.appendChild(doneTask);
  parentTodos.appendChild(editTask);
  parentTodos.appendChild(removeTask);


//   Button event listeners
 editTask.onclick =  () => {
    todos.setAttribute('class', 'doneLists')

 } 
});

let doneMyTask = (todos) => {
    // todos.setAttribute('class', 'doneLists')
    alert('task complete')
}

