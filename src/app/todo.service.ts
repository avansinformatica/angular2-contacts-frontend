import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {

    todos;

    constructor(private http: Http) {
        let path = 'http://localhost:3000/api/todos';
        this.todos = http.get(path)
            .map(res => res.json());
    }
}