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
import { ListApplicationComponent } from './list-application/list-application.component';
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
    ListApplicationComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
