import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  registerData = localStorage.getItem('registerData');
  userData = localStorage.getItem('personalForm');
  academicData = localStorage.getItem('academicForm');


  data: any;
  regData: any;
  acadData: any;

  // userData = localStorage.getItem('registerData');

  constructor() {
    this.data = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.data);
    console.log("userdata", this.data.name);

    this.regData = this.registerData != null ? JSON.parse(this.registerData) : null;
    console.log("registerData", this.regData);

    this.acadData = this.academicData != null ? JSON.parse(this.academicData) : null;
    console.log("academicData", this.acadData);
  }

  ngOnInit(): void {
  }



}
