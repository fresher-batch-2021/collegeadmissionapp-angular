import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-listalluser',
  templateUrl: './listalluser.component.html',
  styleUrls: ['./listalluser.component.css'],
})
export class ListalluserComponent implements OnInit {
  userList: any;
  allUserList: any;

  constructor(
    private http: HttpClient,
    private allUserObj: AdminService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.listAllUser();
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  listAllUser() {
    try {
      this.allUserObj.listAllUser().subscribe(
        (res: any) => {
          let data = res.rows;
          this.userList = data;
          console.log('Table list :', this.userList);
          this.allUserList = this.userList.map((obj: any) => obj.doc);
        },
        (err) => {
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
          console.log('failed');
          this.toastr.error('List Failed');
        }
      );
    } catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to Display the UserList');
    }
  }

  deleteFun(id: string, revId: string) {
    try {
      const deleteUser = confirm('Are you want to delete this branch ?');
      if (deleteUser == true) {
        this.allUserObj.deleteUser(id, revId).subscribe(
          (res) => {

            window.location.reload();
            this.toastr.success('Successfully Deletd');
          },
          (err: { response: { data: { errorMessage: any } } }) => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
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
