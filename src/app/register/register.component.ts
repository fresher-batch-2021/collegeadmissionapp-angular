import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ServicelayerService } from '../servicelayer.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  currentYear: any;
  userData: any;

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
    try {

      let emailObj = {
        selector: {
          email: this.registerForm.value.email
        },
        fields: ['_id', '_rev', 'name', 'username', 'dob', 'email', 'contactNo', 'password'],
      };

      this.registerObj.userList(emailObj).subscribe((res: any) => {
        this.userData = res.docs;
        console.log("User List", this.userData);
        if (this.userData.length === 0) {
          let formData = {
            name: this.registerForm.value.candidateName,
            username: this.registerForm.value.userName,
            dob: this.registerForm.value.dob,
            email: this.registerForm.value.email,
            contactNo: this.registerForm.value.contactNumber,
            password: this.registerForm.value.userPassword,
            role: "USER",
          };
          console.log(formData);
          const classObj = new UserClass();
          classObj.setData(formData)
          this.registerObj.userRegister(classObj).subscribe(
            (res: any) => {
              let data = res.data;
              console.log(data);
              this.toast.success('Successffully Register');
              window.location.href = 'login';
            },
            (err: any) => {
              console.error(err);
              this.toast.error('Unable to register');
            }
          );
        }
        else {
          this.toast.error('EmailId already exists');
        }
      }, err => {
        console.log("Error", err);
      });
    } catch (err: any) {
      console.error(err.message);
      alert(err.message);
      this.toast.error('Unable to register');
    }
  }
}
