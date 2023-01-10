import { AdminComponent } from './component/admin/admin/admin.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './component/login.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AdminAuthComponent } from './component/admin/admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './component/admin/admin-dashboard/admin-dashboard.component';
import { FacultyDataComponent } from './component/admin/faculty-data/faculty-data.component';
import { FacultyTraningComponent } from './component/admin/faculty-traning/faculty-traning.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminAuthComponent,
    AdminComponent,
    AdminDashboardComponent,
    FacultyDataComponent,
    FacultyTraningComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
