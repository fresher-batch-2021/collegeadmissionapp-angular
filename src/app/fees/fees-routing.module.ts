import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfeesComponent } from '../addfees/addfees.component';
import { EditComponent } from '../edit/edit.component';
import { ListfeesComponent } from '../listfees/listfees.component';

const routes: Routes = [
  { path: 'addfees', component: AddfeesComponent },
  { path: 'listfees', component: ListfeesComponent },
  { path: 'edit/:id/:rev', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
