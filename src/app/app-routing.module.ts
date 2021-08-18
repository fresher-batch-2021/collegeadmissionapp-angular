import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicComponent } from './academic/academic.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { PreviewComponent } from './preview/preview.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramComponent } from './program/program.component';
import { RegisterComponent } from './register/register.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'login', component: LoginComponent },
  {path:'viewApplication',component:ViewApplicationComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'preview', component: PreviewComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
