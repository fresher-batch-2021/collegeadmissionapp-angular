import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  userData = localStorage.getItem('registerData');
  loginData: any;

  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("registerData", this.loginData);
  }

  ngOnInit(): void {
  }

  applyFunction() {
    if (this.loginData == null) {
      window.location.href = "login";
    }
    else {
      window.location.href = "personal";
    }
  }
}
