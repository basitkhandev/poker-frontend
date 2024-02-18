import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpApiServiceService } from 'src/app/services/http-api-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
 
  changePasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: HttpApiServiceService) { }

  ngOnInit(): void {
    this.createChangePasswordForm();
  }

  createChangePasswordForm() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitChangePassword () {
    if (this.changePasswordForm.valid) {
      this.apiService.post('https://cashcart-c3c3869602e3.herokuapp.com/api/users/change_password', 
      this.changePasswordForm.value).subscribe((res: any) => {
        console.log("hh")
      })
    } else {
      console.error('Form is invalid');
    }
  }

}
