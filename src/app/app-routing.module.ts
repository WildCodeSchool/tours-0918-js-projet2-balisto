import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComposantsComponent } from './index-composants/index-composants.component';
import { PageProduitsComponent } from './page-produits/page-produits.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CreerProduitComponent } from './creer-produit/creer-produit.component';

const routes: Routes = [
  { path: 'index', component: IndexComposantsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'produits/:id', component: PageProduitsComponent },
  { path: 'comparateur/:id', component: ComparateurComponent },
  { path: 'search-page/resultat/:search', component: SearchPageComponent },
  { path: 'creer-produit', component: CreerProduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
