import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { BehaviorSubject } from 'rxjs';
import { Produit } from 'src/app/models/produit';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
  
})
export class CommandeComponent implements OnInit {
  produits: any;
  roles: any;
  form: FormGroup;
  submitted = false;
  tab = [];
  total = 0;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commandeservice: CommandeService,
    private panier:PanierService) { }

  ngOnInit(): void {

    this.produits = JSON.parse(localStorage.getItem('cart'));
    this.roles = JSON.parse(localStorage.getItem('roles'));

    this.form = this.formBuilder.group({
  
      produit: [this.formBuilder.array([]), Validators.required]
    });
    this.produits.forEach((element) => {
      this.total += (element.quantite * element.prixunitaire);
    });
  }
  onUpload(){
    this.submitted = true;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.produits.length; i++) {
      const element = this.produits[i];
      let j = 1;
      while (j <= this.produits[i].quantite) {
        this.tab.push(this.produits[i].id  );
        j++;
        // console.log(this.tab);
      }

    }
    const commande = {
      plat: this.tab
    };
    this.commandeservice.FaireCommande(commande).subscribe( data => {
      alert('Votre commande a été enrégistré avec succes');
    }, error => {
      alert(error);
    });
  }
  


    
  
}

