import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchRoutingModule } from './branch-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddbranchComponent } from '../addbranch/addbranch.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DeletebranchComponent } from '../deletebranch/deletebranch.component';
import { ListalluserComponent } from '../listalluser/listalluser.component';
import { ViewApplicationComponent } from '../view-application/view-application.component';
import { SearchPipe } from '../search.pipe';


@NgModule({
  declarations: [
    AddbranchComponent,
    DeletebranchComponent,
    ListalluserComponent,
    ViewApplicationComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    BranchRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BranchModule { }
