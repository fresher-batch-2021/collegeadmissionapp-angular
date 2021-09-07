import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AcademicComponent } from './academic/academic.component';
import { ProgramComponent } from './program/program.component';
import { PersonalComponent } from './personal/personal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { EditComponent } from './edit/edit.component';
import { ViewApplicationComponent } from './view-application/view-application.component';
import { Header1Component } from './header1/header1.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchPipe } from './search.pipe';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DeletebranchComponent } from './deletebranch/deletebranch.component';
import { AddfeesComponent } from './addfees/addfees.component';
import { ListfeesComponent } from './listfees/listfees.component';
import { ListalluserComponent } from './listalluser/listalluser.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { IntersectorService } from './intersector.service';
import { UserModule } from './user/user.module';
import { ListprofileComponent } from './listprofile/listprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    AcademicComponent,
    ProgramComponent,
    PersonalComponent,
    PreviewComponent,
    EditComponent,
    ViewApplicationComponent,
    Header1Component,
    LogoutComponent,
    SearchPipe,
    AddbranchComponent,
    AdminpanelComponent,
    DeletebranchComponent,
    AddfeesComponent,
    ListfeesComponent,
    ListalluserComponent,
    ListprofileComponent
  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IntersectorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
