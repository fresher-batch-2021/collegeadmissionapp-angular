import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  fees: any;
  feesList: any;
  idNo: any;
  rev: any;
  admissionFees: string = '';
  tutionFees: string = '';
  examFees: string = '';
  hostelFees: string = '';
  constructor(
    private http: HttpClient,
    private feesObj: AdminService,
    private editFeesObj: AdminService,
    private toastr: ToastrService
  ) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    this.idNo = id;
    this.rev = urlParams.get('rev');

    this.feesObj.listFees().subscribe((res: any) => {
      let data = res.rows;
      this.fees = data;
      this.feesList = this.fees.map((obj: any) => obj.doc);
      for (let list of this.feesList) {
        if (list._id == this.idNo) {
          this.admissionFees = list.admissionFees;
          this.examFees = list.examFees;
          this.hostelFees = list.hostelFees;
          this.tutionFees = list.tutionFees;
        }
      }
    },
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log('failed');
        this.toastr.error('List Failed');
      });
  }

  ngOnInit(): void { }

  updateFees() {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);

    let updateFeesObj = {
      admissionFees: this.admissionFees,
      tutionFees: this.tutionFees,
      examFees: this.examFees,
      hostelFees: this.hostelFees,
    };
    console.log('Upadate Fees', updateFeesObj);
    const updateFeesValue = confirm('Are you want to update this record');
    if (updateFeesValue == true) {
      this.editFeesObj
        .update(this.idNo, this.rev, updateFeesObj)
        .subscribe((res: any) => {
          console.log(res.data);
          this.toastr.success('Upadate Successfull');
          window.location.href = '/branch/fees/listfees';
        }),
        (err: { data: string }) => alert('error ' + err.data);
    }

  }
}
