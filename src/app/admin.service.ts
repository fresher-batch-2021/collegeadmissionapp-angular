import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Department } from './department';
import { Form } from './form';
import { RestserviceService } from './restservice.service';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient, private restService: RestserviceService) { }

  basicAuth = 'Basic ' + btoa(environment.dbUserName + ':' + environment.dbPassword);

  submitApplication(registerObj: Form) {
    return this.restService.save('viewapplication', registerObj);
  }

  addDepartment(departmentObj: Department) {
    return this.restService.save('adddepartments', departmentObj);
  }
  displayDepartment() {
    return this.restService.getAllData('adddepartments');
  }

  listApplication() {
    return this.restService.getAllData('viewapplication');
  }

  listFees() {
    return this.restService.getAllData('addfees');
  }

  listAllUser() {
    return this.restService.getAllData('collegeadmissionapp_user');
  }

  update(id: string, rev: string, updateFeesObj: any) {
    return this.restService.updateData('addfees/', id, rev, updateFeesObj);
  }

  addFees(feesObj: any) {
    return this.restService.save('addfees', feesObj);
  }

  deleteBranch(id: string, rev: string) {
    return this.restService.deleteData('adddepartments/', id, rev);
  }

  deleteUser(id: string, rev: string) {
    return this.restService.deleteData('collegeadmissionapp_user/', id, rev);
  }

  departmentList(branchList: any) {
    return this.restService.getOneData('adddepartments', branchList);
  }
}
