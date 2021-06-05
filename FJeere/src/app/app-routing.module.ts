import { AuthentificationComponent } from './components/authentification/authentification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteClientComponent } from './components/compte-client/compte-client.component';
import { ListeproduitsComponent } from './components/listeproduits/listeproduits.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBareComponent } from './components/side-bare/side-bare.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcceuilleComponent } from './pages/acceuille/acceuille.component';
import { ConnexionclientComponent } from './pages/connexionclient/connexionclient.component';
import { CreationCompteClientComponent } from './pages/creation-compte-client/creation-compte-client.component';
import { ProduitComponent } from './components/produit/produit.component';
import { ProduitSelecteComponent } from './pages/produit-selecte/produit-selecte.component';
import { PanierComponent } from './components/panier/panier.component';
import { EspaceclientComponent } from './pages/espaceclient/espaceclient.component';
import { PaniersComponent } from './pages/paniers/paniers.component';


const routes: Routes = [
  {
    path:'acceuille',
    component: AcceuilleComponent
  },

  {
    path:'login',
    component: ConnexionclientComponent

  },
  
  {
    path:'Creation_compte',
    component: CreationCompteClientComponent
  },
  {
    path:'client',
    component:EspaceclientComponent
  },
   
  {
    path:'panier',
    component:PaniersComponent
   
  },
  
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'sidBire',
    component:SideBareComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
