import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  login(): void {
    this.http.post<{ token: string, role: string }>('/api/users/login', { email: this.email, password: this.password })
      .subscribe(response => {
        this.authService.setToken(response.token);
        this.authService.setRole(response.role);

        switch (response.role) {
          case 'ROLE_ADMIN':
            this.router.navigate(['/admin-dashboard']);
            break;
          case 'ROLE_USER':
            this.router.navigate(['/user-dashboard']);
            break;
          case 'ROLE_TECHNICIEN':
            this.router.navigate(['/technicien-dashboard']);
            break;
          default:
            this.router.navigate(['/login']);
        }
      }, error => {
        console.error('Login error', error);
      });
  }
}
