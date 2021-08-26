import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  userData = localStorage.getItem('admin');
  loginData: any;
  userName: any;
  adminEmailValue = false;

  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.loginData);
    this.userName = this.loginData.adminEmail;
    console.log("userName :", this.userName);

    if (this.userName != null) {
      this.adminEmailValue = true;
    }

  }

  ngOnInit(): void {
  }

}
