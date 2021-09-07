import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  userData = localStorage.getItem('registerData');
  loginData: any;
  emailId: any;
  role: any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    this.emailId = this.loginData.email;
    this.role = this.loginData.role;

    if (this.emailId != null && this.role == 'USER') {
      return true;
    }
    else {
      alert("You are not authorized to access this page.. only for USER");
      window.location.href = "/user/login";
      return false;
    }

  }

}
