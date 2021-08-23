import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {
  tableData: any;
  selectedCategory: any;

  constructor() {
    this.displayForms();
  }

  ngOnInit(): void {
  }
  displayForms() {
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/_all_docs?include_docs=true";
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.tableData = data.rows;
      console.log("table list :", this.tableData);
      console.log("success");
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }


  
  updateStatus(id: any, status: any) {
    console.log('Update ' + id + ',status=' + status);
    //call backend api and update status
    const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    const dbPassword = "163671d490ddeef138fc61e470881715";
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

    //get by id
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/" + id;
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
      const applicationObj = res.data;

      applicationObj.status = status;

      //update status api
      const updateURL = url + "?rev=" + applicationObj._rev;
      console.log(updateURL);
      axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log("Update row", res.data);
        alert("Updated");
        window.location.reload();

      });

    }).catch(err => {
      let errorMessage = err.response.data;
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
    let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/" + id + "?rev=" + revId;
    axios.delete(url, { headers: { 'Authorization': basicAuth } }).then(res => {
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
