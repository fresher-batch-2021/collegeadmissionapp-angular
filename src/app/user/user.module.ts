import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from '../admin/admin.component';
import { ProfileComponent } from '../profile/profile.component';
import { ViewfeesComponent } from '../viewfees/viewfees.component';
import { DisplaybranchComponent } from '../displaybranch/displaybranch.component';
import { RegisterComponent } from '../register/register.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ProfileComponent,
    ViewfeesComponent,
    DisplaybranchComponent,
    UserprofileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
