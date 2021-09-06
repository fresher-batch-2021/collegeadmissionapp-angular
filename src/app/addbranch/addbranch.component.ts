import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./addbranch.component.css'],
})
export class AddbranchComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private branchObj: AdminService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }
  degree: string = '';
  branch: string = '';
  totalSeats: string = '';
  availableSeats: string = '';

  addDepartment() {
    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.degree, 'Degree cannot be blank');
      validatorService.isValidString(this.branch, 'Branch cannot be blank');
      validatorService.isValidString(
        this.totalSeats,
        'Total Seats cannot be blank'
      );
      validatorService.isValidString(
        this.availableSeats,
        'Available Seats cannot be blank'
      );
      let departmentObj = {
        selector: {
          branch: this.branch
        },
        fields: ['_id', '_rev', 'degree', 'branch', 'totalseats', 'availableSeats', 'appliedSeats']
      };

      this.branchObj.departmentList(departmentObj).subscribe((res: any) => {
        let data = res.docs;
        console.log("DepartmentList :", data);
        if (data.length === 0) {
          let departmentData = {
            degree: this.degree,
            branch: this.branch,
            totalSeats: this.totalSeats,
            availableSeats: this.availableSeats,
            appliedSeats: '0',
          };
          this.branchObj.addDepartment(departmentData).subscribe((res: any) => {
            let data = res.data;
            console.log(data);
            this.toastr.success('Department Added Successfully');
          },
            (err: { message: any }) => {
              console.log(err.message);
              this.toastr.error('Unable to Add Department');
            });
        } else {
          this.toastr.error('Branch already exists');
        }
      },
        err => {
          console.log("Error", err);
        });

    } catch (err: any) {
      console.error(err.message);
      console.log(err.message);
      this.toastr.error('Unable to Add Department');
    }
  }
}
