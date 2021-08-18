import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  registerData = localStorage.getItem('registerData');
  userData = localStorage.getItem('personalForm');
  academicData = localStorage.getItem('academicForm');


  personaldata: any;
  regData: any;
  acadData:any;

  constructor() {
    this.personaldata = this.userData != null ? JSON.parse(this.userData) : null;
    console.log("userdata", this.personaldata);
    

    this.regData = this.registerData != null ? JSON.parse(this.registerData) : null;
    console.log("registerData", this.regData);

    this.acadData=this.academicData!=null?JSON.parse(this.academicData):null;
    console.log("academicData",this.acadData);
   }

  ngOnInit(): void {
  }

}
