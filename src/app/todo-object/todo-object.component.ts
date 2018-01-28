import { Todo } from './../todo';
import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-object',
  templateUrl: './todo-object.component.html',
  styleUrls: ['./todo-object.component.css']
})
export class TodoObjectComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService: TodoService,
    private location: Location) { }

  ngOnInit() {
    this.todo = new Todo();
    console.log('todo ', this.todo);
  }

  save() {
    // this.todoService.updateTodo(this.todo).
  }
  cancel() {
    this.location.back();
  }
}
