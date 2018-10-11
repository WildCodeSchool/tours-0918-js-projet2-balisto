import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
search: string;
resultat: string;
  constructor(public router: Router) {
    this.resultat = this.search;
  }

  ngOnInit() {

  }
send() {
this.router.navigate(['resultat', this.search]);
  }
}
