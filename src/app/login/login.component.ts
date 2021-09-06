import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicelayerService } from '../servicelayer.service';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private serviceObj: ServicelayerService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void { }
  userName: string = '';
  password: string = '';

  login() {
    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.userName, 'UserName cannot be blank');
      validatorService.isValidPassword(
        this.password,
        'Password cannot be blank'
      );
      const selectedData = {
        selector: {
          username: this.userName,
          password: this.password,
        },
        fields: ['_id', 'name', 'contactNo', 'email'],
      };

      this.serviceObj.userLogin(selectedData).subscribe(
        (res: any) => {
          let data = res.docs;
          console.log(data);

          if (data.length == 0) {
            this.toast.error('Invalid Login Credentials');
          } else {
            this.toast.success('Login Successful');

            localStorage.setItem('registerData', JSON.stringify(data[0]));
            this.router.navigateByUrl('home');
          }
        },
        (err: { response: { data: { errorMessage: any } } }) => {
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
        }
      );
    } catch (err: any) {
      console.error(err.message);
      this.toast.error('Unable to register');
    }
  }
}
