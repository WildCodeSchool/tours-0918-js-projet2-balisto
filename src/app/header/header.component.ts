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


  constructor(private service: LoginService, private router: Router, public loginService: LoginService) { }

  ngOnInit() {
  }
  login() {
    this.result = this.service.login(this.password);

    if (this.result) {
      this.router.navigate(['/index']);
    } else {
      return false;
    }

  }
  logout() {
    this.result = this.service.logout();

    if (this.result) {
      this.router.navigate(['/index']);
    }
  }


}
