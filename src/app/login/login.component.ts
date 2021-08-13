import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
      let url = "https://product-mock-api.herokuapp.com/collegeadmissionapp/api/v1/auth/login";
      let formData = {
        username: this.email,
        password: this.password
      }
      axios.post(url, formData).then(res => {
        let data = res.data;
        console.log(data);
        alert("Login Successful");
        window.location.href = "personal";
      }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
      });
    }
  }
}