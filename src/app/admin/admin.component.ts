import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName: string = "";
  password: string = "";

  adminLogin() {

    const validatorService = new ValidatorService();
    validatorService.isValidString(this.userName,"Username cannot be Blank");
    validatorService.isValidPassword(this.password,"Password cannot be Blank");
    const uname = "admin@gmail.com";
    const pwd = "admin1234";
    if (this.userName == "" || this.userName == null) {
      alert("Username cannot be Blank");
    } else if (this.password == "" || this.password == null) {
      alert("Password cannot be Blank")
    } else if (this.password.length < 8) {
      alert("Password contain atleast 8 characters");
    } 
    else {
      alert("Login Succesfull");
      window.location.href = "viewApplication";
    }
  }

}
