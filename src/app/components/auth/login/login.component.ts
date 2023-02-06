import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private service: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  resData: any;

  Login(user: any) {
    if (user.valid) {
      this.service.Login(user.value).subscribe({
        next: (res) => {
          this.resData = res;
          this.cookieService.set('Authorization', this.resData.token);
          this.router.navigate(['/home']);
        },
        error: () => {
          console.log('Invalid Credentials');
        },
      });
    }
  }

  RedirectRegister() {
    this.router.navigate(['/auth/register']);
  }
}
