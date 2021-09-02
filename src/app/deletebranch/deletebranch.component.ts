import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-deletebranch',
  templateUrl: './deletebranch.component.html',
  styleUrls: ['./deletebranch.component.css'],
})
export class DeletebranchComponent implements OnInit {
  branch: any;
  branchList: any;
  constructor(
    private http: HttpClient,
    private departmentObj: AdminService,
    private toastr: ToastrService
  ) {
    this.displayBranch();
  }

  ngOnInit(): void {}
  displayBranch() {
    this.departmentObj.displayDepartment().subscribe((res: any) => {
      let data = res.rows;
      this.branch = data;
      this.branchList = this.branch.map((obj: any) => obj.doc);
    }),
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log('failed');
        this.toastr.error('List Failed');
      };
  }

  deleteFun(id: any, revId: any) {
    
    const dbUserName = 'apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4';
    const dbPassword = '163671d490ddeef138fc61e470881715';
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url =
      'https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/' +
      id +
      '?rev=' +
      revId;
    this.http
      .delete(url, { headers: { Authorization: basicAuth } })
      .subscribe((res) => {
        alert('Are you want to delete this branch ?');
        window.location.reload();
        this.toastr.success('Successfully Deletd');
      }),
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        this.toastr.error('Unable to delete this branch');
      };
  }
}
