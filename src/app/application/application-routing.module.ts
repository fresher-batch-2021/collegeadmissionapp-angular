import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from '../academic/academic.component';
import { AuthenticationGuard } from '../authentication.guard';
import { ListprofileComponent } from '../listprofile/listprofile.component';
import { PersonalComponent } from '../personal/personal.component';
import { PreviewComponent } from '../preview/preview.component';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  { path: 'personal', component: PersonalComponent, canActivate: [AuthenticationGuard, RoleGuard] },
  { path: 'academic', component: AcademicComponent, canActivate: [AuthenticationGuard, RoleGuard] },
  { path: 'preview', component: PreviewComponent, canActivate: [AuthenticationGuard, RoleGuard] },
  { path: 'listprofile', component: ListprofileComponent, canActivate: [AuthenticationGuard, RoleGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
