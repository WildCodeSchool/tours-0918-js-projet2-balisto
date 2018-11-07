import { Injectable } from '@angular/core';
import { Media } from '../Models/media';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  messages: Media[] = [];
  msgg: any;

  constructor() {
    if (localStorage.Messagerie) {
      const data = JSON.parse(localStorage.Messagerie);
      this.messages = data;
    }
   }

   saveToLocalStorage(messages) {
     const data = JSON.stringify(messages);
     localStorage.setItem('Messagerie', data);
   }

   get(): Media[] {
     return this.messages;
   }

   add(messagerie: Media) {
     this.messages.push(messagerie);
     this.saveToLocalStorage(this.messages);
   }

   delete(messagerie: Media) {
     // tslint:disable-next-line:no-shadowed-variable
     const index = this.messages.findIndex(message => message.email === messagerie.email);
     this.messages.splice(index, 1);
     this.saveToLocalStorage(this.messages);
   }
}
