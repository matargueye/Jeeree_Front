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
  constructor(private authService:AuthentificationService ,private route:Router ) { }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem('roles'));
    this.email = JSON.parse(localStorage.getItem('username'));
 
    console.log(this.email);
    console.log( this.roles);

  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.authService.logout();
    return this.route.navigate(['login']);
  }


  isClient() {
    if ( this.roles === "CLIENT") {
      return true;
    }
  }
  isVendeur() {
      if ( this.roles[0] === 'VENDEUR') {
        return true;
      }
    }
  isLivreur() {
    if ( this.roles[0] === 'LIVREUR' ) {
      return true;
    }
  }

}
