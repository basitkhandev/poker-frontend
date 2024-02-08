import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent {
  constructor(private router: Router) {}

  navigateToLogin(){
    this.router.navigate(['sign_in']);
  }

}
