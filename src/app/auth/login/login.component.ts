import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContainerComponent } from '../../components/container/container.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../components/form/input/input.component';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    ContainerComponent,
    ButtonComponent,
    RouterLink,
    InputComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  auth = inject(AuthService);
  router = inject(Router)
  
  ngOnInit(): void {
    
    if (this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard/home')
    }
  }

  showErrorHeading = false
  errorMessage = ''

  // loginForm = new FormGroup({
    email = new FormControl('', [Validators.required, Validators.email])
    password = new FormControl('', [Validators.required, Validators.minLength(8)])
  // });

  handlelogin() {
    this.showErrorHeading = false
    if(this.isValidated()) {
    this.auth.login(this.email?.value || '', this.password?.value || '').subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (err) => {
        this.showErrorHeading = true
        this.errorMessage = err.code
      }
    })
    } else {
      this.showErrorHeading = true
    }
  }

  isValidated () {
    return this.email.errors === null
  }
}
