// authentication.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticated: boolean = false;

  constructor() { }

  login() {
    // Logic to authenticate the user
    this.isAuthenticated = true;
    console.log(  this.isAuthenticated)
  }

  logout() {
    // Logic to log out the user
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
