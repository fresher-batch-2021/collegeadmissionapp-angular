import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AuthenticationGuard } from '../authentication.guard';
import { DisplaybranchComponent } from '../displaybranch/displaybranch.component';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { ViewfeesComponent } from '../viewfees/viewfees.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'viewfees', component: ViewfeesComponent },
  { path: 'displaybranch', component: DisplaybranchComponent },
  { path: 'userprofile', component: UserprofileComponent, canActivate: [AuthenticationGuard] }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
