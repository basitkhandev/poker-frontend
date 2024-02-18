import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpApiServiceService } from 'src/app/services/http-api-service.service';

@Component({
  selector: 'app-logout-component',
  templateUrl: './logout-component.component.html',
  styleUrls: ['./logout-component.component.css']
})
export class LogoutComponentComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private apiService: HttpApiServiceService) {}


    ngOnInit(): void {
      this.registrationForm = this.formBuilder.group({
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        role: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.registrationForm.valid) {
        this.apiService.post('https://cashcart-c3c3869602e3.herokuapp.com/api/users/register', 
        this.registrationForm.value).subscribe((res) => {
          this.router.navigate(['/']);
        })
        console.log(this.registrationForm.value);
      } else {
        console.error('Form is invalid');
      }
    }

  navigateToLogin(){
    this.router.navigate(['sign_in']);
  }

}
