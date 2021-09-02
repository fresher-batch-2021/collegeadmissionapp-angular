import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AcademicComponent } from './academic/academic.component';
import { ProgramComponent } from './program/program.component';
import { PersonalComponent } from './personal/personal.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { Header1Component } from './header1/header1.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchPipe } from './search.pipe';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ListprofileComponent } from './listprofile/listprofile.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { DisplaybranchComponent } from './displaybranch/displaybranch.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DeletebranchComponent } from './deletebranch/deletebranch.component';
import { AddfeesComponent } from './addfees/addfees.component';
import { ViewfeesComponent } from './viewfees/viewfees.component';
import { ListfeesComponent } from './listfees/listfees.component';
import { ListalluserComponent } from './listalluser/listalluser.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AcademicComponent,
    ProgramComponent,
    PersonalComponent,
    PreviewComponent,
    ProfileComponent,
    EditComponent,
    AdminComponent,
    ViewApplicationComponent,
    Header1Component,
    LogoutComponent,
    SearchPipe,
    UserprofileComponent,
    ListprofileComponent,
    AddbranchComponent,
    DisplaybranchComponent,
    AdminpanelComponent,
    DeletebranchComponent,
    AddfeesComponent,
    ViewfeesComponent,
    ListfeesComponent,
    ListalluserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
