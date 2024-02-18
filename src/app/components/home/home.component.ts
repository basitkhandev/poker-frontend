import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router){}

  navigate() {
    this.router.navigate(['/signin'])
  }

  navigateToSignUp() {
    this.router.navigate(['/logout'])
  }

  navigateToTutor() {
    this.router.navigate(['tutor'])
  }

}
