import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestserviceService } from './restservice.service';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root',
})
export class ServicelayerService {
  collectionName: string = "registerForm"
  constructor(private http: HttpClient, private restService: RestserviceService) { }

  userLogin(userName: string, password: string) {
    const selectedData = {
      selector: {
        userName: userName,
        password: password,
      },
      fields: ['_id', 'name', 'contactNo', 'email', 'role'],
    };
    console.log(selectedData);

    return this.restService.save('collegeadmissionapp_user/_find', selectedData);
  }
  userRegister(registerObj: UserClass) {
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
