import { Project, Todo, TodoList } from './todo';


let defaultProject = new Project("Default Project", "This is the default project for any generic tasks", "No due date");
defaultProject.todoListClass.addTodo("finish project", "I need to finish the project", "June 20");
defaultProject.todoListClass.addTodo("finish project2", "I need to finish the project", "June 20");
defaultProject.todoListClass.addTodo("finish project3", "I need to finish the project", "June 20");
defaultProject.todoListClass.addTodo("finish project4", "I need to finish the project", "June 20");

let testTodo = new TodoList();
testTodo.addTodo("finish project", "I need to finish the project", "June 20");

console.log(defaultProject);
console.log(defaultProject.todoListClass.todoList[1]);
defaultProject.todoListClass.deleteTodo(1);
console.log(defaultProject.todoListClass.todoList[1]);
