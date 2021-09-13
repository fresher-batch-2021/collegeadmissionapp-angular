import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css'],
})
export class ViewApplicationComponent implements OnInit {
  tableData: any;
  title = 'datatables';
  constructor(
    private http: HttpClient,
    private applicationObj: AdminService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    this.displayForms();
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
  dbUserName = 'apikey-v2-v1zh0zplguvn1ukyhpnqwpt7rhiuokz1bqggmlt9kw4';
  dbPassword = '163671d490ddeef138fc61e470881715';
  basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  url =
    'https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/';
  displayForms() {
    try {
      this.applicationObj.listApplication().subscribe(
        (res: any) => {
          let data = res.rows;
          this.tableData = data;
          console.log('Table list :', this.tableData);
        },
        (err: { response: { data: { errorMessage: any } } }) => {
          let errorMessage = err.response.data.errorMessage;
          console.error(errorMessage);
          console.log(errorMessage);
          this.toastr.error('List Failed');
        }
      );
    }
    catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to Display Application List');
    }
  }

  updateStatus(id: string, status: string, branch: string) {

    const statusUpdate = confirm('Are you want to Update this Record');
    if (statusUpdate == true) {
      let urlValue =
        'https://21781b11-9dff-4242-9efa-fb21396540ca-bluemix.cloudantnosqldb.appdomain.cloud/viewapplication/' +
        id;
      this.http.get(urlValue, { headers: { Authorization: this.basicAuth } }).subscribe((result: any) => {
        const applicationObj = result;
        applicationObj.status = status;

        const updateURL = urlValue + '?rev=' + applicationObj._rev;

        this.http
          .put(updateURL, applicationObj, {
            headers: { Authorization: this.basicAuth },
          })
          .subscribe((res: any) => {
            this.toastr.info('Update Successfull');
            window.location.reload();
          });
      },
        (err: { response: { data: any } }) => {
          let errorMessage = err.response.data;
          console.error(errorMessage);
          console.log(errorMessage);
          this.toastr.error('Update Failed');
        }
      );
      if (status == 'ACCEPTED') {
        const requestData = {
          selector: {
            branch: branch,
          },
          fields: ['_id', '_rev', 'degree', 'branch', 'totalSeats', 'availableSeats', 'appliedSeats'],
        };

        this.http.post(this.url + 'adddepartments/_find', requestData, {
          headers: { Authorization: this.basicAuth },
        })
          .subscribe((res: any) => {
            let data = res.docs[0];
            this.update_seats(data);
          });
      }
    }
  }

  deleteFun(id: string, revId: string) {
    console.log('Delete' + id + ' ' + revId);
    try {
      const deleteApplication = confirm('Are you want to delete this Record');
      if (deleteApplication == true) {
        axios
          .delete(this.url + 'viewapplication/' + id + '?rev=' + revId, {
            headers: { Authorization: this.basicAuth },
          })
          .then((res) => {
            console.log('success');
            window.location.reload();
          })
          .catch((err) => {
            let errorMessage = err.response.data.errorMessage;
            console.error(errorMessage);
            console.log(errorMessage);
            this.toastr.error('Failed to delete this record');
          });
      }
    } catch (err: any) {
      console.error(err.message);
      this.toastr.error('Unable to register');
    }
  }

  update_seats(data: any) {
    let updateData = {
      degree: data.degree,
      branch: data.branch,
      availableSeats: parseInt(data.availableSeats) - 1,
      totalSeats: data.totalSeats,
      appliedSeats: parseInt(data.appliedSeats) + 1,
    };

    console.log('Seats', updateData);
    this.http
      .put(
        this.url + 'adddepartments/' + data._id + '?rev=' + data._rev,
        updateData,
        { headers: { Authorization: this.basicAuth } }
      )
      .subscribe(
        (res: any) => {
          this.toastr.success('Successfully Updated');
          window.location.reload();
        },
        (err: any) => {
          this.toastr.error('Failed to Update this Record');
        }
      );
  }
}
