import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-listecommande',
  templateUrl: './listecommande.component.html',
  styleUrls: ['./listecommande.component.scss']
})
export class ListecommandeComponent implements OnInit {
  commandes:any;
  constructor(private listecommande:CommandeService,private route:ActivatedRoute) { }

  ngOnInit(): void {


    this.listecommande.getCommande().subscribe( commandes => {
      this. commandes = commandes;
      console.log(this. commandes);
      
      
  });
  }


}