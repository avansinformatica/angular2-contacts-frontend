import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../domain/todo';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[] = [];
  selectedTodo: Todo;

  constructor(private todoService: TodoService, private router: Router) { }

  getTodos(): void {
    console.log('getTodos() aangeroepen');
    this.todoService
        .getTodos()
        .then(todos => this.todos = todos);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.todoService.create(name)
      .then(todo => {
        this.todos.push(todo);
        this.selectedTodo = null;
      });
  }

  delete(todo: Todo): void {
    this.todoService
        .delete(todo._id)
        .then(() => {
          this.todos = this.todos.filter(h => h !== todo);
          if (this.selectedTodo === todo) { this.selectedTodo = null; }
        });
  }

  ngOnInit(): void {
    console.log('ngOnInit aangeroepen')
    this.getTodos();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  gotoDetail(): void {
    this.router.navigate(['/todo-detail', this.selectedTodo._id]);
  }
}
