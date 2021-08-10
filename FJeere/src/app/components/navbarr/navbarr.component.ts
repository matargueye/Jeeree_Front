import { Component, OnInit } from '@angular/core';
import { SeashbarService } from 'src/app/services/seashbar.service';
import { Produit } from 'src/app/models/produit';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';
import { ProduitsService } from 'src/app/services/produits.service';


@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.scss']
})
export class NavbarrComponent implements OnInit {
  produits:Produit[];
  urlimg = 'data:image/png;base64,';

  constructor(public searchService:SeashbarService,private listeproduit:ProduitsService,private route:ActivatedRoute, private panier:PanierService) { }
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
