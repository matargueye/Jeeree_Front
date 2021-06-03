import { Component, OnInit } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nbProduit:number;
  constructor(private panier:PanierService) { }

  ngOnInit(): void {
    this.panier.cartItem.subscribe(data =>{
      this.nbProduit= data.length;
      console.log( this.nbProduit);
    }
      );
  }

}

