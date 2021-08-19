import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName: string = "";
  lastName: string = "";
  fatherName: string = "";
  motherName: string = "";
  dob: string = "";
  gender: string = "";
  communicationAddress: string = "";
  state: string = "";
  permanentAddress: string = "";
  district: string = "";
  religion: string = "";
  community: string = "";
  aadhar: string = "";

  personalInformation() {
    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.firstName, "First Name Cannot be blank");
      validatorService.isValidString(this.firstName, "Last Name Cannot be blank");
      validatorService.isValidString(this.fatherName, "Last Name Cannot be blank");
      validatorService.isValidString(this.motherName, "Mother Name cannot be blank");
      validatorService.isValidString(this.dob, "DOB cannot be blank");
      validatorService.isValidString(this.gender, "Gender cannot be blank");
      validatorService.isValidString(this.communicationAddress, "Communication address cannot be blank");
      validatorService.isValidString(this.permanentAddress, "Permanent address cannot be blank");
      validatorService.isValidString(this.state, "State cannot be blank");
      validatorService.isValidString(this.district, "District cannot be balnk");
      validatorService.isValidString(this.religion, "Religion cannot be blank");
      validatorService.isValidAadhar(this.aadhar, "Aadhar Number contain 12 digits number");

      let personalDataObj = {
        "firstName": this.firstName,
        "lastName": this.lastName,
        "fatherName": this.fatherName,
        "motherName": this.motherName,
        "dateOfBirth": this.dob,
        "gender": this.gender,
        "communicationAddress": this.communicationAddress,
        "permanentAddress": this.permanentAddress,
        "state": this.state,
        "district": this.district,
        "religion": this.religion,
        "community": this.community,
        "aadhar": this.aadhar
      };
      console.log(personalDataObj);
      alert("Registration Successfull");
      localStorage.setItem('personalForm', JSON.stringify(personalDataObj));
      window.location.href = "academic"
    } catch (err) {
      console.error(err.message);
      alert(err.message);
      alert("Unable to register");
    }

  }
}
