import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

import { IndexComposantsComponent  } from './index-composants/index-composants.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { PagetriComponent } from './pagetri/pagetri.component';
import { AdminModule } from './admin/admin.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageProduitsComponent } from './page-produits/page-produits.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { AppRoutingModule } from './app-routing.module';
import { AdvsearchComponent } from './advsearch/advsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    FooterComponent,
    PagetriComponent,
    IndexComposantsComponent,
    PageProduitsComponent,
    ComparateurComponent,
    SearchPageComponent,
    AdvsearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
