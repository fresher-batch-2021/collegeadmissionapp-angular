import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  fees: any;
  feesList: any;
  idNo: any;
  rev:any;
  admissionFees: string = "";
  tutionFees: string = "";
  examFees: string = "";
  hostelFees: string = "";
  constructor() {

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    this.idNo = id;
    this.rev = urlParams.get('rev');
    console.log(id);

    const feesObj = new AdminService();
    feesObj.listFees().then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.fees = data.rows;
      console.log("table list :", this.fees);
      this.feesList = this.fees.map((obj: any) => obj.doc);
      for(let list of this.feesList){
        console.log(list._id);
        if(list._id == this.idNo){
          this.admissionFees = list.admissionFees;
          this.examFees = list.examFees;
          this.hostelFees = list.hostelFees;
          this.tutionFees = list.tutionFees;
        }
      }
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
      alert("Display-Failed");
    });

  }

  ngOnInit(): void {
  }
  

  updateFees() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    //const id = urlParams.get('id');
    //const rev = urlParams.get('rev')
    console.log(this.rev);
    console.log(this.idNo);

    let updateFeesObj = {
      "admissionFees": this.admissionFees,
      "tutionFees": this.tutionFees,
      "examFees": this.examFees,
      "hostelFees": this.hostelFees
    }
    console.log(updateFeesObj);
    // const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
    // const dbPassword = "163671d490ddeef138fc61e470881715";
    // const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    // let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/";
    const editFeesObj = new AdminService();
    editFeesObj.update(this.idNo, this.rev, updateFeesObj).then(res => {
      console.log(res.data);
      alert("successfull");
      window.location.href = "/listfees";
      
    }).catch(err => alert("error "+err.data)

    )

  }

}
