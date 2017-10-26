import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from './user.service';
import {AuthGuard} from './auth.guard';

import {NgxPaginationModule} from 'ngx-pagination';
import { EmployeesComponent } from './employees/employees.component';

import { DataTablesModule } from 'angular-datatables';
import { StudentListComponent } from './student-list/student-list.component';
import {HttpModule} from '@angular/http';
import {StudentService} from './student.service';

const appRoutes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'employees',
    canActivate: [AuthGuard],
    component: EmployeesComponent
  },
  {
    path: 'student-list',
    canActivate: [AuthGuard],
    component: StudentListComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    EmployeesComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    DataTablesModule,
    HttpModule
  ],
  providers: [UserService, AuthGuard, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
