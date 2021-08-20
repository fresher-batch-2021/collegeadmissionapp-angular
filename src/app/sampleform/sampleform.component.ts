import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {

  sampleForm : FormGroup;

  constructor(private fb : FormBuilder) 
  { 
    this.sampleForm = this.fb.group({
      name : new FormControl("", Validators.required),
      email : new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    })
  }

  ngOnInit(): void {
  }

  sample()
  {
    console.log("form values", this.sampleForm.value);
  }
}
