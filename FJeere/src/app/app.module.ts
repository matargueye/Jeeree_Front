import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { CompteClientComponent } from './components/compte-client/compte-client.component';
import { ListeproduitsComponent } from './components/listeproduits/listeproduits.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SideBareComponent } from './components/side-bare/side-bare.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AcceuilleComponent } from './pages/acceuille/acceuille.component';
import { ConnexionclientComponent } from './pages/connexionclient/connexionclient.component';
import { EspaceclientComponent } from './pages/espaceclient/espaceclient.component';
import {MatCardModule} from '@angular/material/card';
import { CreationCompteClientComponent } from './pages/creation-compte-client/creation-compte-client.component';
import { PanierComponent } from './components/panier/panier.component';
import { PaniersComponent } from './pages/paniers/paniers.component';
import { NavbarrComponent } from './components/navbarr/navbarr.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ListecommandeComponent } from './components/listecommande/listecommande.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import {MatTableModule} from '@angular/material/table';
import { UsercommandeComponent } from './pages/usercommande/usercommande.component';
import { EditeclientComponent } from './components/editeclient/editeclient.component';
import { ComptelivreurComponent } from './livreurs/comptelivreur/comptelivreur.component';
import { EspacelivreurComponent } from './livreurs/espacelivreur/espacelivreur.component';
import { EditlivreurComponent } from './livreurs/editlivreur/editlivreur.component';
import { ComptevendeurComponent } from './vendeurs/comptevendeur/comptevendeur.component';
import { AjoutproduitComponent } from './vendeurs/ajoutproduit/ajoutproduit.component';

import { AppareilleComponent } from './components/appareille/appareille.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { ModifierCLientComponent } from './pages/modifier-client/modifier-client.component';
import { LegumesComponent } from './components/legumes/legumes.component';
import { AccessoireComponent } from './components/accessoire/accessoire.component';
import { AccessoireHComponent } from './components/accessoire-h/accessoire-h.component';
import { AccessoireFComponent } from './components/accessoire-f/accessoire-f.component';
import { AccessoireEComponent } from './components/accessoire-e/accessoire-e.component';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { ChaussureHComponent } from './components/chaussure-h/chaussure-h.component';
import { ChaussureFComponent } from './components/chaussure-f/chaussure-f.component';
import { ChaussureEComponent } from './components/chaussure-e/chaussure-e.component';
import { VetementComponent } from './components/vetement/vetement.component';
import { VetementHComponent } from './components/vetement-h/vetement-h.component';
import { VetementFComponent } from './components/vetement-f/vetement-f.component';
import { VetementEComponent } from './components/vetement-e/vetement-e.component';
import { ListeAppareilleComponent } from './ListesProduits/liste-appareille/liste-appareille.component';
import { ListeAccessoireComponent } from './ListesProduits/liste-accessoire/liste-accessoire.component';
import { ListeVetementComponent } from './ListesProduits/liste-vetement/liste-vetement.component';
import { ListeVhommeComponent } from './ListesProduits/liste-vhomme/liste-vhomme.component';
import { ListeVetementFComponent } from './ListesProduits/liste-vetement-f/liste-vetement-f.component';
import { ListeVetementEComponent } from './ListesProduits/liste-vetement-e/liste-vetement-e.component';
import { ListeChaussureComponent } from './ListesProduits/liste-chaussure/liste-chaussure.component';
import { ListeChaussureHComponent } from './ListesProduits/liste-chaussure-h/liste-chaussure-h.component';
import { ListeChaussureFComponent } from './ListesProduits/liste-chaussure-f/liste-chaussure-f.component';
import { ListeChaussureEComponent } from './ListesProduits/liste-chaussure-e/liste-chaussure-e.component';
import { ListeAccessoireHComponent } from './ListesProduits/liste-accessoire-h/liste-accessoire-h.component';
import { ListeAccessoireFComponent } from './ListesProduits/liste-accessoire-f/liste-accessoire-f.component';
import { ListeAccessoireEComponent } from './ListesProduits/liste-accessoire-e/liste-accessoire-e.component';
import { ListeFruitComponent } from './ListesProduits/liste-fruit/liste-fruit.component';
import { ListeLegumeComponent } from './ListesProduits/liste-legume/liste-legume.component';
import { PrechercherComponent } from './components/prechercher/prechercher.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    CompteClientComponent,
    ListeproduitsComponent,
    HeaderComponent,
    SideBareComponent,
    FooterComponent,
    AcceuilleComponent,
    ConnexionclientComponent,
    EspaceclientComponent,
    CreationCompteClientComponent,
    PanierComponent,
    PaniersComponent,
    NavbarrComponent,
    CommandeComponent,
    ListecommandeComponent,
    UsercommandeComponent,
    EditeclientComponent,
    ComptelivreurComponent,
    EspacelivreurComponent,
    EditlivreurComponent,
    ComptevendeurComponent,
    AjoutproduitComponent,
 
    AppareilleComponent,
    FruitComponent,
    ModifierCLientComponent,
    LegumesComponent,
    AccessoireComponent,
    AccessoireHComponent,
    AccessoireFComponent,
    AccessoireEComponent,
    ChaussureComponent,
    ChaussureHComponent,
    ChaussureFComponent,
    ChaussureEComponent,
    VetementComponent,
    VetementHComponent,
    VetementFComponent,
    VetementEComponent,
    ListeAppareilleComponent,
    ListeAccessoireComponent,
    ListeVetementComponent,
    ListeVhommeComponent,
    ListeVetementFComponent,
    ListeVetementEComponent,
    ListeChaussureComponent,
    ListeChaussureHComponent,
    ListeChaussureFComponent,
    ListeChaussureEComponent,
    ListeAccessoireHComponent,
    ListeAccessoireFComponent,
    ListeAccessoireEComponent,
    ListeFruitComponent,
    ListeLegumeComponent,
    PrechercherComponent,
 

 
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorService, multi: true }],
  
  bootstrap: [AppComponent],
  entryComponents:[ CommandeComponent]
})
export class AppModule { }
