import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrls: ['./side-bare.component.scss']
})
export class SideBareComponent implements OnInit {
  

  constructor(private authService:AuthentificationService ,private route:Router ) { }

  ngOnInit(): void {
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.authService.logout();
    return this.route.navigate(['login']);
  }

}
