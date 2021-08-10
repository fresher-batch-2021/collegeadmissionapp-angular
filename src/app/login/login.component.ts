import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  email: string = "";
  password: string = "";

  login() {
    if (this.email == "" && this.password == "") {
      alert("Invalid details");
    } else {
      alert("Login Successfull");
      window.location.href="program";
    }
  }
}