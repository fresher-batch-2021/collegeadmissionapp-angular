import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { PersonalComponent } from '../personal/personal.component';
import { PreviewComponent } from '../preview/preview.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcademicComponent } from '../academic/academic.component';
import { ListprofileComponent } from '../listprofile/listprofile.component';
import { ErrorInterceptor } from '../error.interceptor';


@NgModule({
  declarations: [
    PersonalComponent,
    AcademicComponent,
    PreviewComponent,
    ListprofileComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
export class ApplicationModule { }
