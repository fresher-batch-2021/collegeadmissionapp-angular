import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userData = localStorage.getItem('registerData');
  loginData: any;

  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("registerData", this.loginData);
    this.userProfile();
  }


  ngOnInit(): void {
  }

  userProfile() {
    if (this.loginData == null) {
      window.location.href = "login";
    }
    else {
      window.location.href = "listprofile";
    }
  }

}
