import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Livreur } from '../models/livreur';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http:HttpClient) { }

  CreateCompteLivreur(data:any){
    return this.http.post<Livreur[]>(`${environment.apiUrl}/new/livreurs`,data);
   
  }
}
