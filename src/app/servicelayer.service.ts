import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicelayerService {
  constructor(private http: HttpClient) { }

  userLogin(selectedData: any) {
    return this.http.post(
      environment.url + 'collegeadmissionapp_user/_find',
      selectedData
    );
  }

  userRegister(registerObj: any) {
    return this.http.post(
      environment.url + 'collegeadmissionapp_user',
      registerObj
    );
  }

  userProfile(emailId: any) {
    const userData = {
      selector: {
        email: emailId,
      },
      fields: ['_id', 'name', 'branch', 'percentage', 'email', 'status'],
    };
    return this.http.post(environment.url + 'viewapplication/_find', userData);
  }


}
