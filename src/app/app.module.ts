import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GalerieComponent } from './galerie/galerie.component';
import { MediaModalComponent } from './media-modal/media-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GalerieComponent,
    MediaModalComponent
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
