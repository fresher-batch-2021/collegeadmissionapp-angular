import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbranchComponent } from '../addbranch/addbranch.component';
import { DeletebranchComponent } from '../deletebranch/deletebranch.component';
import { ListalluserComponent } from '../listalluser/listalluser.component';
import { ViewApplicationComponent } from '../view-application/view-application.component';

const routes: Routes = [
  { path: 'addbranch', component: AddbranchComponent },
  { path: 'deletebranch', component: DeletebranchComponent },
  { path: 'listalluser', component: ListalluserComponent },
  { path: 'viewapplication', component: ViewApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchRoutingModule { }
