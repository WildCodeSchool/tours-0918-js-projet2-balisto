import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  password: string;
  result;
  search: any;

  constructor(public router: Router, public loginService: LoginService) { }

  ngOnInit() {
  }
// Envois de la requete de recherche
  send() {
    this.router.navigate(['resultat', this.search]);
  }
// Fonction de connexion Admin
  login() {
    this.result = this.loginService.login(this.password);

    if (this.result) {
      this.router.navigate(['/index']);
    } else {
      return false;
    }
  }
// Fonction de deconnexion Admin
  logout() {
    this.result = this.loginService.logout();

    if (this.result) {
      this.router.navigate(['/index']);
    }
  }
}


