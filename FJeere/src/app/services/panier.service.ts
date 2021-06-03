import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  placehorlder = [];
  cartItem = new BehaviorSubject([]);
  constructor() {  const ls = JSON.parse(localStorage.getItem('cart'));
  if (ls) {
    this.cartItem.next(ls);
  }}

  // tslint:disable-next-line: typedef
  addCart( produit: Produit){
    const ls = JSON.parse(localStorage.getItem('cart'));
    let exist: Produit;
    if (ls) {
      exist = ls.find((item) => {
        console.log(ls);
        return item.id === produit.id;
      });
    }
    if (exist) {
      exist.quantite++;
      localStorage.setItem('cart', JSON.stringify(ls));
    } else {
      if (ls) {
        const newData  = [...ls, produit];
        localStorage.setItem('cart', JSON.stringify(newData));
        this.cartItem.next(JSON.parse(localStorage.getItem('cart')));
      } else {
        this.placehorlder.push(produit);
        localStorage.setItem('cart', JSON.stringify(this.placehorlder));
        this.cartItem.next(this.placehorlder);
      }
    }

  }
}
