import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {

  router = inject(Router);
  auth = inject(AuthService);

  ngOnInit(): void {
    this.auth.getProfile().subscribe(() => {
      if (this.auth.newUser()) {
        this.router.navigateByUrl('/onboarding/welcome');
      }
    });
  }
}
