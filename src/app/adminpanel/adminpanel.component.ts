import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  userData = localStorage.getItem('admin');
  loginData: any;

  constructor(private router: Router) {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.loginData);
    this.applyFunction();
  }

  ngOnInit(): void {
   
  }

  applyFunction() {
    if (this.loginData == null) {
      window.location.href = '/user/admin';
    } else {
      this.router.navigateByUrl('/branch');
    }
  }

}
