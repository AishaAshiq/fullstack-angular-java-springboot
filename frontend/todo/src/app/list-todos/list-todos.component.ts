import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor( 
    public id:number,
    public description: string,
    public targetDate: Date,
    public completed: boolean,
  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: string;
    // new Todo(1, 'Learn Python', false, new Date()),
    // new Todo(2, 'Update Resume', false, new Date()),
    // new Todo(3, 'Learn Java', false, new Date())
  
  constructor(private todoService: TodoDataService, 
    private router:Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos('todoapp').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log(`Delete todo ${id}`)
    this.todoService.deleteTodo('todoapp', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} successful!`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`Update ${id}`)
    this.router.navigate(['todos', id])
  }

}
