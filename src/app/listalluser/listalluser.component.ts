import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

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
    private toastr: ToastrService
  ) {
    this.listAllUser();
  }

  ngOnInit(): void { }

  listAllUser() {
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
  }

  deleteFun(id: any, revId: any) {
    this.allUserObj.deleteUser(id, revId).subscribe(
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
  }
}
