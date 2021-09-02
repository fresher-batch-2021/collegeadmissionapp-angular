import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  userData = localStorage.getItem('registerData');
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    try {
      let loginData = this.userData != null ? JSON.parse(this.userData) : null;
      const emailId = loginData.email;
      console.log('userdata', loginData);

      if (emailId != null) {
        return true;
      } else {
        alert(
          'You are not authorized to access this page..Please try before login!!'
        );
        this.router.navigateByUrl('login');
      }
    } catch (err) {
      alert(
        'You are not authorized to access this page..Please try after login!!!'
      );
      this.router.navigateByUrl('login');
    }
    return true;
  }
}
