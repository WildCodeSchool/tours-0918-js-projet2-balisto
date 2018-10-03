import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OutiltriComponent } from './outiltri/outiltri.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OutiltriComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
