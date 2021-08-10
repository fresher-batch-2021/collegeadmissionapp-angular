import { ɵNullViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.getApi();
  }

  ngOnInit(): void {
  }

  candidateName: string = "";
  contactNumber: string = "";
  dob: string = "";
  email: string = "";
  userName: string = "";
  password: string = "";
  confirmPassword: string = "";

  register() {
    if (this.candidateName == "" || this.candidateName == null) {
      alert("Invalid Name");

    }
    else if (this.contactNumber == "" || this.contactNumber == null || this.contactNumber.length != 10) {
      alert("Invalid Contact Number");
    }
    else if (this.dob == "" || this.dob == null) {
      alert("Invalid Date of Birth");
    }
    else if (this.email == "" || this.email == null) {
      alert("Invalid Email address");
    }
    else if (this.userName == "" || this.userName == null) {
      alert("Invalid User Name");
    }
    else if (this.password == "" || this.password.length <= 8) {
      alert("Invalid Password");
    }
    else if (this.confirmPassword == "" || this.confirmPassword.length <= 8) {
      alert("invalid password");
    }
    else {
      alert("Registration Successfull");
      window.location.href = "login";
    }
  }


  getApi() {
    this.http.get("https://reqres.in/api/users?page=2").subscribe((res) => {
      console.log("result", res);
      var listUsers = res;
      console.log("listusers", listUsers);
    })
  }
}
