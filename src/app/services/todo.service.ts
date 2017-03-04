import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Todo } from '../domain/todo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private todosUrl = 'http://localhost:3000/api/todos';  // URL to web api

    // DI constructor
    constructor(private http: Http) { }

  getTodos(): Promise<Todo[]> {
    console.log('TodoService.getTodos() aangeroepen');
    return this.http.get(this.todosUrl)
               .toPromise()
               .then(response => response.json() as Todo[])
               .catch(this.handleError);
  }

  getTodo(id: number): Promise<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Todo> {
    return this.http
      .post(this.todosUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(todo: Todo): Promise<Todo> {
    const url = `${this.todosUrl}/${todo._id}`;
    return this.http
      .put(url, JSON.stringify(Todo), {headers: this.headers})
      .toPromise()
      .then(() => todo)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
