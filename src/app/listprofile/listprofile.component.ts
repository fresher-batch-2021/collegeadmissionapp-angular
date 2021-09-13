import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ServicelayerService } from '../servicelayer.service';

@Component({
  selector: 'app-listprofile',
  templateUrl: './listprofile.component.html',
  styleUrls: ['./listprofile.component.css'],
})
export class ListprofileComponent implements OnInit {
  userData = localStorage.getItem('registerData');
  loginData: any;
  tableData: any;
  emailId: any;
  constructor(private userProfile: ServicelayerService, private toastr: ToastrService) {
    this.loginData = this.userData != null ? JSON.parse(this.userData) : null;
    this.emailId = this.loginData.email;

    this.displayProfile();
  }

  ngOnInit(): void { }
  dbUserName = 'apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4';
  dbPassword = '163671d490ddeef138fc61e470881715';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);

  displayProfile() {
    this.userProfile.userProfile(this.emailId).subscribe(
      (res: any) => {
        console.log('value :', res);
        let data = res.docs;
        console.log('response : ', data);
        this.tableData = data;
        console.log('table list :', this.tableData);
      },
      (err: any) => {
        this.toastr.error('List Failed');
      }
    );
  }

  withdraw(id: any, status: any, branch: any) {


    let url =
      'https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/' +
      id;
    const withdraw = confirm("Are you sure want to withdraw your Application")
    if (withdraw == true) {
      axios.get(url, { headers: { Authorization: this.basicAuth } }).then((res) => {
        const applicationObj = res.data;

        applicationObj.status = status;

        //update status api
        const updateURL = url + '?rev=' + applicationObj._rev;
        console.log(updateURL);
        axios
          .put(updateURL, applicationObj, {
            headers: { Authorization: this.basicAuth },
          })
          .then((result) => {
            console.log('Update row', result.data);
            window.location.reload();
          });
      })
        .catch((err) => {
          let errorMessage = err.response.data;
          console.error(errorMessage);
          console.log('failed');
          alert('Error-' + errorMessage);
        });
      if (status == 'WITHDRAWED') {
        const withdrawList = {
          selector: {
            branch: branch,
          },
          fields: ['_id', '_rev', 'degree', 'branch', 'totalSeats', 'availableSeats', 'appliedSeats'],
        };

        axios.post(environment.url + "adddepartments/_find", withdrawList, {
          headers: { Authorization: this.basicAuth },
        })
          .then((res) => {
            let seats = res.data.docs[0];
            this.addSeats(seats);
          });
      }
    }
  }

  addSeats(seats: any) {
    let updatedData = {
      degree: seats.degree,
      branch: seats.branch,
      availableSeats: parseInt(seats.availableSeats) + 1,
      totalSeats: seats.totalSeats,
      appliedSeats: parseInt(seats.appliedSeats) - 1,
    };
    console.log(updatedData);
    const dbUserName = 'apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4';
    const dbPassword = '163671d490ddeef138fc61e470881715';
    const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
    let url =
      'https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/adddepartments/';

    axios
      .put(url + seats._id + '?rev=' + seats._rev, updatedData, {
        headers: { Authorization: basicAuth },
      })
      .then((res) => {
        this.toastr.success('Your Application Withdrawed Successfully');
        window.location.reload();
      })
      .catch((err) => {
        this.toastr.error('Unable to withdrawed your Application');
      });
  }
}
