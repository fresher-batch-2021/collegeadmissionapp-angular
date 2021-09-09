import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddbranchComponent } from '../addbranch/addbranch.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DeletebranchComponent } from '../deletebranch/deletebranch.component';
import { ListalluserComponent } from '../listalluser/listalluser.component';
import { ViewApplicationComponent } from '../view-application/view-application.component';
import { SearchPipe } from '../search.pipe';
import { DataTablesModule } from 'angular-datatables';
import { AdminpanelComponent } from '../adminpanel/adminpanel.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ErrorInterceptor } from '../error.interceptor';
import { ChartComponent } from '../chart/chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AddbranchComponent,
    DeletebranchComponent,
    AdminpanelComponent,
    ListalluserComponent,
    ViewApplicationComponent,
    ChartComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ChartsModule,
    BranchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BranchModule { }
