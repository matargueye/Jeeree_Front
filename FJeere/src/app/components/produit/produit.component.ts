import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';

import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {
 

  id: number;
  produit:any;
  urlimg = 'data:image/png;base64,';
  itemInCart: number;
  constructor(private listeproduit:ProduitsService ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.listeproduit.getProduit(this.id).subscribe( data => {
      this.produit= data;
      console.log( this.produit );
    });
  
 
  }


}