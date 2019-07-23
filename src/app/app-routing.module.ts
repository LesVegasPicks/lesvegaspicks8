import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  
  { path: 'authenticate', component: AuthenticationComponent },


  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'login', component: LoginComponent},

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: 'projects',
    component: ProjectsComponent
  },

  {
    path: 'project',
    redirectTo: '/projects',
    pathMatch: 'full'
  },

  {
    path: '404',
    component: ErrorComponent
  },

  {
    path: '**',
    component: ErrorComponent
  },

 
];

@NgModule({
  
  imports: [CommonModule,
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
