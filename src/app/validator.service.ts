import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  isValidString(value: any, errorMessage: any) {
    if (value == null  || value == undefined) {
      throw new Error(errorMessage);
    }
  }
  isValidNumber(value: any, errorMessage: any) {
    if (value.length < 10 || value.length > 10) {
      throw new Error(errorMessage);
    }
  }
  isValidPassword(value: any, errorMessage: any) {
    if (value == null || value.length == undefined) {
      throw new Error(errorMessage);
    }
  }
  isValidPasswordLength(value: any, errorMessage: any) {
    if (value.length < 8 || value.length > 15) {
      throw new Error(errorMessage);
    }
  }
  isValidMarks(value: any, errorMessage: any) {
    if (value == null || value == undefined) {
      throw new Error(errorMessage);
    }
  }
  isValidAadhar(value: any, errorMessage: any) {
    if (value.length < 12 || value.length > 12) {
      throw new Error(errorMessage);
    }
  }
}
