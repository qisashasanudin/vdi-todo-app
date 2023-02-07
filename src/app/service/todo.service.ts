import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  GetTodos() {
    return this.http.get('http://localhost:3000/todos', {
      withCredentials: true,
    });
  }

  GetTodoById(id: any) {
    return this.http.get(`http://localhost:3000/todos/${id}`, {
      withCredentials: true,
    });
  }

  CreateTodo(todo: any) {
    return this.http.post('http://localhost:3000/todos', todo, {
      withCredentials: true,
    });
  }

  UpdateTodoById(id: any, todo: any) {
    return this.http.put(`http://localhost:3000/todos/${id}`, todo, {
      withCredentials: true,
    });
  }

  DeleteTodoById(id: any) {
    return this.http.delete(`http://localhost:3000/todos/${id}`, {
      withCredentials: true,
    });
  }
}
