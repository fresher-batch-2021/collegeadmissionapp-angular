import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-displaybranch',
  templateUrl: './displaybranch.component.html',
  styleUrls: ['./displaybranch.component.css']
})
export class DisplaybranchComponent implements OnInit {
  userData = localStorage.getItem('registerData');
  loginData: any;
  branch: any;
  branchList: any;

  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("registerData", this.loginData);
    this.displayBranch();
  }

  ngOnInit(): void {
  }


  displayBranch() {

    const departmentObj = new AdminService();
    departmentObj.displayDepartment().then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.branch = data.rows;
      console.log("table list :", this.branch);
      this.branchList = this.branch.map((obj: any) => obj.doc);
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

  applyFunction() {
    if (this.loginData == null) {
      window.location.href = "login";
    }
    else {
      window.location.href = "personal";
    }
  }

}
