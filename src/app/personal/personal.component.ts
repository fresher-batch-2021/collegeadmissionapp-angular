import { Component, OnInit } from '@angular/core';

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
    if (this.firstName == "" || this.firstName == null) {
      alert("First Name Cannot be blank");
    }
    else if (this.lastName == "" || this.lastName == null) {
      alert("Last Name Cannot be blank");
    }
    else if (this.fatherName == "" || this.fatherName == null) {
      alert("Father Name Cannot be blank");
    }
    else if (this.motherName == "" || this.motherName == null) {
      alert("Mother Name cannot be blank");
    }
    else if (this.dob == "" || this.dob == null) {
      alert("DOB cannot be blank");
    }
    else if (this.gender == "" || this.gender == null) {
      alert("Gender cannot be blank");
    }
    else if (this.communicationAddress == "" || this.communicationAddress == null) {
      alert("Communication address cannot be blank");
    }
    else if (this.permanentAddress == "" || this.communicationAddress == null) {
      alert("Permanent address cannot be blank");
    }
    else if (this.state == "" || this.state == null) {
      alert("State cannot be blank");
    }
    else if (this.district == "" || this.district == null) {
      alert("District cannot be balnk");
    }
    else if (this.religion == "" || this.religion == null) {
      alert("Religion cannot be blank");
    }
    else if (this.community == "" || this.community == null) {
      alert("Community Cannot be blank");
    }
    else if (this.aadhar == "" || this.aadhar.length != 12) {
      alert("Aadhar number must be 12 digits ");
    }
    else {
      alert("Registration Successfull")
    }
  }
}
