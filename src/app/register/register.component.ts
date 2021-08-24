import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ValidatorService } from '../validator.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicelayerService } from '../servicelayer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      candidateName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]*')]),
      contactNumber: new FormControl('', [Validators.required, Validators.pattern('[789][0-9]{9}')]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      userPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  register() {

    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.registerForm.value.candidateName, "Candidate Name cannot be blank");
      validatorService.isValidString(this.registerForm.value.contactNumber, "Contact Number Cannot be blank");
      validatorService.isValidNumber(this.registerForm.value.contactNumber, "Invalid Contact Number");
      validatorService.isValidString(this.registerForm.value.dob, "Date of Birth cannot be blank");
      validatorService.isValidString(this.registerForm.value.email, "Please enter valid email address");
      validatorService.isValidString(this.registerForm.value.userName, "User Name cannot be blank");
      validatorService.isValidString(this.registerForm.value.userPassword, "Password cannot be blank");
      validatorService.isValidString(this.registerForm.value.confirmPassword, "Confirm-Password cannot be blank");
      validatorService.isValidPasswordLength(this.registerForm.value.userPassword, "Password contain atleast 8 characters");
      validatorService.isValidPasswordLength(this.registerForm.value.confirmPassword, "Confirm-Password contain atleast 8 characters");

      let formData = {
        name: this.registerForm.value.candidateName,
        username: this.registerForm.value.userName,
        dob: this.registerForm.value.dob,
        email: this.registerForm.value.email,
        contactNo: this.registerForm.value.contactNumber,
        password: this.registerForm.value.userPassword,
      }

      const registerObj = new ServicelayerService();
      registerObj.userRegister(formData).then(res => {
        let data = res.data;
        console.log(data);
        alert("Successffully Register");
        window.location.href = "login";
      }).catch(err => {
        console.error(err);
        alert("Unable to register");
      });
    }
    catch (err) {
      console.error(err.message);
      alert(err.message);
      alert("Unable to register");
    }
  }
}

