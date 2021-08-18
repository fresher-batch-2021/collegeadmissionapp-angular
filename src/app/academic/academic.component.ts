import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  qualifiedExam: string = "";
  examinationBoard: string = "";
  registerNumber: string = "";
  yearOfPassing: string = "";
  groupCode: string = "";
  medium: string = "";
  hscMaxMarks: string = "";
  hscTotalMarks: string = "";
  percentage: string = "";
  ssclMaxMarks: string = "";
  sslcTotalMarks: string = "";
  branch: string = "";

  academicInformation() {
    if (this.qualifiedExam == "" || this.qualifiedExam == null) {
      alert("Qualified Exam cannot be blank");
    } else if (this.examinationBoard == "" || this.examinationBoard == null) {
      alert("Examination Board is Mandatory");
    } else if (this.registerNumber == "" || this.registerNumber == null) {
      alert("Register Number is Mandatory");
    } else if (this.yearOfPassing == "" || this.yearOfPassing == null) {
      alert("YearOfPassing is Mandatory");
    } else if (this.groupCode == "" || this.groupCode == null) {
      alert("GroupCode is Mandatory");
    } else if (this.medium == "" || this.medium == null) {
      alert("Medium is Mandatory");
    } else if (this.hscMaxMarks == "" || this.hscMaxMarks == null) {
      alert("HscMaxMarks is Mandatory");
    } else if (this.hscTotalMarks == "" || this.hscTotalMarks == null) {
      alert("HscTotalMarks is Mandatory");
    } else if (this.percentage == "" || this.percentage == null) {
      alert("Percentage is Mandatory");
    } else if (this.ssclMaxMarks == "" || this.ssclMaxMarks == null) {
      alert("SSLCMaxMarks is Mandatory");
    }
    else if (this.sslcTotalMarks == "" || this.sslcTotalMarks == null) {
      alert("SSLCtotalMarks is Mandatory");
    } else if (this.branch == "" || this.branch == null) {
      alert("Branch is Mandatory");
    } else {
      let academicData = {
        "qualifiedExam": this.qualifiedExam,
        "examinationBoard": this.examinationBoard,
        "registerNumber": this.registerNumber,
        "yearOfPassing": this.yearOfPassing,
        "groupCode": this.groupCode,
        "medium": this.medium,
        "hscMaxMarks": this.hscMaxMarks,
        "hscTotalMarks": this.hscTotalMarks,
        "percentage": this.percentage,
        "ssclMaxMarks": this.ssclMaxMarks,
        "sslcTotalMarks": this.sslcTotalMarks,
        "branch": this.branch
      }
      console.log(academicData);
      localStorage.setItem('academicForm', JSON.stringify(academicData));
      alert("Register successfull");
      window.location.href = "preview";
    }
  }
}
