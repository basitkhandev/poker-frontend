import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpApiServiceService } from '../services/http-api-service.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private apiService: HttpApiServiceService){}
  

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  
  }
  navigate() {
    this.router.navigate(['/logout'])
  }

  navigateToResetPassword() {
    this.router.navigate(['/forget_password'])
  }

  submitLoginForm() {
    this.apiService.post('https://cashcart-c3c3869602e3.herokuapp.com/api/users/login', 
    this.loginForm.value).subscribe((res: any) => {
      console.log(this.loginForm.value)
      this.authService.login();
      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', res.token);
    })
  }
 
}
