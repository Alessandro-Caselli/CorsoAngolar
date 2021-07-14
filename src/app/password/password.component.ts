import { PasswordValidators } from './password.validators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPassword: ['',
        Validators.required
      ],
      confirmPassword: ['',
        Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get oldPassword() { return this.form.get('oldPassword');}
  get newPassword() { return this.form.get('newPassword');}
  get confirmPassword() { return this.form.get('confirmPassword');}
}
