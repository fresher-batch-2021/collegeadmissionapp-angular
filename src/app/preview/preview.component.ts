import { Component, OnInit } from '@angular/core';
import axios from 'axios';
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

  constructor() {
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
    /*
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication";
    axios.post(url, registerObj, { headers: { 'Authorization': basicAuth } }).then(res => {
*/
    const applicationObj = new AdminService();
    applicationObj.submitApplication(registerObj).then(res => {
      let data = res.data;
      console.log(data);
      alert("Your Application Submitted Successfully");
      alert("Please Logout Before Leaving");
    })
      .catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
      });
    console.log(registerObj);
  }
}
