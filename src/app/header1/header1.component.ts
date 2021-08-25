import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  userData = localStorage.getItem('registerData');
  loginData: any;
  emailId: any;
  userName = false;
  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.loginData);
    this.emailId = this.loginData.email;

    if (this.emailId != null) {
      this.userName = true;
    }
  }

  ngOnInit(): void {
  }

}
