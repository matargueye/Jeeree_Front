import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
@Injectable({
providedIn: 'root'
})
export class AuthService {
private url = 'http://127.0.0.1:8000/authentication_token';
constructor(private http: HttpClient) { }
login(Login: Login) {
return this.http.post(this.url, Login);
}
  }

