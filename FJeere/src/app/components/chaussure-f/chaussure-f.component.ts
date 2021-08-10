import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { PanierService } from 'src/app/services/panier.service';
import { ProduitsService } from 'src/app/services/produits.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chaussure-f',
  templateUrl: './chaussure-f.component.html',
  styleUrls: ['./chaussure-f.component.scss']
})
export class ChaussureFComponent implements OnInit {

  produits:Produit[];
  urlimg = 'data:image/png;base64,';
  itemInCart: number;
   constructor(private listeproduit:ProduitsService,private route:ActivatedRoute, private panier:PanierService) { }

   ngOnInit(): void {
  
    this.listeproduit.getChaussureF().subscribe( produits => {
        this. produits =  produits;
        console.log(this. produits);
          
    });
}

  addPanier(produit:Produit) {
    this.panier.addCart(produit);
  }

}
