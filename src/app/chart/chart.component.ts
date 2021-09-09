import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['UI/UX', 'FullStack', 'Backend', 'Oracle', 'Admin'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
 public barChartData = [
   {data : [5,9,8,9,7]}
 ]


  ngOnInit(): void {
  }

}
