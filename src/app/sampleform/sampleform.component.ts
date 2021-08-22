import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {


  sampleForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  get name() { return this.sampleForm.get('name') }
  get email() { return this.sampleForm.get('email') }

  constructor() {

  }

  ngOnInit(): void {
  }

  sample() {
    console.log(this.name);
    console.log("form values", this.sampleForm.value);
  }
}
