import { AdminguardGuard } from './services/adminguard.guard';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/login.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin/admin.component';

const routes: Routes = [
  {
    path:"admin", component:AdminComponent,children:[
      {path:"login",component:LoginComponent},
      {path:"dashboard",component:AdminDashboardComponent,canActivate:[AdminguardGuard]}
    ]
  },
  {
    path:'', component:LoginComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
