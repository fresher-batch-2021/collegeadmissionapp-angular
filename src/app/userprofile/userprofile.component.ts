import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userData = localStorage.getItem('registerData');
  loginData: any;

  constructor(private router: Router) {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("registerData", this.loginData);
    this.userProfile();
  }


  ngOnInit(): void {
  }

  userProfile() {
    if (this.loginData == null) {
      // window.location.href = "login";
      this.router.navigateByUrl("login");
    }
    else {
      window.location.href = "listprofile";
      this.router.navigateByUrl("listprofile");
    }
  }

}
