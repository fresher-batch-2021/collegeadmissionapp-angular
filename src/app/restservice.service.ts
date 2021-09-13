import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http: HttpClient) { }

  save(database: any, registerObj: any) {
    const urlValue = environment.url + database;
    return this.http.post(urlValue, registerObj);
  }

  select(database: any, selectedData: any) {
    const urlValue = environment.url + database;
    return this.http.post(urlValue, selectedData);
  }
  getOneData(database: any, userList: any) {
    const urlValue = environment.url + database + '/_find';
    return this.http.post(urlValue, userList);
  }

  getAllData(database: any) {
    const urlValue = environment.url + database + '/_all_docs?include_docs=true';
    return this.http.get(urlValue);
  }

  updateData(database: any, id: any, revId: any, updateObj: any) {
    const urlValue = environment.url + database + id + '?rev=' + revId;
    return this.http.put(urlValue, updateObj);
  }

  deleteData(database: any, id: any, rev: any) {
    const urlValue = environment.url + database + id + '?rev=' + rev;
    return this.http.delete(urlValue);
  }

}
