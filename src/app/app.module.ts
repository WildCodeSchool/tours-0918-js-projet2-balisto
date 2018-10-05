import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { FooterComponent } from './footer/footer.component';
import { OutiltriComponent } from './outiltri/outiltri.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent
    FooterComponent,
    OutiltriComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
