import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrls: ['./side-bare.component.scss']
})
export class SideBareComponent implements OnInit {
  
  roles: string;
  email: string;
  nom: string;
  prenom:string;
  constructor(private authService:AuthentificationService ,private route:Router ) { }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.email = JSON.parse(localStorage.getItem('username'));
    this.nom = JSON.parse(localStorage.getItem('nom'));
    this.prenom = JSON.parse(localStorage.getItem('prenom'));

    //this.nom = JSON.parse(localStorage.getItem('nom'));
 
    console.log(this.email);
    console.log( this.roles);
    console.log( this.nom);
    console.log( this.prenom);

    

  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.authService.logout();
    return this.route.navigate(['login']);
  }


  isClient() {
    if(this.roles){
      if ( this.roles["0"] === "ROLE_CLIENT") {
        console.log(this.roles["0"] === "ROLE_CLIENT")
        return true;
      }

    }
   
  }
  isVendeur() {
      if ( this.roles[0] === 'ROLE_VENDEUR') {
        return true;
      }
    }
  isLivreur() {
    if ( this.roles[0] === 'ROLE_LIVREUR' ) {
      return true;
    }
  }

}
