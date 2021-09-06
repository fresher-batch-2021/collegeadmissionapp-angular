import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) { }

  basicAuth =
    'Basic ' + btoa(environment.dbUserName + ':' + environment.dbPassword);
  submitApplication(registerObj: any) {
    return this.http.post(environment.url + 'viewapplication', registerObj, {
      headers: { Authorization: this.basicAuth },
    });
  }

  addDepartment(departmentObj: any) {
    return this.http.post(environment.url + 'adddepartments', departmentObj, {
      headers: { Authorization: this.basicAuth },
    });
  }
  displayDepartment() {
    return this.http.get(
      environment.url + 'adddepartments/_all_docs?include_docs=true',
      { headers: { Authorization: this.basicAuth } }
    );
  }
  listApplication() {
    return this.http.get(
      environment.url + 'viewapplication/_all_docs?include_docs=true',
      { headers: { Authorization: this.basicAuth } }
    );
  }
  listFees() {
    return this.http.get(
      environment.url + 'addfees/_all_docs?include_docs=true',
      {
        headers: { Authorization: this.basicAuth },
      }
    );
  }
  listAllUser() {
    return this.http.get(
      environment.url + 'collegeadmissionapp_user/_all_docs?include_docs=true',
      { headers: { Authorization: this.basicAuth } }
    );
  }
  update(id: any, rev: any, updateFeesObj: any) {
    return this.http.put(
      environment.url + 'addfees/' + id + '?rev=' + rev,
      updateFeesObj,
      { headers: { Authorization: this.basicAuth } }
    );
  }
  addFees(feesObj: any) {
    return this.http.post(environment.url + 'addfees', feesObj, {
      headers: { Authorization: this.basicAuth },
    });
  }
  deleteFunction(id: any, rev: any) {
    return this.http.delete(
      environment.url + 'adddepartments/' + id + '?rev=' + rev,
      { headers: { Authorization: this.basicAuth } }
    );
  }
  deleteUser(id: any, rev: any) {
    return this.http.delete(environment.url + 'collegeadmissionapp_user/' + id + '?rev=' + rev, { headers: { Authorization: this.basicAuth } });
  }
  departmentList(branchList: any) {
    return this.http.post(environment.url + 'adddepartments/_find', branchList, { headers: { Authorization: this.basicAuth } });

  }
}
