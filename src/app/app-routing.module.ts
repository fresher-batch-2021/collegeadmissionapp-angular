import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'contentprojection', component: ContentprojectionComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  },

  {
    path: 'branch',
    loadChildren: () => import('./branch/branch.module').then(m => m.BranchModule)
  },

  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
