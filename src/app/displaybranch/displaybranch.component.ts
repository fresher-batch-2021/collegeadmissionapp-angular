import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-displaybranch',
  templateUrl: './displaybranch.component.html',
  styleUrls: ['./displaybranch.component.css'],
})
export class DisplaybranchComponent implements OnInit {
  userData = localStorage.getItem('registerData');
  loginData: any;
  branch: any;
  branchList: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    private departmentObj: AdminService,
    private toastr: ToastrService
  ) {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log('registerData', this.loginData);
    this.displayBranch();
  }

  ngOnInit(): void { }

  displayBranch() {
    this.departmentObj.displayDepartment().subscribe((res: any) => {
      let data = res.rows;
      console.log('Response : ', data);
      this.branch = data;
      console.log('Table list :', this.branch);
      this.branchList = this.branch.map((obj: any) => obj.doc);
      this.toastr.success('List Successfull');
    },
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        this.toastr.error('List Failed');
      });
  }

  applyFunction() {
    if (this.loginData == null) {
      window.location.href = 'login';
    } else {
      this.router.navigateByUrl('/application/personal');
    }
  }
}
