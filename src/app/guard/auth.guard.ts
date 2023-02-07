import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return new Observable<boolean>((obs) => {
      this.userService.isLoggedIn().subscribe({
        next: (res) => {
          if (route.routeConfig?.path === 'auth' && res) {
            this.router.navigate(['/']);
          }
          obs.next(true);
        },
        error: () => {
          this.router.navigate(['/auth/login']);
          obs.next(false);
        },
      });
    });
  }
}
