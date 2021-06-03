import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { ProduitComponent } from './components/produit/produit.component';
import { PanierComponent } from './components/panier/panier.component';
import { ProduitSelecteComponent } from './pages/produit-selecte/produit-selecte.component';



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
    ProduitComponent,
    PanierComponent,
    ProduitSelecteComponent,

 
   
    
    
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }