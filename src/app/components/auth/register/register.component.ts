import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private service: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  resData: any;

  Register(user: any) {
    if (user.valid) {
      this.service.Register(user.value).subscribe({
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

  RedirectLogin() {
    this.router.navigate(['/auth/login']);
  }
}
