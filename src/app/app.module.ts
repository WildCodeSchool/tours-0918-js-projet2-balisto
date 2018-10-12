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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalerieComponent,
    SlideshowComponent,
    FooterComponent,
<<<<<<< HEAD
    OutiltriComponent,
    PageProduitsComponent,
    ComparateurComponent,
    IndexComposantsComponent,
    PagetriComponent,
    SearchPageComponent
=======
    PagetriComponent
>>>>>>> 57a280f46688378629ca7e6e08cf13b12f89cb6e
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
