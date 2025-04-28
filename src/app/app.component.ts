import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService = inject(AuthService)
  router = inject(Router)
  title = 'kendi';
  loading = true

  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      if(user) {
        this.authService.currentUser.set({uid:user.uid, name: user.displayName, email: user.email})
        this.router.navigateByUrl('/dashboard')
      } else {
        this.authService.currentUser.set(null)
      }
      this.loading = false
    })
  }
}
