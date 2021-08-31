import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  registerData = localStorage.getItem('registerData');
  userData = localStorage.getItem('personalForm');
  academicData = localStorage.getItem('academicForm');


  data: any;
  regData: any;
  acadData: any;

  constructor(private http: HttpClient, private applicationObj: AdminService) {
    this.data = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.data);
    console.log("userdata", this.data.name);

    this.regData = this.registerData != null ? JSON.parse(this.registerData) : null;
    console.log("registerData", this.regData);

    this.acadData = this.academicData != null ? JSON.parse(this.academicData) : null;
    console.log("academicData", this.acadData);
  }


  ngOnInit(): void {
  }

  update() {
    let registerObj = {
      "name": this.regData.name,
      "branch": this.acadData.branch,
      "percentage": this.acadData.percentage,
      "district": this.data.district,
      "email": this.regData.email,
      "status": "pending"
    };


    this.applicationObj.submitApplication(registerObj).subscribe((res: any) => {
      let data = res.data;
      console.log(data);
      alert("Your Application Submitted Successfully");
      alert("Please Logout Before Leaving");
    })
      , ((err: { response: { data: { errorMessage: any; }; }; }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
      });
    console.log(registerObj);
  }
}
