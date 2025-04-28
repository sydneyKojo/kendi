import { Component, inject, Injectable, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})

@Injectable({ providedIn: 'root' })
export class HeaderComponent {
  router = inject(Router)
  auth = inject(AuthService)


  signOut() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'))

  }
}
