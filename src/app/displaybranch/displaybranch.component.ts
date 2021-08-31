import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private http: HttpClient, private departmentObj: AdminService) {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("registerData", this.loginData);
    this.displayBranch();
  }

  ngOnInit(): void {
  }


  displayBranch() {


    this.departmentObj.displayDepartment().subscribe((res: any) => {
      let data = res.rows;
      console.log("response : ", data);
      this.branch = data;
      console.log("table list :", this.branch);
      this.branchList = this.branch.map((obj: any) => obj.doc);
    }), ((err: { response: { data: { errorMessage: any; }; }; }) => {
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
      this.router.navigateByUrl("personal");
    }
  }

}
