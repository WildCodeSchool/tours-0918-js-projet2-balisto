import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLogin: boolean;

  login(password): boolean {
    if (password === 'Admin') {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
    return this.isLogin;
  }
  logout() {
    this.isLogin = false;
  }
}
