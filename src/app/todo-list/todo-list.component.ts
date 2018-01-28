import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title = 'First!! ToDoit!!';
  todo: Todo = new Todo();
  todoList: [Todo];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoService) {
  }
  addTodo() {
    console.log('add', this.todo);
    if (this.todo.title) {
      this.router.navigate(['/update'], { relativeTo: this.route, skipLocationChange: true });
      // this.router.navigate(['update']);
      // this.todoService.updateTodo(this.todo);
    }
  }
  getList() {
    this.todoList.push(null);
  }
  ngOnInit() {
    this.getList();
  }

}
