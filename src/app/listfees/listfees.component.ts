import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private feesObj: AdminService) {
    this.displayFees();
  }

  ngOnInit(): void {
  }
  displayFees() {


    this.feesObj.listFees().subscribe((res: any) => {
      console.log("Result", res.rows);
      let data = res.rows;
      console.log("response : ", data);
      this.fees = data;
      console.log("table list :", this.fees);
      this.feesList = this.fees.map((obj: any) => obj.doc);
    }), ((err: { response: { data: { errorMessage: any; }; }; }) => {
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
