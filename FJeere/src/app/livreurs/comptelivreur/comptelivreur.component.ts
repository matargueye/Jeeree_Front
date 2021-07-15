import { Component, OnInit } from '@angular/core';
import { FormGroup , Validators , FormBuilder,} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivreurService } from 'src/app/services/livreur.service';

@Component({
  selector: 'app-comptelivreur',
  templateUrl: './comptelivreur.component.html',
  styleUrls: ['./comptelivreur.component.scss']
})
export class ComptelivreurComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formConnexion: any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private livreurservice:LivreurService) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nom:  ['', Validators.required],
      prenom: ['', Validators.required],
      adresse_Llivreur: ['', Validators.required],
      tel_Llivreur: ['', Validators.required],
      cni: ['', Validators.required],
      ville: ['', Validators.required],

  });
  }

  onSubmit(){
    const  livreur = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      nom: this.loginForm.value.nom ,
      prenom:this.loginForm.value.prenom,
      adresse_livreur:this.loginForm.value.adresse_livreur,
      tel_livreur:this.loginForm.value.tel_client,
      cni:this.loginForm.value.cni,
      ville:this.loginForm.value.ville,
  };
  this.livreurservice.CreateCompteLivreur(livreur).subscribe(
    data => {
      console.log(data);
      return this.router.navigate(['/']);
       

    },
    error => {
     /* this.errorMessage = 'username ou mot de passe incorrect';*/
      console.log(error);

  });
  }
}

