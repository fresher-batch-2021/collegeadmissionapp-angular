import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AdminService } from '../admin.service';
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
        availableSeats: this.availableSeats,
        appliedSeats: "0"
      }
      const branchObj = new AdminService();
      branchObj.addDepartment(departmentData).then(res => {
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
