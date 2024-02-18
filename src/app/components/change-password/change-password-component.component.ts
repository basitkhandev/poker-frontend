import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpApiServiceService } from 'src/app/services/http-api-service.service';

@Component({
  selector: 'app-change-password-component',
  templateUrl: './change-password-component.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangeComponentComponent implements OnInit {
  changePasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: HttpApiServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.createChangePasswordForm();
  }

  createChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitChangePassword () {
    if (this.changePasswordForm.valid) {
      this.apiService.post('https://cashcart-c3c3869602e3.herokuapp.com/api/users/forgot_password', 
      this.changePasswordForm.value).subscribe((res: any) => {
        console.log("hh")
      })
    } else {
      console.error('Form is invalid');
    }
  }


  navigateToLogin(){
    this.router.navigate(['sign_in']);
  }

}
