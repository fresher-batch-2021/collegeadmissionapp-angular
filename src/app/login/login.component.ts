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
    if (this.email == "" || this.email == undefined) {
      alert("UserName cannot be blank");
    } else if (this.password == "" || this.password == null) {
      alert("Password cannot be blank");
    } else if (this.password.length < 8 || this.password.length > 15) {
      alert("Password must be 8 to 15 characters");
    } else {
      const selectedData = {
        selector: {
          username: this.email,
          password: this.password
        },
        fields: ["_id", "name", "contactNo", "email"]
      };

      let formData = {
        username: this.email,
        password: this.password
      }
      const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
      const dbPassword = "163671d490ddeef138fc61e470881715";
      const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
      let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user/_find";

      axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }).then(res => {

        let data = res.data.docs;
        console.log(data);
       
        if(data.length==0){
          alert ("Invalid Login Credentials")
        }
        else{
          alert("Login Successful");
        localStorage.setItem("registerData", JSON.stringify(data[0]));
        window.location.href = "personal";
        }
      }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
      });
    }
  }
}