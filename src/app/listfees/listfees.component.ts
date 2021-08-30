import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listfees',
  templateUrl: './listfees.component.html',
  styleUrls: ['./listfees.component.css']
})
export class ListfeesComponent implements OnInit {
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
  updateFees(id: any, revId: any) {
    alert("FunctionWorks");
    window.location.href = "/edit?id=" + id + "&rev=" + revId;
  }
}
