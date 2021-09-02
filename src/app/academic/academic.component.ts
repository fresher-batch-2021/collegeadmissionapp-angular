import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css'],
})
export class AcademicComponent implements OnInit {
  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit(): void {}
  qualifiedExam: string = '';
  examinationBoard: string = '';
  registerNumber: string = '';
  yearOfPassing: string = '';
  groupCode: string = '';
  medium: string = '';
  hscMaxMarks: string = '';
  hscTotalMarks: string = '';
  percentage: string = '';
  ssclMaxMarks: string = '';
  sslcTotalMarks: string = '';
  branch: string = '';

  academicInformation() {
    const validatorService = new ValidatorService();

    try {
      validatorService.isValidString(
        this.qualifiedExam,
        'Qualified Exam cannot be blank'
      );
      validatorService.isValidString(
        this.examinationBoard,
        'Examination Board is Mandatory'
      );
      validatorService.isValidString(
        this.registerNumber,
        'Register Number is Mandatory'
      );
      validatorService.isValidString(
        this.yearOfPassing,
        'YearOfPassing is Mandatory'
      );
      validatorService.isValidString(this.groupCode, 'GroupCode is Mandatory');
      validatorService.isValidString(this.medium, 'Medium is Mandatory');
      validatorService.isValidMarks(
        this.hscMaxMarks,
        'HscMaxMarks is Mandatory'
      );
      validatorService.isValidMarks(
        this.hscTotalMarks,
        'HscTotalMarks is Mandatory'
      );
      validatorService.isValidMarks(this.percentage, 'Percentage is Mandatory');
      validatorService.isValidMarks(
        this.ssclMaxMarks,
        'SSLCMaxMarks is Mandatory'
      );
      validatorService.isValidMarks(
        this.sslcTotalMarks,
        'SSLCtotalMarks is Mandatory'
      );
      validatorService.isValidString(
        this.sslcTotalMarks,
        'Branch is Mandatory'
      );

      let academicData = {
        qualifiedExam: this.qualifiedExam,
        examinationBoard: this.examinationBoard,
        registerNumber: this.registerNumber,
        yearOfPassing: this.yearOfPassing,
        groupCode: this.groupCode,
        medium: this.medium,
        hscMaxMarks: this.hscMaxMarks,
        hscTotalMarks: this.hscTotalMarks,
        percentage: this.percentage,
        ssclMaxMarks: this.ssclMaxMarks,
        sslcTotalMarks: this.sslcTotalMarks,
        branch: this.branch,
      };
      console.log(academicData);
      localStorage.setItem('academicForm', JSON.stringify(academicData));
      this.toastr.success('Register successfull');
      this.router.navigateByUrl('preview');
    } catch (err) {
      console.error(err.message);
      this.toastr.error('Unable to Register');
    }
  }
}
