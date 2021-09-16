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

  deleteFun(id: string, revId: string) {
    try {
      const alert = confirm('Are you want to delete this branch ?');
      if (alert == true) {
        this.departmentObj.deleteBranch(id, revId).subscribe(
          (res) => {
            this.toastr.success('Successfully Deletd');
            window.location.reload();
           
          },
          (err: { response: { data: { errorMessage: any } } }) => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
            console.log(errorMessage);
            this.toastr.error('Unable to delete this branch');
          }
        );
      }
    } catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to delete this branch');
    }
  }
}
