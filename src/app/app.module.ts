import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalerieComponent } from './galerie/galerie.component';
import { MediaModalComponent } from './media-modal/media-modal.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { OutiltriComponent } from './outiltri/outiltri.component';
import { PagetriComponent } from './pagetri/pagetri.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalerieComponent,
    MediaModalComponent,
    SlideshowComponent,
    FooterComponent,
    OutiltriComponent,
    PagetriComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
