import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthenticationGuard } from './authentication.guard';
import { DeletebranchComponent } from './deletebranch/deletebranch.component';
import { DisplaybranchComponent } from './displaybranch/displaybranch.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';
import { HomeComponent } from './home/home.component';
import { ListprofileComponent } from './listprofile/listprofile.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PersonalComponent } from './personal/personal.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personal', component: PersonalComponent, canActivate: [AuthenticationGuard] },
  { path: 'academic', component: AcademicComponent, canActivate: [AuthenticationGuard] },
  { path: 'preview', component: PreviewComponent, canActivate: [AuthenticationGuard] },
  { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthenticationGuard] },
  { path: 'listprofile', component: ListprofileComponent, canActivate: [AuthenticationGuard] },
  { path: 'adminpanel', component: AdminpanelComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'viewapplication', component: ViewApplicationComponent },
  { path: 'addbranch', component: AddbranchComponent },
  { path: 'displaybranch', component: DisplaybranchComponent },
  { path: 'deletebranch', component: DeletebranchComponent },
  // { path: 'header1', component: Header1Component },
  { path: 'edit', component: EditComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
