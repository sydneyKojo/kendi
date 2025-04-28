import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from "../../components/button/button.component";
import { ContainerComponent } from "../../components/container/container.component";
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-social-style',
  imports: [ButtonComponent, ContainerComponent],
  templateUrl: './social-style.component.html',
  styleUrl: './social-style.component.css'
})
export class SocialStyleComponent {
  temperament = ''
  auth = inject(AuthService)
  router = inject(Router)

  setTemperament (t: string) {
    this.temperament = t
  }

  saveProfile () {
    this.auth.updateProfile('temperament', this.temperament).subscribe(() => {
      this.router.navigateByUrl('/onboarding/faith-journey')
    })
  }
}
