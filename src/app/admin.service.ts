import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
  dbPassword = "163671d490ddeef138fc61e470881715";
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/";

  submitApplication(registerObj: any) {
    return this.http.post(this.url + "viewapplication", registerObj, { headers: { 'Authorization': this.basicAuth } })
  }

  addDepartment(departmentObj: any) {
    return this.http.post(this.url + "adddepartments", departmentObj, { headers: { 'Authorization': this.basicAuth } })

  }
  displayDepartment() {
    return this.http.get(this.url + "adddepartments/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })

  }
  listApplication() {
    return this.http.get(this.url + "viewapplication/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })
  }
  listFees() {
    return this.http.get(this.url + "addfees/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })
  }
  listAllUser() {
    return this.http.get(this.url + "collegeadmissionapp_user/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })
  }
  update(id: any, rev: any, updateFeesObj: any) {
    return this.http.put(this.url + "addfees/" + id + "?rev=" + rev, updateFeesObj, { headers: { 'Authorization': this.basicAuth } })
  }


}
