import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listfees',
  templateUrl: './listfees.component.html',
  styleUrls: ['./listfees.component.css'],
})
export class ListfeesComponent implements OnInit {
  fees: any;
  feesList: any;

  constructor(
    private http: HttpClient,
    private feesObj: AdminService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.displayFees();
  }

  ngOnInit(): void { }
  displayFees() {
    try {
      this.feesObj.listFees().subscribe((res: any) => {
        console.log('Result', res.rows);
        let data = res.rows;
        this.fees = data;
        console.log('Table list :', this.fees);
        this.feesList = this.fees.map((obj: any) => obj.doc);
        this.toastr.success('List Successfull');
      },
        (err: { response: { data: { errorMessage: any } } }) => {
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
          console.log('failed');
          this.toastr.error('List Failed');
        });
    } catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to Display Fees List');
    }
  }
  updateFees(id: any, revId: any) {
    alert(id);
    this.router.navigate([`/branch/fees/edit/${id}/${revId}`])
  }
}
