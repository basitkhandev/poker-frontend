import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class NotAuthenticatedGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    console.log(this.authService.isLoggedIn());
    if (!localStorage.getItem('token')) {
   
      return true; // Allow access to sign-in page if user is not authenticated
    } else {
      this.router.navigate(['/']); // Redirect to home page if user is authenticated
      return false;
    }
  }
}
