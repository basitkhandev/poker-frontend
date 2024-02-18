import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    return this.checkAuthentication();
  }

  private checkAuthentication(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/signin']); // Redirect to sign-in page if not authenticated
      return false;
    }
  }
}
