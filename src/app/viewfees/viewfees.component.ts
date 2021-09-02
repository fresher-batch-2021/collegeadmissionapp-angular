import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-viewfees',
  templateUrl: './viewfees.component.html',
  styleUrls: ['./viewfees.component.css'],
})
export class ViewfeesComponent implements OnInit {
  fees: any;
  feesList: any;
  constructor(
    private http: HttpClient,
    private feesObj: AdminService,
    private toastr: ToastrService
  ) {
    this.displayFees();
  }

  ngOnInit(): void {}
  displayFees() {
    this.feesObj.listFees().subscribe(
      (res: any) => {
        let data = res.rows;
        console.log('Response : ', data);
        this.fees = data;
        console.log('Table list :', this.fees);
        this.feesList = this.fees.map((obj: any) => obj.doc);
        this.toastr.success('List Succesfull');
      },
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log('Failed');
        this.toastr.error('List Failed');
      }
    );
  }
}
