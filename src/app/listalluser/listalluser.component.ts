import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listalluser',
  templateUrl: './listalluser.component.html',
  styleUrls: ['./listalluser.component.css']
})
export class ListalluserComponent implements OnInit {
  userList: any;
  allUserList: any;

  constructor(private http: HttpClient,
    private allUserObj: AdminService) {
    this.listAllUser();
  }

  ngOnInit(): void {
  }

  listAllUser() {

    this.allUserObj.listAllUser().subscribe((res: any) => {
      let data = res.rows;
      console.log("response : ", data);
      this.userList = data;
      console.log("table list :", this.userList);
      this.allUserList = this.userList.map((obj: any) => obj.doc);
    }, err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

  deleteFun(id: any, revId: any) {
    alert("Function Works")
    console.log('Delete' + id + " " + revId);
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/";
    axios.delete(url + "collegeadmissionapp_user/" + id + "?rev=" + revId, { headers: { 'Authorization': basicAuth } }).then(res => {
      console.log("success");
      window.location.reload();
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

}
