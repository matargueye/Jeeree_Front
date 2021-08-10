import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { PanierService } from 'src/app/services/panier.service';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-accessoire-e',
  templateUrl: './accessoire-e.component.html',
  styleUrls: ['./accessoire-e.component.scss']
})
export class AccessoireEComponent implements OnInit {

  produits:Produit[];
  urlimg = 'data:image/png;base64,';
  itemInCart: number;
   constructor(private listeproduit:ProduitsService,private route:ActivatedRoute, private panier:PanierService) { }

   ngOnInit(): void {
  
    this.listeproduit.getAccessoireE().subscribe( produits => {
        this. produits =  produits;
        console.log(this. produits);
          
    });
}

  addPanier(produit:Produit) {
    this.panier.addCart(produit);
  }


}
