import { Component } from '@angular/core';
import { AuthService } from './Components/Services/AuthService/auth.service';

@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
})
export class AppComponent {
  isLoggedIn = true

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.getLoginStatus();
  }
}
