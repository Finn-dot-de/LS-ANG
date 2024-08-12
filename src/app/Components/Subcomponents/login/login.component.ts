import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private authService: AuthService) { }

  refresh(): void {
    window.location.reload();
  }

  login(event: Event) {
    event.preventDefault();

    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post('/api/login', loginData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        this.authService.setLoginStatus(true);
        this.refresh()
      },
      error: (error) => {
        console.error('Login failed', error);
        this.authService.setLoginStatus(false);
        this.refresh()
      }
    });
  }
}
