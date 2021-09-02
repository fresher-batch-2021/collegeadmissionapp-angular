import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  registerData = localStorage.getItem('registerData');
  userData = localStorage.getItem('personalForm');
  academicData = localStorage.getItem('academicForm');

  data: any;
  regData: any;
  acadData: any;

  constructor(
    private http: HttpClient,
    private applicationObj: AdminService,
    private toastr: ToastrService
  ) {
    this.data = this.userData != null ? JSON.parse(this.userData) : null;
    console.log('userdata', this.data);
    console.log('userdata', this.data.name);

    this.regData =
      this.registerData != null ? JSON.parse(this.registerData) : null;
    console.log('registerData', this.regData);

    this.acadData =
      this.academicData != null ? JSON.parse(this.academicData) : null;
    console.log('academicData', this.acadData);
  }

  ngOnInit(): void {}

  update() {
    let todayDate = new Date();
    let registerObj = {
      name: this.regData.name,
      branch: this.acadData.branch,
      percentage: this.acadData.percentage,
      district: this.data.district,
      email: this.regData.email,
      status: 'pending',
      appliedDate: todayDate,
    };

    this.applicationObj.submitApplication(registerObj).subscribe(
      (res: any) => {
        let data = res.data;
        console.log(data);
        this.toastr.success('Your Application Submitted Successfully');
        window.location.href = '/listprofile';
      },
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        this.toastr.error('Unable to Submit your Application');
      }
    );
    console.log(registerObj);
  }
}
