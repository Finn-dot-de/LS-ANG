import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header *ngIf="isLoggedIn"></app-header>
    <app-login *ngIf="!isLoggedIn"></app-login>
    <app-quizbereich></app-quizbereich>
    <router-outlet *ngIf="isLoggedIn"></router-outlet>
    <app-footer *ngIf="isLoggedIn"></app-footer>
  `,
})
export class AppComponent {
  isLoggedIn = true;
  title = "LernStoffAnwendung"

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.getLoginStatus();
  }
}
