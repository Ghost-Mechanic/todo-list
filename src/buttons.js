import { addProjectToDOM, displayTodos, addTodoToDOM } from './dom';
import { Project } from './todo';

// function to create a new project and add it to the dom through form input
function createProject(projects, currProject) {
    const titleField = document.querySelector("#project-title");
    const descriptionField = document.querySelector("#project-description");
    const dueDateField = document.querySelector("#project-due-date");

    // create new project attributes with values given by user in the form
    let newTitle = titleField.value;
    let newDescription = descriptionField.value;
    let newDueDate = dueDateField.value

    // add default values to fields if none are given
    if (titleField.value == "") {
        newTitle = "Untitled";
    }
    if (descriptionField.value == "") {
        newDescription = "No description given";
    }
    if (dueDateField.value == "") {
        newDueDate = "No due date given";
    }

    // create a new project object with constructor and add it to the array of projects
    let newProject = new Project(newTitle, newDescription, newDueDate);
    projects.push(newProject);

    // reset fields back to empty
    titleField.value = "";
    descriptionField.value = "";
    dueDateField.value = "";

    // add the project that was just made to the DOM
    addProjectToDOM(newProject, currProject);
}

// this function will display a project's todos on the DOM
function displayProject(project) {
    
    // begin by clearing the section
    const todoSection = document.querySelector(".todos");
    todoSection.innerHTML = "";

    // call displayTodos for the given project to display its todos
    displayTodos(project);
}

// this function will create a todo for a project
function createTodo(project) {
    const titleField = document.querySelector("#todo-title");
    const descriptionField = document.querySelector("#todo-description");
    const dueDateField = document.querySelector("#todo-due-date");

    // create new todo attributes with values given by user in the form
    let newTitle = titleField.value;
    let newDescription = descriptionField.value;
    let newDueDate = dueDateField.value

    // add default values to fields if none are given
    if (titleField.value == "") {
        newTitle = "Untitled";
    }
    if (descriptionField.value == "") {
        newDescription = "No description given";
    }
    if (dueDateField.value == "") {
        newDueDate = "No due date given";
    }

    // create a new todo object and add it to the project's todo list
    project.todoListClass.addTodo(newTitle, newDescription, newDueDate);

    // reset fields back to empty
    titleField.value = "";
    descriptionField.value = "";
    dueDateField.value = "";

    addTodoToDOM(project.todoListClass.todoList[project.todoListClass.todoList.length - 1]);
}

export { createProject, displayProject, createTodo }