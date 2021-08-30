import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
  dbPassword = "163671d490ddeef138fc61e470881715";
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/";

  submitApplication(registerObj: any) {
    return axios.post(this.url + "viewapplication", registerObj, { headers: { 'Authorization': this.basicAuth } })
  }

  addDepartment(departmentObj: any) {
    return axios.post(this.url + "adddepartments", departmentObj, { headers: { 'Authorization': this.basicAuth } })

  }
  displayDepartment() {
    return axios.get(this.url + "adddepartments/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })

  }
  listApplication() {
    return axios.get(this.url + "viewapplication/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })
  }
  listFees() {
    return axios.get(this.url + "addfees/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })
  }
  listAllUser() {
    return axios.get(this.url + "collegeadmissionapp_user/_all_docs?include_docs=true", { headers: { 'Authorization': this.basicAuth } })
  }
  update(id: any, rev: any, updateFeesObj: any) {
    return axios.put(this.url + "addfees/" + id + "?rev=" + rev, updateFeesObj, { headers: { 'Authorization': this.basicAuth } })
  }


}
