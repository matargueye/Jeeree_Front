import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SeashbarService {
  private SERVER_URL ='http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }
  private selectedOption = new BehaviorSubject<Produit>({
   id:null,
   designation:null,
   prixunitaire:null,
   caracteristique:null,
   isActive:null,
   image:null,
   quantite:null
  });



  private selectedOptions = new BehaviorSubject<Produit[]>([]);

  option$ = this.selectedOption.asObservable();
  options$ = this.selectedOptions.asObservable();
  
  isOptionEmpty$: Observable<boolean>;

  isOptionsEmpty$: Observable<boolean>;

  search(q: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(
      this.SERVER_URL + 'products?name_like=' + q
    );
  }

  updateSelectedOption(option: Produit) {
    this.selectedOption.next(option);
  }

  updateSelectedOptions(options: Produit[]) {
    this.selectedOptions.next(options);
  }

}
