import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent implements OnInit {
  tableData: any;
  selectedCategory: any;

  constructor(private http: HttpClient, private applicationObj: AdminService) {
    this.displayForms();
  }

  ngOnInit(): void {
  }
  dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
  dbPassword = "163671d490ddeef138fc61e470881715";
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/";
  displayForms() {


    this.applicationObj.listApplication().subscribe((res: any) => {
      let data = res.rows;
      console.log("response : ", data);
      this.tableData = data;
      console.log("table list :", this.tableData);
      console.log("success");
    }), ((err: { response: { data: { errorMessage: any; }; }; }) => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

  updateStatus(id: any, status: any, branch: any) {
    console.log('Update ' + id + ',status=' + status);
    //call backend api and update status


    if (status == "ACCEPTED") {
      const requestData = {
        selector: {
          branch: branch
        },
        fields: ["_id", "_rev", "degree", "branch", "totalSeats", "availableSeats", "appliedSeats"]
      };

      this.http.post(this.url + "adddepartments/_find", requestData, { headers: { 'Authorization': this.basicAuth } }).subscribe((res: any) => {
        let data = res.docs[0];
        this.update_seats(data);
      })
    }

    //get by id
    let urlValue = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/" + id;
    this.http.get(urlValue, { headers: { 'Authorization': this.basicAuth } }).subscribe((result: any) => {
      const applicationObj = result;
      console.log("second", result._rev);

      applicationObj.status = status;

      //update status api
      const updateURL = urlValue + "?rev=" + applicationObj._rev;
      console.log(updateURL);
      this.http.put(updateURL, applicationObj, { headers: { 'Authorization': this.basicAuth } }).subscribe((res: any) => {
        console.log("Update row", res.data);
        alert("Updated");
        window.location.reload();

      });

    }), ((err: { response: { data: any; }; }) => {
      let errorMessage = err.response.data;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

  deleteFun(id: any, revId: any) {
    alert("Function Works")
    console.log('Delete' + id + " " + revId);

    axios.delete(this.url + "viewapplication/" + id + "?rev=" + revId, { headers: { 'Authorization': this.basicAuth } }).then(res => {
      console.log("success");
      window.location.reload();
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
    });
  }

  update_seats(data: any) {
    let updateData = {
      'degree': data.degree,
      'branch': data.branch,
      'availableSeats': parseInt(data.availableSeats) - 1,
      'totalSeats': data.totalSeats,
      'appliedSeats': parseInt(data.appliedSeats) + 1
    }

    console.log("Seats", updateData);
    this.http.put(this.url + "adddepartments/" + data._id + "?rev=" + data._rev, updateData, { headers: { 'Authorization': this.basicAuth } }).subscribe((res: any) => {
      alert("updated success");
      window.location.reload();
    }), ((err: any) => {
      alert("failed to update");
    })
  }


}
