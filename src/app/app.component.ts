import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'vdi-todo-app';
  isMenuVisible = true;

  constructor(
    private service: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngDoCheck(): void {
    const currentUrl = this.router.url;
    if (currentUrl === '/auth/login' || currentUrl === '/auth/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  Logout() {
    this.service.Logout().subscribe({
      next: (res) => {
        this.cookieService.delete('Authorization');
        this.router.navigate(['/auth/login']);
      },
      error: () => {
        console.log('Logout failed');
      },
    });
  }
}
