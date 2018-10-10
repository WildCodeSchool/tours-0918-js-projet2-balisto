import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComposantsComponent  } from './index-composants/index-composants.component';
import { PageProduitsComponent } from './page-produits/page-produits.component';
import { ComparateurComponent } from './comparateur/comparateur.component';

const routes: Routes = [
  { path: 'index', component: IndexComposantsComponent  },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'Produits', component: PageProduitsComponent },
  { path: 'Comparateur', component: ComparateurComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
