import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestserviceService } from './restservice.service';

@Injectable({
  providedIn: 'root',
})
export class ServicelayerService {
  constructor(private http: HttpClient, private restService: RestserviceService) { }

  userLogin(selectedData: any) {
    return this.restService.save('collegeadmissionapp_user/_find', selectedData);
  }
  userRegister(registerObj: any) {
    return this.restService.save('collegeadmissionapp_user', registerObj);
  }

  userProfile(emailId: string) {
    const userData = {
      selector: {
        email: emailId,
      },
      fields: ['_id', 'name', 'branch', 'percentage', 'email', 'status'],
    };
    return this.restService.select('viewapplication/_find', userData);
  }


  userList(userList: any) {
    return this.restService.getOneData('collegeadmissionapp_user', userList);
  }

}
