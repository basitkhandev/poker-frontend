import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css']
})
export class FindTutorComponent {

  constructor(private router: Router){}

  navigate() {
    this.router.navigate(['/coach_profile'])
  }

}
