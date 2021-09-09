import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  branch: any;
  branchList: any;

  constructor(private departmentObj: AdminService,
    private toastr: ToastrService) { }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['IT', 'CSE', 'EEE', 'ECE', 'CIVIL'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  public barChartData: any = [
    { data: [] }
  ];


  ngOnInit(): void {
    this.loadChart();
  }

  loadChart() {
    this.departmentObj.displayDepartment().subscribe((res: any) => {
      let data = res.rows;
      console.log('Response : ', data);
      this.branch = data;
      console.log('Table list :', this.branch);
      this.branchList = this.branch.map((obj: any) => obj.doc);
      this.departmentData();
      this.toastr.success('List Successfull');
    },
      (err: { response: { data: { errorMessage: any } } }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        this.toastr.error('List Failed');
      });
  }
  departmentData() {
    let EEE = 0;
    let ECE = 0;
    let CSE = 0;
    let IT = 0;
    let CIVIL = 0;

    for (let department of this.branchList) {
      if (department.branch == "IT") {
        IT += department.appliedSeats;
      } else if (department.branch == "EEE") {
        EEE += department.appliedSeats;
      } else if (department.branch == "ECE") {
        ECE += department.appliedSeats;
      } else if (department.branch == "CSE") {
        CSE += department.appliedSeats;
      } else if (department.branch == "CIVIL") {
        CIVIL += department.appliedSeats;
      }
    }
    console.log("EEE", EEE);
    console.log("ECE", ECE);
    console.log("CSE", CSE);
    console.log("IT", IT);
    console.log("CIVIL", CIVIL);

    this.barChartData = [{ label: "DepartmentData", data: [IT, EEE, ECE, CSE, CIVIL] },];
  }



}
