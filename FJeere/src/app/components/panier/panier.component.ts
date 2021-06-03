import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  produits:any[];

  constructor() { }

  ngOnInit(): void {
    this.produits=JSON.parse(localStorage.getItem('cart'));
    console.log( this.produits);

  }

}
