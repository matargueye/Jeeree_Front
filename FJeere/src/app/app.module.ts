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
import { PanierService } from './services/panier.service';
import { CommandeService } from './services/commande.service';
import {MatButtonModule} from '@angular/material/button';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import {MatTableModule} from '@angular/material/table';
import { UsercommandeComponent } from './pages/usercommande/usercommande.component';
import { EditeclientComponent } from './components/editeclient/editeclient.component';
import { ComptelivreurComponent } from './livreurs/comptelivreur/comptelivreur.component';
import { EspacelivreurComponent } from './livreurs/espacelivreur/espacelivreur.component';
import { EditlivreurComponent } from './livreurs/editlivreur/editlivreur.component';
import { ComptevendeurComponent } from './vendeurs/comptevendeur/comptevendeur.component';
import { AjoutproduitComponent } from './vendeurs/ajoutproduit/ajoutproduit.component';
import { ListeproduitComponent } from './vendeurs/listeproduit/listeproduit.component';
import { AppareilleComponent } from './components/appareille/appareille.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { LegumeComponent } from './components/legume/legume.component';
import { ModifierCLientComponent } from './pages/modifier-client/modifier-client.component'; 




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
    ListeproduitComponent,
    AppareilleComponent,
    FruitComponent,
    LegumeComponent,
    ModifierCLientComponent,

 
   
    
    
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
