import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css'],
})
export class AdminLoginFormComponent implements OnInit {
  // reactive form variable
  formGroup: FormGroup;
  // init the services, form builder and the router
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    // authenticate the admin via the auth service
    // if successfull then redirect to the admin view
    // else display the message via a alert
    if (
      this.authService.authenticateAdminLogin(
        this.formGroup.value.email,
        this.formGroup.value.password
      )
    ) {
      this.router.navigateByUrl('admin');
    } else {
      alert('Wrong Credentials');
    }
    // reset the form
    this.formGroup.reset();
  }

  get email(): any {
    return this.formGroup.get('email');
  }

  get password(): any {
    return this.formGroup.get('password');
  }
}
