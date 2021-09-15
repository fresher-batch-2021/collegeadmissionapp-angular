import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Clgfees } from '../clgfees';

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
  bookId: any;

  @Input() count : number = 0;


  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private feesObj: AdminService,
    private editFeesObj: AdminService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.idNo = this.route.snapshot.params["id"];
    this.rev = this.route.snapshot.params["rev"];



    console.log(this.rev)

    this.feesObj.listFees().subscribe((res: any) => {
      let data = res.rows;
      this.fees = data;
      console.log("Update :", this.fees);

      this.feesList = this.fees.map((obj: any) => obj.doc);
      for (let list of this.feesList) {
        console.log(list)
        if (list._id == this.idNo) {
          console.log(list.admissionFees)
          this.admissionFees = list.admissionFees;
          console.log(this.admissionFees)
          this.examFees = list.examFees;
          this.hostelFees = list.hostelFees;
          this.tutionFees = list.tutionFees;
        }
      }

      console.log("Fees :", this.feesList);
    },
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log('failed');
        this.toastr.error('List Failed');
      });
  }

  ngOnInit(): void {

    alert(this.count);
    
   }

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
    const feesValue = new Clgfees();
    feesValue.setData(updateFeesObj)

    const updateFeesValue = confirm('Are you want to update this record');
    if (updateFeesValue == true) {
      this.editFeesObj
        .update(this.idNo, this.rev, feesValue)
        .subscribe((res: any) => {
          console.log(res.data);
          this.toastr.success('Upadate Successfull');
          this.router.navigate([`/branch/fees/listfees`])

        }),
        (err: { data: string }) => alert('error ' + err.data);
    }

  }
}
