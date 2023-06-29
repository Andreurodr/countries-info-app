import { LoggedService } from './../../services/logged.service';
import { UserdbService } from 'src/app/services/userdb.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserLogin } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public submitted: boolean = false;
  public validLogin: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public userdbService: UserdbService,
    public loggedService: LoggedService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
    });
  }

  public onSubmit() {
    this.submitted = true;
    console.log(this.userdbService.userDbArray[0].email);
    if (
      this.userdbService.userDbArray[0].email.includes(
        this.loginForm.value.email
      ) &&
      this.userdbService.userDbArray[0].password.includes(
        this.loginForm.value.password
      )
    ) {
      this.validLogin = true;
      this.loggedService.logged = true;
    }
  }
}
