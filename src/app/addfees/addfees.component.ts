import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-addfees',
  templateUrl: './addfees.component.html',
  styleUrls: ['./addfees.component.css']
})
export class AddfeesComponent implements OnInit {
  feesDetails: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feesDetails = this.fb.group({
      admissionFees: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}')]),
      tutionFees: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]),
      examFees: new FormControl('', [Validators.required, Validators.pattern('[0-9]{3}')]),
      hostelFees: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')])

    })
  }

  ngOnInit(): void {
  }
  addFees() {
    try {
      let feesObj = {
        admissionFees: this.feesDetails.value.admissionFees,
        tutionFees: this.feesDetails.value.tutionFees,
        examFees: this.feesDetails.value.examFees,
        hostelFees: this.feesDetails.value.hostelFees
      }
      console.log(feesObj);
      const dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
      const dbPassword = "163671d490ddeef138fc61e470881715";
      const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
      let url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/addfees";
      axios.post(url, feesObj, { headers: { 'Authorization': basicAuth } }).then((res: any) => {
        let data = res.data;
        console.log(data);
        localStorage.setItem('feesObj', JSON.stringify(feesObj));
        alert("Fees Added Successfully");
      }).catch(err => {
        alert(err.message);
        alert("Unable to add Fees");
      });

    } catch (err) {
      console.error(err.message);
      alert(err.message);
      alert("Unable to register");
    }
  }
}
