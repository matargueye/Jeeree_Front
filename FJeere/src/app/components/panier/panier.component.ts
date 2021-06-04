import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  produits:any[];
  nbProduit:number;
  urlimg = 'data:image/png;base64,';
  totalUpdate = new BehaviorSubject([]);
  total = 0;

  constructor(private panier:PanierService) { }

  ngOnInit(): void {
    this.produits=JSON.parse(localStorage.getItem('cart'));
    console.log( this.produits);

    this.panier.cartItem.subscribe(data =>{
      this.nbProduit= data.length;
      console.log( this.nbProduit);
    }
      );
        // tslint:disable-next-line: prefer-for-of
    this.produits.forEach((element) => {
      this.total += (element.quantite * element.prix);
    });

  }
  removeCart(id){
    for (let i = 0; i < this.produits.length; i++) {
      if (this.produits[i].id === id) {
        this.produits.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(this.produits));
      }
    }
  }
  addQuantity(id){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.produits.length; i++) {
      if (this.produits[i].id === id) {
        this.produits[i].quantite++;
        localStorage.setItem('cart', JSON.stringify(this.produits));
      }
    }
  }
  delQuantity(id){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.produits.length; i++) {
      const element = this.produits[i];
      if (this.produits[i].id === id) {
        this.produits[i].quantite--;
        localStorage.setItem('cart', JSON.stringify(this.produits));
      }
    }
  }
}
