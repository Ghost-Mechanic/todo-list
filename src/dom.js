import { displayProject } from "./buttons";

// this function will add a given project to the DOM 
function addProjectToDOM(project, currProject) {
    const projects = document.querySelector(".projects");
    const addProjectButton = document.querySelector("#add-project");
    
    // create a new div element for a project and set its text content to the title
    let newProject = document.createElement("div");
    newProject.classList.add("project");
    newProject.textContent = project.title;

    // add an event listener to the new project div to display its todos on click
    // also update the current project
    newProject.addEventListener("click", () => {
        currProject.current = project;
        displayProject(project);
    });

    projects.insertBefore(newProject, addProjectButton);
}

// this function creates the todo in the DOM
function addTodoToDOM(todo) {
    
    // begin by getting a reference to the todos section for the project
    const todos = document.querySelector(".todos");

    // create a new element for the todo to be added
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");

    // create a new element for the content of the todo, which is the title and due date
    let todoContent = document.createElement("div");
    todoContent.classList.add("content");

    // create a new input element for the checkbox next to the todo to mark completeness
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // create elements for the todo title and due date and append them to the todo content section
    let todoTitle = document.createElement("h3");
    let todoDueDate = document.createElement("p");
    todoTitle.textContent = todo.title;
    todoDueDate.textContent = todo.dueDate;
    todoContent.appendChild(todoTitle);
    todoContent.appendChild(todoDueDate);

    // add the checkbox and content to the todo element
    newTodo.appendChild(checkbox);
    newTodo.appendChild(todoContent);

    // append the todo element to the container of todos
    todos.appendChild(newTodo);

    // add an event listener to the todo element to expand it when clicked
    newTodo.addEventListener("click", () => {
        expandTodo(todo, todoContent);
    });
}

// this function expands the todo by displaying its description when clicked
function expandTodo(todo, todoContent) {

    // if the description is not displayed, display it when clicked
    if (todoContent.childElementCount < 3) {
        let todoDescription = document.createElement("p");
        todoDescription.textContent = todo.description;

        todoContent.appendChild(todoDescription);
    }
    // if the description is already displayed, clicking again removes it
    else {
        todoContent.removeChild(todoContent.lastChild);
    }
}

// this function will display the todos of a given project
function displayTodos(project) {
    const todos = document.querySelector(".todos");
    const newTodoDialog = document.querySelector(".new-todo-dialog");

    // initially display project description and due date, along with new todo button
    let projectDescription = document.createElement("p");
    let projectDueDate = document.createElement("p");
    let newTodoBtn = document.createElement("button");
    projectDescription.textContent = project.description;
    projectDueDate.textContent = project.dueDate;
    newTodoBtn.textContent = "+ Todo";
    todos.appendChild(projectDescription);
    todos.appendChild(projectDueDate);
    todos.appendChild(newTodoBtn);

    // show form to add a new todo when the new todo botton is clicked
    newTodoBtn.addEventListener("click", () => {
        newTodoDialog.showModal();
    });

    // display list of todos for project
    for (const todo of project.todoListClass.todoList) {
        addTodoToDOM(todo);
    }
}

export { addProjectToDOM, displayTodos, addTodoToDOM };