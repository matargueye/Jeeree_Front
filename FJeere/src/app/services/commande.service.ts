import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }


FaireCommande(data:any){
  const  headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  return this.http.post<any[]>(`${environment.apiUrl}/api/commandes`, data, { headers});
 
}


getCommande(): Observable<any[]>  {
  const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  return this.http.get<any[]>(`${environment.apiUrl}/api/liste/commandes`, {headers},
  );
}
}
