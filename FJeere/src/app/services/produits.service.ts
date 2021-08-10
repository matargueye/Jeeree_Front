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
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/appareilles` );
   
  }
  getFruit() {
    return this.http.get<[Produit]>(`${environment.apiUrl}/liste/fruits` );
     
 }

 getLegume() {
      return this.http.get<[Produit]>(`${environment.apiUrl}/liste/legumes` );
       
      }
getAccessoire() {
        return this.http.get<[Produit]>(`${environment.apiUrl}/liste/accessoire` );
         
        }


getAccessoireH() {
          return this.http.get<[Produit]>(`${environment.apiUrl}/liste/accessoire/homme` );
           
          }

getAccessoireF() {
return this.http.get<[Produit]>(`${environment.apiUrl}/liste/accessoire/femme` );
   
  }
getAccessoireE() {
    return this.http.get<[Produit]>(`${environment.apiUrl}/liste/accessoire/enfant` );
       
      }
getChaussure() {
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/chaussure` );
           
          }
getChaussureH() {
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/chaussure/homme` );
               
              }  
getChaussureF() {
 return this.http.get<[Produit]>(`${environment.apiUrl}/liste/chaussure/femme` );
                   
  }   
getChaussureE() {
    return this.http.get<[Produit]>(`${environment.apiUrl}/liste/chaussure/enfant` );
                      
     }  
getVetement() {
 return this.http.get<[Produit]>(`${environment.apiUrl}/liste/vetement` );
                        
  }  
  getVetementH() {
    return this.http.get<[Produit]>(`${environment.apiUrl}/liste/vetement/homme` );
             
}


getVetementF() {
  return this.http.get<[Produit]>(`${environment.apiUrl}/liste/vetement/femme` );
   
  
}
getVetementE() {
return this.http.get<[Produit]>(`${environment.apiUrl}/liste/vetement/enfant` );
           
}

}