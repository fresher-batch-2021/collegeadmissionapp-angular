import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicelayerService } from '../servicelayer.service';
import { ValidatorService } from '../validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private serviceObj: ServicelayerService) { }

  ngOnInit(): void {
  }
  userName: string = "";
  password: string = "";

  login() {
    const validatorService = new ValidatorService();
    try {
      validatorService.isValidString(this.userName, "UserName cannot be blank");
      validatorService.isValidPassword(this.password, "Password cannot be blank");
      const selectedData = {
        selector: {
          username: this.userName,
          password: this.password
        },
        fields: ["_id", "name", "contactNo", "email"]
      };

      this.serviceObj.userLogin(selectedData).subscribe((res: any) => {
        let data = res.docs;
        console.log(data);

        if (data.length == 0) {
          alert("Invalid Login Credentials")
        }
        else {
          alert("Login Successful");
          localStorage.setItem("registerData", JSON.stringify(data[0]));
          this.router.navigateByUrl("home");
        }
      }), ((err: { response: { data: { errorMessage: any; }; }; }) => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        alert("Error-" + errorMessage);
      });
    } catch (err) {
      console.error(err.message);
      alert(err.message);
      alert("Unable to register");
    }
  }
}

// function loginObj(loginObj: any) {
//   throw new Error('Function not implemented.');
// }
