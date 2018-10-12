import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalerieComponent } from './galerie/galerie.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { OutiltriComponent } from './outiltri/outiltri.component';
import { PageProduitsComponent } from './page-produits/page-produits.component';
import { AppRoutingModule } from './app-routing.module';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { IndexComposantsComponent } from './index-composants/index-composants.component';
import { PagetriComponent } from './pagetri/pagetri.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalerieComponent,
    SlideshowComponent,
    FooterComponent,
    OutiltriComponent,
    PageProduitsComponent,
    ComparateurComponent,
    IndexComposantsComponent,
    PagetriComponent
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
