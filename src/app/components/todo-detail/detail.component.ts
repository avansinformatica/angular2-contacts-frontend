import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Todo } from '../../domain/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'my-todo-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.css' ]
})
export class TodoDetailComponent implements OnInit {

  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.todoService.getTodo(params['id']))
      .subscribe(todo => this.todo = todo);
  }

  save(): void {
    this.todoService.update(this.todo)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
