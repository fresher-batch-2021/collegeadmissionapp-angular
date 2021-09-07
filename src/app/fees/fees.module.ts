import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { AddfeesComponent } from '../addfees/addfees.component';
import { ListfeesComponent } from '../listfees/listfees.component';
import { EditComponent } from '../edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AddfeesComponent,
    ListfeesComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FeesModule { }
