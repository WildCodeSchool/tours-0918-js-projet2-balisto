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
  result: boolean;


  constructor(private service: LoginService, private router: Router) { }

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


}
