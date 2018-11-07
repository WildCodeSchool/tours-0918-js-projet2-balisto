import { Injectable } from '@angular/core';
import { Media } from '../common/media';

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
// Sauvegarde les messages dans le local storage
   saveToLocalStorage(messages) {
     const data = JSON.stringify(messages);
     localStorage.setItem('Messagerie', data);
   }
// Récupère les message envoyé depuis "nous contacter" dans un tableau "messages"
   get(): Media[] {
     return this.messages;
   }
// Ajoute le tableau "messages" de "nous contacter" dans la messagerie
   add(messagerie: Media) {
     this.messages.push(messagerie);
     this.saveToLocalStorage(this.messages);
   }

// supprime un message
   delete(messagerie: Media) {
     // tslint:disable-next-line:no-shadowed-variable
     const index = this.messages.findIndex(message => message.email === messagerie.email);
     this.messages.splice(index, 1);
     this.saveToLocalStorage(this.messages);
   }
}
