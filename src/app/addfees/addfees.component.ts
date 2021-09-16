import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { Clgfees } from '../clgfees';

@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.css'],
})
export class AddfeesComponent implements OnInit {
  feesDetails: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adminService: AdminService
  ) {
    this.feesDetails = this.fb.group({
      admissionFees: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{4}'),
      ]),
      tutionFees: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{5}'),
      ]),
      examFees: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{3}'),
      ]),
      hostelFees: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{5}'),
      ]),
    });
  }

  ngOnInit(): void { }
  addFees() {
    try {
      let feesObj = {
        admissionFees: this.feesDetails.value.admissionFees,
        tutionFees: this.feesDetails.value.tutionFees,
        examFees: this.feesDetails.value.examFees,
        hostelFees: this.feesDetails.value.hostelFees,
      };
      console.log(feesObj);

      const feesClass = new Clgfees();
      feesClass.setData(feesObj)
      this.adminService.addFees(feesClass).subscribe(
        (res: any) => {
          let data = res.data;
          console.log(data);
          localStorage.setItem('feesObj', JSON.stringify(feesObj));
          this.toastr.success('Fees Added Successfully');
        },
        (err: { message: any }) => {
          console.log(err.message);
          this.toastr.error('Unable to add Fees');
        }
      );
    } catch (err: any) {
      console.error(err.message);
      console.log(err.message);
      this.toastr.error('Unable to Add Fees');
    }
  }
}
