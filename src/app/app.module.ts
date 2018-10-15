import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalerieComponent } from './galerie/galerie.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { PagetriComponent } from './pagetri/pagetri.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageProduitsComponent } from './page-produits/page-produits.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { IndexComposantsComponent } from './index-composants/index-composants.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalerieComponent,
    SlideshowComponent,
    FooterComponent,
    PageProduitsComponent,
    ComparateurComponent,
    IndexComposantsComponent,
    PagetriComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
