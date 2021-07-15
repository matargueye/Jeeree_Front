import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';



@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  produits:Produit[];

  constructor(private http:HttpClient) {}
  getAllProduits() {
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/produits` );
   
  }
 getProduit(id:number){
  
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/produits/` +id);
 }


 getAppareille() {
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/produits/appareilles` );
   
  }
  getFruit() {
    return this.http.get<[Produit]>(`${environment.apiUrl}/liste/produits/fruits` );
     
    }

    getLegume() {
      return this.http.get<[Produit]>(`${environment.apiUrl}/liste/produits/legumes` );
       
      }
}

