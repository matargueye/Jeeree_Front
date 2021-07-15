import { Component, OnInit ,ViewChild} from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Produit } from 'src/app/models/produit';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-listeproduits',
  templateUrl: './listeproduits.component.html',
  styleUrls: ['./listeproduits.component.scss']
})
export class ListeproduitsComponent implements OnInit {
  produits:Produit[];
  urlimg = 'data:image/png;base64,';
  itemInCart: number;
  constructor(private listeproduit:ProduitsService,private route:ActivatedRoute, private panier:PanierService) { }

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
    
  


