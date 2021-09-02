import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicelayerService {


  constructor(private http: HttpClient) { }

  dbUserName = "apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4";
  dbPassword = "163671d490ddeef138fc61e470881715";
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  url = "https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/collegeadmissionapp_user";
  userLogin(selectedData: any) {
    return this.http.post(this.url + "/_find", selectedData, { headers: { Authorization: this.basicAuth } })
  }

  userRegister(registerObj: any) {
    return this.http.post(this.url, registerObj, { headers: { Authorization: this.basicAuth } })
  }
}
