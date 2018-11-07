import { Component, OnInit } from '@angular/core';
import { Media } from '../common/media';

import { MessagerieService } from '../common/messagerie.service';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  messages: Media[];


  constructor(private service: MessagerieService, public loginService: LoginService) { }

  ngOnInit() {
    this.messages = this.service.messages;
  }

// Pour supprimer un message
  delete(messagerie: Media) {
    this.service.delete(messagerie);
  }

}
