import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData = localStorage.getItem('admin');
  loginData: any;
  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log('adminData', this.loginData);
  }

  ngOnInit(): void {
  }
  // displaySidebar() {
  //   if (this.loginData != null) {

  //   }
  // }


}
