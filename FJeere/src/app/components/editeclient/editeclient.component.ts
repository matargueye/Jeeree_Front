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
    oldPassword:  ['', Validators.required],
    newPassword: ['', Validators.required],
     
  });
     
  }
  onSubmit(){
    const  client = {
      oldPassword: this.loginForm.value.oldPassword ,
      newPassword:this.loginForm.value.newPassword,
  };
  
  this. Client.EditeClient(client).subscribe(
    data => {
      console.log(data);
      return this.router.navigate(['/client']);
       

    },
    error => {
     /* this.errorMessage = 'username ou mot de passe incorrect';*/
      console.log(error);

  });
  }
  



}
