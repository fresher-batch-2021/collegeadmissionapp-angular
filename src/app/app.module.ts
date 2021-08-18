import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AcademicComponent } from './academic/academic.component';
import { FormsModule } from '@angular/forms';
import { ProgramComponent } from './program/program.component';
import { PersonalComponent } from './personal/personal.component';
import { HttpClientModule } from '@angular/common/http';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { ListApplicationComponent } from './list-application/list-application.component';
import { EditComponent } from './edit/edit.component';
import { AdminComponent } from './admin/admin.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

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
    ViewApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
