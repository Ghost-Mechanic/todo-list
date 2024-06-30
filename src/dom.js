import { displayProject, removeProject } from "./buttons";
import Delete from './delete-circle.svg';

// this function will add a given project to the DOM 
function addProjectToDOM(project, currProject) {
    const projects = document.querySelector(".projects");
    const addProjectButton = document.querySelector("#add-project");
    
    // create a new div element for a project and set its text content to the title
    let newProject = document.createElement("div");
    newProject.classList.add("project");
    newProject.textContent = project.title;
    newProject.dataset.index = projects.childElementCount - 1;
    newProject.project = project;

    // add an event listener to the new project div to display its todos on click
    // also update the current project
    newProject.addEventListener("click", () => {
        currProject.current = project;
        displayProject(project, newProject);
    });

    projects.insertBefore(newProject, addProjectButton);
}

// this function creates the todo in the DOM
function addTodoToDOM(todo, project, todoIndex) {
    
    // begin by getting a reference to the todos section for the project
    const todos = document.querySelector(".todos");

    // create a new element for the todo to be added
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.dataset.index = todoIndex;

    // create a new element for the content of the todo, which is the title and due date
    let todoContent = document.createElement("div");
    todoContent.classList.add("content");

    // create a new element for the remove section of the todo, which will allow the todo to be removed
    let todoDelete = document.createElement("div");
    todoDelete.classList.add("remove");

    // create a new input element for the checkbox next to the todo to mark completeness
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // create a new image for each todo which is a delete button
    const deleteButton = new Image();
    deleteButton.src = Delete;
    deleteButton.classList.add("delete-button");
    todoDelete.appendChild(deleteButton);

    // create elements for the todo title and due date and append them to the todo content section
    let todoTitle = document.createElement("h3");
    let todoDueDate = document.createElement("p");
    todoTitle.textContent = todo.title;
    todoDueDate.textContent = todo.dueDate;
    todoContent.appendChild(todoTitle);
    todoContent.appendChild(todoDueDate);

    // add the checkbox, content, and delete button to the todo element
    newTodo.appendChild(checkbox);
    newTodo.appendChild(todoContent);
    newTodo.appendChild(todoDelete);

    // append the todo element to the container of todos
    todos.appendChild(newTodo);

    // add an event listener to the todo element to expand it when clicked
    newTodo.addEventListener("click", () => {
        expandTodo(todo, todoContent);
    });

    // add an event listener to the todo's delete button to delete the todo when clicked
    deleteButton.addEventListener("click", () => {
        project.todoListClass.deleteTodo(todoIndex);
        newTodo.remove();
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
function displayTodos(project, projectDiv) {
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

    // add delete button to project only if it is not the default project
    if (projectDiv.dataset.index > 0) {
        let deleteProjectBtn = document.createElement("button");
        deleteProjectBtn.textContent = "Delete Project";
        todos.appendChild(deleteProjectBtn);
        deleteProjectBtn.addEventListener("click", () => {
            removeProject(projectDiv);
        });
    }

    // show form to add a new todo when the new todo botton is clicked
    newTodoBtn.addEventListener("click", () => {
        newTodoDialog.showModal();
    });

    // start a counter for todoIndex which will give each todo an index to make deletion easier
    let todoIndex = 0;

    // display list of todos for project
    for (const todo of project.todoListClass.todoList) {
        console.log(project);
        addTodoToDOM(todo, project, todoIndex);
        ++todoIndex;
    }
}

export { addProjectToDOM, displayTodos, addTodoToDOM };