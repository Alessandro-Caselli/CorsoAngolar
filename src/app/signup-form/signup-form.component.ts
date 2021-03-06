import { UsernameValidator } from './username.validator';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',[
          Validators.required,
          UsernameValidator.minlength,
          UsernameValidator.cannotContainSpace
        ],
        UsernameValidator.shouldBeUnique),
      password: new FormControl('', Validators.required)
    }),
    topics: new FormArray([])
  });

  login() {
     this.form.setErrors({
     invalidLogin: true
    });
  }

  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
  }



  get username() {
      return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');
  }
}