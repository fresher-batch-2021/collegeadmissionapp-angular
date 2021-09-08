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

  ngOnInit(): void { }
  displayBranch() {
    try {
      this.departmentObj.displayDepartment().subscribe(
        (res: any) => {
          let data = res.rows;
          this.branch = data;
          this.branchList = this.branch.map((obj: any) => obj.doc);
        },
        (err: { response: { data: { errorMessage: any } } }) => {
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
          console.log('failed');
          this.toastr.error('List Failed');
        }
      );
    } catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to register');
    }

  }

  deleteFun(id: any, revId: any) {
    try {
      this.departmentObj.deleteFunction(id, revId).subscribe(
        (res) => {
          alert('Are you want to delete this branch ?');
          window.location.reload();
          this.toastr.success('Successfully Deletd');
        },
        (err: { response: { data: { errorMessage: any } } }) => {
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
          this.toastr.error('Unable to delete this branch');
        }
      );
    } catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to register');
    }
  }
}
