import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  personalApplication: FormGroup;
  currentYear: any;
  area: any;

  constructor(private fb: FormBuilder, private toast: ToastrService) {
    this.personalApplication = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z]*'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Z]{1}'),
      ]),
      fatherName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]*'),
      ]),
      motherName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]*'),
      ]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required]),
      communicationAddress: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9 ]*'),
      ]),
      permanentAddress: new FormControl('', [
        Validators.required,
        Validators.pattern('[[A-Za-z0-9 ]*'),
      ]),
      district: new FormControl('', Validators.required),
      religion: new FormControl('', Validators.required),
      aadhar: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]{11}'),
      ]),
    });
  }

  ngOnInit(): void {
    this.currentYear = new Date();
    this.currentYear.setYear(new Date().getFullYear() - 17);
    console.log(this.currentYear);
  }

  personalInformation() {
    try {
      let personalDataObj = {
        firstName: this.personalApplication.value.firstName,
        lastName: this.personalApplication.value.lastName,
        fatherName: this.personalApplication.value.fatherName,
        motherName: this.personalApplication.value.motherName,
        dateOfBirth: this.personalApplication.value.dob,
        gender: this.personalApplication.value.gender,
        communicationAddress:
          this.personalApplication.value.communicationAddress,
        permanentAddress: this.personalApplication.value.permanentAddress,
        state: this.personalApplication.value.state,
        district: this.personalApplication.value.district,
        religion: this.personalApplication.value.religion,
        community: this.personalApplication.value.community,
        aadhar: this.personalApplication.value.aadhar,
      };
      console.log(personalDataObj);
      this.toast.success('Registration Successfull');
      localStorage.setItem('personalForm', JSON.stringify(personalDataObj));
      window.location.href = 'academic';
    } catch (err: any) {
      console.error(err.message);
      this.toast.error('Unable to register');
    }
  }

  eventChange() {
    this.area = this.personalApplication.value.communicationAddress;
    this.personalApplication.value.permanentAddress = this.area;
    console.log(this.area);
  }
}
