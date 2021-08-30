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

  constructor(private router: Router) { }

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


      const serviceObj = new ServicelayerService();
      serviceObj.userLogin(selectedData).then(res => {
        let data = res.data.docs;
        console.log(data);

        if (data.length == 0) {
          alert("Invalid Login Credentials")
        }
        else {
          alert("Login Successful");
          localStorage.setItem("registerData", JSON.stringify(data[0]));
         // window.location.href = "home";
          this.router.navigateByUrl("home");
        }
      }).catch(err => {
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

function loginObj(loginObj: any) {
  throw new Error('Function not implemented.');
}
