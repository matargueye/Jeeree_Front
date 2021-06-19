import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from '../models/login';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<any>;

  constructor(private http:HttpClient) { this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser = this.currentUserSubject.asObservable();}


FaireCommande(data:any){
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  console.log(headers);
  return this.http.post<any[]>(`${environment.apiUrl}/api/add/commande`, data , {headers}  );

 
}


getCommande(): Observable<any[]>  {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  return this.http.get<any[]>(`${environment.apiUrl}/api/liste/commandes`, {headers}
  );
}
}
