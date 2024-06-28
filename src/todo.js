
// This class is responsible for the creation of projects
class Project {

    // constructor creates a new project with an array of todos, a title,
    // description, due date, and whether or not it is complete
    constructor(title, description, dueDate) {
        this.todoListClass = new TodoList();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }

    // mark a project complete by turning the boolean to true
    markComplete() {
        this.complete = true;
    }
}

// This class is responsible for the creation of todos
class Todo {

    // constructor creates a new todo item given a title, description, and due date
    constructor(title, description, dueDate) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }

    // mark a todo complete by turning the boolean to true
    markComplete() {
        this.complete = true;
    }
}

// This class is responsible for the management of todo items in projects
class TodoList {

    // this constructor creates an empty array of todo items
    constructor() {
        this.todoList = [];
    }

    // add a todo item to the array of todos by calling the Todo constructor
    // and pushing the object to the array
    addTodo(title, description, dueDate) {
        let newTodo = new Todo(title, description, dueDate);
        this.todoList.push(newTodo);
    }

    // delete a todo item by a given index
    deleteTodo(index) {
        this.todoList.splice(index, 1);
    }
}

export { Project, Todo, TodoList };