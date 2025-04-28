import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContainerComponent } from '../../components/container/container.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../components/form/input/input.component';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    ContainerComponent,
    RouterLink,
    InputComponent,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  auth = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard/home');
    }
  }

  showErrorHeading = false;
  errorMessage = '';

  // signupForm = new FormGroup({
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  // });

  handleSignUp() {
    // event.preventDefault()
    this.showErrorHeading = false;
    // console.log(this.signupForm.value)
    if (this.isValidated()) {
      this.auth
        .register(
          this.email?.value || '',
          this.name?.value || '',
          this.password?.value || ''
        )
        .subscribe({
          next: () => this.router.navigateByUrl('/dashboard/home'),
          error: (err) => {
            console.log(err);
            this.showErrorHeading = true;
            this.errorMessage = err.code;
          },
        });
    } else {
      this.showErrorHeading = true;
    }
  }

  isValidated() {
    return this.name.errors === null;
  }
}
