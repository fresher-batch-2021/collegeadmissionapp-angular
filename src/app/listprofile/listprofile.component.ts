import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-listprofile',
  templateUrl: './listprofile.component.html',
  styleUrls: ['./listprofile.component.css']
})
export class ListprofileComponent implements OnInit {
  userData = localStorage.getItem('registerData');
  loginData: any;
  tableData: any;
  emailId: any;
  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.loginData);
    this.emailId = this.loginData.email;

    this.displayProfile();
  }

  ngOnInit(): void {
  }

  displayProfile() {
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    const userData = {
      selector: {
        email: this.emailId
      },
      fields: ["_id", "name", "branch", "percentage", "email", "status"]
    }

    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/_find";
    axios.post(url, userData, { headers: { 'Authorization': basicAuth } }).then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.tableData = data.docs;
      console.log("table list :", this.tableData);

    }).catch(err => {
      alert("List Failed");
    });
  }
}
