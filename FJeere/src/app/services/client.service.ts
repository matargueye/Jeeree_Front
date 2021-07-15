import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import{ HttpRequest,HttpHandler,HttpEvent , HttpHeaders} from '@angular/common/http'
import { Client } from '../models/client';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private currentUserSubject: BehaviorSubject<Login>;
  public currentUser: Observable<any>;
  constructor( private http:HttpClient) { }

CreateCompteClient(data:any){
  return this.http.post<Client[]>(`${environment.apiUrl}/new/clients`,data);
 
}

EditePasswordClient(data:any){
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
return this.http.put(`${environment.apiUrl}api/password/update`,data , {headers});
}

EditeClient(data:any){
const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));  
return this.http.put(`${environment.apiUrl}api/clients/edit`,data , {headers});
  }
  


}
