import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { AddfeesComponent } from './addfees/addfees.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthenticationGuard } from './authentication.guard';
import { DeletebranchComponent } from './deletebranch/deletebranch.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ListalluserComponent } from './listalluser/listalluser.component';
import { ListfeesComponent } from './listfees/listfees.component';
import { ListprofileComponent } from './listprofile/listprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { PersonalComponent } from './personal/personal.component';
import { PreviewComponent } from './preview/preview.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewApplicationComponent } from './view-application/view-application.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthenticationGuard] },
  { path: 'academic', component: AcademicComponent, canActivate: [AuthenticationGuard] },
  { path: 'preview', component: PreviewComponent, canActivate: [AuthenticationGuard] },
  { path: 'listprofile', component: ListprofileComponent, canActivate: [AuthenticationGuard] },
  { path: 'userprofile', component: UserprofileComponent,canActivate: [AuthenticationGuard] },
  { path: 'adminpanel', component: AdminpanelComponent },
  { path: 'viewapplication', component: ViewApplicationComponent },
  { path: 'addbranch', component: AddbranchComponent },
  { path: 'deletebranch', component: DeletebranchComponent },
  
  { path: 'addfees', component: AddfeesComponent },
  { path: 'listfees', component: ListfeesComponent },
  { path: 'listalluser', component: ListalluserComponent },
  { path: 'edit', component: EditComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
