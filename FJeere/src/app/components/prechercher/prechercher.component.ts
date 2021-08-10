import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { Produit } from 'src/app/models/produit';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';
import { SeashbarService } from 'src/app/services/seashbar.service';

@Component({
  selector: 'app-prechercher',
  templateUrl: './prechercher.component.html',
  styleUrls: ['./prechercher.component.scss']
})
export class PrechercherComponent implements OnInit {

  produits:Produit[];
  urlimg = 'data:image/png;base64,';
  itemInCart: number;
  constructor(private listeproduit:ProduitsService,private route:ActivatedRoute, private panier:PanierService, public searchService:SeashbarService) { }

  ngOnInit(): void {
  
    this.listeproduit.getAllProduits().subscribe( produits => {
        this. produits =  produits;
        console.log(this. produits);
          
    });
}

  addPanier(produit:Produit) {
    this.panier.addCart(produit);
  }
}
