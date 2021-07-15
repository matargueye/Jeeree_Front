import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-editeclient',
  templateUrl: './editeclient.component.html',
  styleUrls: ['./editeclient.component.scss']
})
export class EditeclientComponent implements OnInit {

  loginForm: FormGroup;
  userForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  formConnexion: any;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private Client:ClientService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      nom:  ['', Validators.required],
      prenom: ['', Validators.required],
      adresseclient: ['', Validators.required],
      telclient: ['', Validators.required],
     
  });
  
  this.userForm = this.formBuilder.group({
    olderpassword: ['', Validators.required],
    newpassword: ['', Validators.required],
  

   
});
     
  }
  onSubmit(){
    const  client = {
      username: this.loginForm.value.username,
      nom: this.loginForm.value.nom ,
      prenom:this.loginForm.value.prenom,
      adresseclient:this.loginForm.value.adresseclient,
      telclient:this.loginForm.value.telclient,
  };

  const  pass = {
    olderpassword: this.userForm.value.username,
    newpassword: this.userForm.value.password,
    
};



 this.Client.EditeClient(client).subscribe(
  data => {
  console.log(data);
    

  },
  error => {
   /* this.errorMessage = 'username ou mot de passe incorrect';*/
    console.log(error);

});

  this.Client.EditePasswordClient(pass).subscribe(
    data => {
    alert('Votre mot de pass  a été modifier avec succes');
    console.log(data);
   
       

    },
    error => {
     /* this.errorMessage = 'username ou mot de passe incorrect';*/
      console.log(error);

  });
  }

}
