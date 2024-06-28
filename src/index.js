import { Project, Todo, TodoList } from './todo';
import { addProjectToDOM, displayTodos } from './dom';
import { createProject, createTodo } from './buttons';
import './style.css';

// initialize webpage with an empty array of projects and a default project for any generic task
let projects = [];

let defaultProject = new Project("Default Project", "This is the default project for any generic tasks", "No due date");

// create variable currProject to keep track of current project
let currProject = { current: null };
currProject.current = defaultProject;

projects.push(defaultProject);
addProjectToDOM(defaultProject, currProject);
displayTodos(defaultProject);

// add a listener to the new project div that will open up the form to make a new project
const projectDialog = document.querySelector(".new-project-dialog");
const newProjectBtn = document.querySelector("#add-project");
newProjectBtn.addEventListener("click", () => {
    projectDialog.showModal();
});

// add a listener to the new project button to submit the form to create a new project
const newProjectSubmitBtn = document.querySelector("#submit-project");
newProjectSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createProject(projects, currProject);
    projectDialog.close();
});

// add a listener to the new todo button to submit the form to create a new project
const todoDialog = document.querySelector(".new-todo-dialog");
const newTodoSubmitBtn = document.querySelector("#submit-todo");
newTodoSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createTodo(currProject.current);
    todoDialog.close();
});
