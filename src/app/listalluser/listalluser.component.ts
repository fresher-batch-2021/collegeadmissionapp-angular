import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listalluser',
  templateUrl: './listalluser.component.html',
  styleUrls: ['./listalluser.component.css']
})
export class ListalluserComponent implements OnInit {
  userList: any;
  allUserList: any;

  constructor() {
    this.listAllUser();
  }

  ngOnInit(): void {
  }
  listAllUser() {
    const allUserObj = new AdminService();
    allUserObj.listAllUser().then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.userList = data.rows;
      console.log("table list :", this.userList);
      this.allUserList = this.userList.map((obj: any) => obj.doc);
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

}
