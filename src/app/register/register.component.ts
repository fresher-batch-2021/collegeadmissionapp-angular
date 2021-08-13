import { ɵNullViewportScroller } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  candidateName: string = "";
  contactNumber: string = "";
  dob: string = "";
  email: string = "";
  userName: string = "";
  userPassword: string = "";
  confirmPassword: string = "";

  register() {
    if (this.candidateName == "" || this.candidateName == null) {
      alert("Candidate Name cannot be blank");
    }
    else if (this.contactNumber == "" || this.contactNumber == null || this.contactNumber.length !=10) {
      alert("Contact Number contain 10 digits");
    }
    else if (this.dob == "" || this.dob == null) {
      alert("Date of Birth cannot be blank");
    }
    else if (this.email == "" || this.email == null) {
      alert("Please enter valid email address");
    }
    else if (this.userName == "" || this.userName == null) {
      alert("User Name cannot be blank");
    }
    else if (this.userPassword == "" || this.userPassword.length < 8) {
      alert("Password contain atleast 8 characters");
    }
    else if (this.confirmPassword == "") {
      alert("Confirm-Password contain atleast 8 characters");
    }
    else {
      let url = "https://product-mock-api.herokuapp.com/collegeadmissionapp/api/v1/auth/register";
      let formData = {
        name: this.candidateName,
        username: this.userName,
        dob: this.dob,
        email: this.email,
        contactNo: this.contactNumber,
        password: this.userPassword,
      }
      axios.post(url, formData).then(res => {
        let data = res.data;
        console.log(data);
        alert("Successffully Register");
        window.location.href = "login";
      }).catch(err => {
        console.error(err);
        alert("Unable to register");
      });
    }
  }
}
