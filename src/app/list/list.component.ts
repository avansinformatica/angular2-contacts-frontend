import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos;

  constructor(private tds: TodoService) {
      this.todos = tds.todos;
   }

  ngOnInit() {
  }

}
