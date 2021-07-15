
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SideBareComponent } from './components/side-bare/side-bare.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcceuilleComponent } from './pages/acceuille/acceuille.component';
import { ConnexionclientComponent } from './pages/connexionclient/connexionclient.component';
import { CreationCompteClientComponent } from './pages/creation-compte-client/creation-compte-client.component';
import { EspaceclientComponent } from './pages/espaceclient/espaceclient.component';
import { PaniersComponent } from './pages/paniers/paniers.component';
import { CommandeComponent } from './components/commande/commande.component';
import { NavbarrComponent } from './components/navbarr/navbarr.component';
import { UsercommandeComponent } from './pages/usercommande/usercommande.component';
import { AppareilleComponent } from './components/appareille/appareille.component';
import { ModifierCLientComponent } from './pages/modifier-client/modifier-client.component';


const routes: Routes = [
  {
    path:'',
    component:AcceuilleComponent
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
    path:'commande',
    component:CommandeComponent
   
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


  {
    path:'recherche',
    component:NavbarrComponent
  },
  
  {
    path:'liste_commande',
    component:UsercommandeComponent
  }, 
  {
    path:'appareille',
    component:AppareilleComponent
  },
  {
    path:'edit_client',
    component:ModifierCLientComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
