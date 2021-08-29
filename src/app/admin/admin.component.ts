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
    validatorService.isValidString(this.userName, "Username cannot be Blank");
    validatorService.isValidPassword(this.password, "Password cannot be Blank");
    const email = "admin@gmail.com";
    const password1 = "admin1234";
    let adminObj = {
      adminEmail: this.userName,
      password: this.password
    }
    if (this.userName == "" || this.userName == null) {
      alert("Username cannot be Blank");
    } else if (this.password == "" || this.password == null) {
      alert("Password cannot be Blank")
    } else if (this.password.length < 8) {
      alert("Password contain atleast 8 characters");
    } else if (this.userName != email || this.password != password1) {
      alert("Invalid Login Details");
    }
    else {
      alert("Login Succesfull");
      localStorage.setItem('admin', JSON.stringify(adminObj));
      window.location.href = "adminpanel";
    }
  }

}
