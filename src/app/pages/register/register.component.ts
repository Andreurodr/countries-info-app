import { UserRegister } from './../../models/user.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdbService } from 'src/app/services/userdb.service';
import { comparePass } from 'src/app/utils/customValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm!: FormGroup;
  public submitted: boolean = false;
  public UserdbService: any;
  public validRegister: boolean = false;
  // public passwordRepeat: string = "";
  // public passwordValidate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userdbService: UserdbService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]*$/),
            Validators.minLength(3),
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]*$/),
            Validators.minLength(3),
          ],
        ],
        username: [
          '',
          [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,16}$/)],
        ],
        email: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
            ),
            Validators.minLength(7),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
            ),
          ],
        ],
        passwordVerify: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
            ),
          ],
        ],
      },
      {
        validator: comparePass('password', 'passwordVerify'),
      }
    );
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.valid) {
      const user: UserRegister = {
        name: this.registerForm.value.name,
        lastname: this.registerForm.value.lastname,
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        passwordVerify: this.registerForm.value.passwordVerify,
      };

      this.userdbService.userPushDb(user);

      this.registerForm.reset();
      this.validRegister = true;
    }
  }
}
//   public validPassword(){
//     if (
//       this.registerForm.value.password ===
//       this.passwordRepeat
//     ) {
//       this.passwordValidate = true;
//     }
//   }
//
