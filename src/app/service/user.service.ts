import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  Register(user: any) {
    return this.http.post('http://localhost:3000/auth/register', user);
  }

  Login(user: any) {
    return this.http.post('http://localhost:3000/auth/login', user);
  }

  isLoggedIn() {
    return this.http.get('http://localhost:3000/auth/profile', {
      withCredentials: true,
    });
  }

  Logout() {
    return this.http.post(
      'http://localhost:3000/auth/logout',
      {},
      { withCredentials: true }
    );
  }

  GetUsers() {
    return this.http.get('http://localhost:3000/users', {
      withCredentials: true,
    });
  }

  GetUser(id: any) {
    return this.http.get(`http://localhost:3000/users/${id}`, {
      withCredentials: true,
    });
  }

  UpdateUser(id: any, user: any) {
    return this.http.put(`http://localhost:3000/users/${id}`, user, {
      withCredentials: true,
    });
  }

  DeleteUser(id: any) {
    return this.http.delete(`http://localhost:3000/users/${id}`, {
      withCredentials: true,
    });
  }
}
