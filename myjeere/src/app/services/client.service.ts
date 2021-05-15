import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Client} from "../models/client";


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private  http: HttpClient) { }

  createCompteClient(data: any)  {
    return this.http.post<Client[]>( `${environment.apiUrl}/new/clients`, data);
  }



}
