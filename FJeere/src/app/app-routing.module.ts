
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
import { ModifierCLientComponent } from './pages/modifier-client/modifier-client.component';
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
    path:'liste_commande',
    component:UsercommandeComponent
  }, 
  {
    path:'appareille',
    component:ListeAppareilleComponent
  },
  {
    path:'edit_client',
    component:ModifierCLientComponent
  },
  
  {

  path:'accessoire',
  component:ListeAccessoireComponent

},

{

  path:'accessoire_homme',
  component:ListeAccessoireHComponent

},
{

  path:'accessoire_femme',
  component:ListeAccessoireFComponent

},
{

  path:'accessoire_enfant',
  component:ListeAccessoireEComponent

},
{

  path:'vetement',
  component:ListeVetementComponent
  
},


{

  path:'vetement_homme',
  component:ListeVhommeComponent
  
},

{

  path:'vetement_femme',
  component:ListeVetementFComponent
  
},


{

  path:'vetement_tenfant',
  component:ListeVetementEComponent
  
},

{

  path:'chaussure',
  component:ListeChaussureComponent
  
},

{

  path:'chaussure_homme',
  component:ListeChaussureHComponent
  
},

{

  path:'chaussure_femme',
  component:ListeChaussureFComponent
  
},

{

  path:'chaussure_enfant',
  component:ListeChaussureEComponent
  
},

{

  path:'fruit',
  component:ListeFruitComponent
  
},

{

  path:'legume',
  component:ListeLegumeComponent
  
},

{

  path:'recherche',
  component:PrechercherComponent
  
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
