import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../validator.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServicelayerService } from '../servicelayer.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  // dateYesterday: any;
  // lastYear: any;
  currentYear: any;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private registerObj: ServicelayerService,
    private toast: ToastrService
  ) {
    this.registerForm = this.fb.group({
      candidateName: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z ]*'),
      ]),
      contactNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}'),
      ]),
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*'),
      ]),
      userPassword: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.currentYear = new Date();
    this.currentYear.setYear(new Date().getFullYear() - 17);
    console.log(this.currentYear);
  }

  register() {
    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(
        this.registerForm.value.candidateName,
        'Candidate Name cannot be blank'
      );
      validatorService.isValidString(
        this.registerForm.value.contactNumber,
        'Contact Number Cannot be blank'
      );
      validatorService.isValidNumber(
        this.registerForm.value.contactNumber,
        'Invalid Contact Number'
      );
      validatorService.isValidString(
        this.registerForm.value.dob,
        'Date of Birth cannot be blank'
      );
      validatorService.isValidString(
        this.registerForm.value.email,
        'Please enter valid email address'
      );
      validatorService.isValidString(
        this.registerForm.value.userName,
        'User Name cannot be blank'
      );
      validatorService.isValidString(
        this.registerForm.value.userPassword,
        'Password cannot be blank'
      );
      validatorService.isValidString(
        this.registerForm.value.confirmPassword,
        'Confirm-Password cannot be blank'
      );
      validatorService.isValidPasswordLength(
        this.registerForm.value.userPassword,
        'Password contain atleast 8 characters'
      );
      validatorService.isValidPasswordLength(
        this.registerForm.value.confirmPassword,
        'Confirm-Password contain atleast 8 characters'
      );

      let formData = {
        name: this.registerForm.value.candidateName,
        username: this.registerForm.value.userName,
        dob: this.registerForm.value.dob,
        email: this.registerForm.value.email,
        contactNo: this.registerForm.value.contactNumber,
        password: this.registerForm.value.userPassword,
      };

  
      this.registerObj.userRegister(formData).subscribe((res: any) => {
        let data = res.data;
        console.log(data);
        this.toast.success('Successffully Register');
        window.location.href = 'login';
      }),
        (err: any) => {
          console.error(err);
          this.toast.error('Unable to register');
        };
    } catch (err) {
      console.error(err.message);
      alert(err.message);
      this.toast.error('Unable to register');
    }
  }
}
