import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./addbranch.component.css']
})
export class AddbranchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  degree: string = "";
  branch: string = "";
  totalSeats: string = "";
  availableSeats: string = "";

  addDepartment() {
    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.degree, "Degree cannot be blank");
      validatorService.isValidString(this.branch, "Branch cannot be blank");
      validatorService.isValidString(this.totalSeats, "Total Seats cannot be blank");
      validatorService.isValidString(this.availableSeats, "Available Seats cannot be blank");

      let departmentData = {
        degree: this.degree,
        branch: this.branch,
        totalSeats: this.totalSeats,
        availableSeats: this.availableSeats
      }
      const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
      const dbPassword = "163671d490ddeef138fc61e470881715";
      const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
      let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments";
      axios.post(url, departmentData, { headers: { 'Authorization': basicAuth } }).then(res => {
        let data = res.data;
        console.log(data);
        alert("Department Added Successfully");
      }).catch(err => {
        alert(err.message);
        alert("Unable to register");
      });
    } catch (err) {
      console.error(err.message);
      alert(err.message);
      alert("Unable to Add Department");
    }
  }
}
