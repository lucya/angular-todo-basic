import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor() { }

  addHero(todo: Todo) {
    console.log(`added hero w/ id=${todo.id}`);
    // return todo;
  }
  updateTodo(todo: Todo) {
    console.log('addTodo : ', todo);
  }
}
