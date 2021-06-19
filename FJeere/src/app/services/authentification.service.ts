import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
      return this.currentUserSubject.value;
  }
  login(login: Login) {
    return this.http.post<Login>(`${environment.apiUrl}/login_check`,login )
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            const helper = new JwtHelperService();
            const decodedToken = helper.decodeToken(user.token);
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('roles', JSON.stringify(decodedToken.roles));
            localStorage.setItem('username', JSON.stringify(decodedToken.username));
            localStorage.setItem('prenom', JSON.stringify(decodedToken.prenom));
            localStorage.setItem('nom', JSON.stringify(decodedToken.nom));
        
            this.currentUserSubject.next(user);
            return user;
        }));
}

logout() {
  // remove user from local storage and set current user to null
  localStorage.removeItem('currentUser');
  this.currentUserSubject.next(null);
}

}
