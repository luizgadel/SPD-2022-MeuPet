import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Guardian } from '../services/models/guardian.interface';
import { User } from '../services/models/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  ngOnInit(): void {}

  submit() {
    this.isSubmitting = true;

    this.form.markAllAsTouched();
    if (this.form.valid) {
      var user: User = {
        ...this.form.getRawValue(),
      };
      console.log('Usuário formado: ', user);

      this.userService.authenticate(user.email, user.password).subscribe({
        next: (userFound) => {
          if (userFound !== null) {
            console.log('Usuário encontrado.');
            this.isSubmitting = false;

            var guardian = userFound as Guardian;
            if (guardian.category != undefined) {
              this.router.navigate(['pet-list']);
            } else {
              this.router.navigate(['home']);
            }
          } else {
            this.isSubmitting = false;
            console.log('Usuário não encontrado.');
          }
        },
        error: (err) => {
          this.isSubmitting = false;
          console.log('Erro ao autenticar: ', err);
        },
      });
    } else {
      this.isSubmitting = false;
      return;
    }
  }
}
