import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoggedinService } from './logged-in.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loggedInService: LoggedinService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (this.loggedInService.isLoggedIn.getValue()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
