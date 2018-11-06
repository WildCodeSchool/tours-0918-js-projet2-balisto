import { Component, OnInit } from '@angular/core';
import { Media } from '../Models/media';
import { ActivatedRoute } from '@angular/router';

import { MessagerieService } from '../common/messagerie.service';
import { LoginService } from '../common/login.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  messages: Media[];
  msgg: Media;


  constructor(private activatedRoute: ActivatedRoute, private service: MessagerieService, public loginService: LoginService) { }

  ngOnInit() {
    this.messages = this.service.messages;
  }

  delete(messagerie: Media) {
    this.service.delete(messagerie);
  }

}
