import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-displaybranch',
  templateUrl: './displaybranch.component.html',
  styleUrls: ['./displaybranch.component.css']
})
export class DisplaybranchComponent implements OnInit {
  userData = localStorage.getItem('registerData');
  loginData: any;
  branch: any;
  constructor() {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("registerData", this.loginData);
    this.displayBranch();
  }

  ngOnInit(): void {
  }


  displayBranch() {
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/_all_docs?include_docs=true";
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.branch = data.rows;
      console.log("table list :", this.branch);
    }).catch(err => {
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
      window.location.href = "personal";
    }
  }

}
