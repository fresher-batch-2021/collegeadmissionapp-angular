import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewfees',
  templateUrl: './viewfees.component.html',
  styleUrls: ['./viewfees.component.css']
})
export class ViewfeesComponent implements OnInit {

  fees: any;
  feesList: any;
  constructor() {
    this.displayFees();
  }

  ngOnInit(): void {
  }
  displayFees() {

    const feesObj = new AdminService();
    feesObj.listFees().then(res => {
      let data = res.data;
      console.log("response : ", data);
      this.fees = data.rows;
      console.log("table list :", this.fees);
      this.feesList = this.fees.map((obj: any) => obj.doc);
    }).catch(err => {
      let errorMessage = err.response.data.errorMessage;
      console.error(errorMessage);
      console.log("failed");
      alert("Error-" + errorMessage);
      alert("Display-Failed");
    });
  }

}
