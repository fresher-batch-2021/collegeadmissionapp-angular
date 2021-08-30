import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  personalApplication: FormGroup;
  dateYesterday: any;
  constructor(private fb: FormBuilder) {
    this.personalApplication = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[A-Z]{1}')]),
      fatherName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]*')]),
      motherName: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z ]*')]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required]),
      communicationAddress: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9 ]*')]),
      permanentAddress: new FormControl('', [Validators.required, Validators.pattern('[[A-Za-z0-9 ]*')]),
      district: new FormControl('', Validators.required),
      religion: new FormControl('', Validators.required),
      aadhar: new FormControl('', [Validators.required, Validators.pattern('[1-9][0-9]{11}')])
    })
  }

  ngOnInit(): void {
    this.dateYesterday = new Date();
    this.dateYesterday = new Date(this.dateYesterday.setDate(this.dateYesterday.getDate() - 1));
    console.log("Previous Date", this.dateYesterday);
  }

  personalInformation() {
   
    try {
      let personalDataObj = {
        "firstName": this.personalApplication.value.firstName,
        "lastName": this.personalApplication.value.lastName,
        "fatherName": this.personalApplication.value.fatherName,
        "motherName": this.personalApplication.value.motherName,
        "dateOfBirth": this.personalApplication.value.dob,
        "gender": this.personalApplication.value.gender,
        "communicationAddress": this.personalApplication.value.communicationAddress,
        "permanentAddress": this.personalApplication.value.permanentAddress,
        "state": this.personalApplication.value.state,
        "district": this.personalApplication.value.district,
        "religion": this.personalApplication.value.religion,
        "community": this.personalApplication.value.community,
        "aadhar": this.personalApplication.value.aadhar
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

  eventChange() {
    const area = this.personalApplication.value.communicationAddress;
    this.personalApplication.value.permanentAddress = area;
    console.log(area);
  }
}
