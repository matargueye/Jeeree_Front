import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService} from 'src/app/services/client.service';

@Component({
  selector: 'app-compte-client',
  templateUrl: './compte-client.component.html',
  styleUrls: ['./compte-client.component.scss']
})
export class CompteClientComponent implements OnInit {



  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formConnexion: any;

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientservice: ClientService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nom:  ['', Validators.required],
      prenom: ['', Validators.required],
      adresseclient: ['', Validators.required],
      telclient: ['', Validators.required],

     
  });
     

  }
  onSubmit(){
    const  client = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      nom: this.loginForm.value.nom ,
      prenom:this.loginForm.value.prenom,
      adresseclient:this.loginForm.value.adresseclient,
      telclient:this.loginForm.value.telclient,
  };
  
  this.clientservice.CreateCompteClient(client).subscribe(
    data => {
      console.log(data);
      return this.router.navigate(['/login']);
       

    },
    error => {
     /* this.errorMessage = 'username ou mot de passe incorrect';*/
      console.log(error);

  });
  }
}
