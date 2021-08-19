import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ValidatorService } from '../validator.service';


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

    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.candidateName, "Candidate Name cannot be blank");
      validatorService.isValidString(this.contactNumber, "Contact Number Cannot be blank");
      validatorService.isValidNumber(this.contactNumber, "Invalid Contact Number");
      validatorService.isValidString(this.dob, "Date of Birth cannot be blank");
      validatorService.isValidString(this.email, "Please enter valid email address");
      validatorService.isValidString(this.userName, "User Name cannot be blank");
      validatorService.isValidPassword(this.userPassword, "Password cannot be blank");
      validatorService.isValidPassword(this.confirmPassword, "Confirm-Password cannot be blank");
      validatorService.isValidPasswordLength(this.userPassword, "Password contain atleast 8 characters");
      validatorService.isValidPasswordLength(this.confirmPassword, "Confirm-Password contain atleast 8 characters");
      if (this.userPassword != this.confirmPassword) {
        alert("User Password & Confirm Password does not match ")
      }
      else {
        let formData = {
          name: this.candidateName,
          username: this.userName,
          dob: this.dob,
          email: this.email,
          contactNo: this.contactNumber,
          password: this.userPassword,
        }
        const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
        const dbPassword = "163671d490ddeef138fc61e470881715";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user";
        axios.post(url, formData, { headers: { 'Authorization': basicAuth } }).then(res => {
          let data = res.data;
          console.log(data);
          alert("Successffully Register");
          window.location.href = "login";
        }).catch(err => {
          console.error(err);
          alert("Unable to register");
        });
      }
    } catch (err) {
      console.error(err.message);
      alert(err.message);
      alert("Unable to register");
    }
  }
}

