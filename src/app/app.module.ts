import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { VerBoardComponent } from './ver-board/ver-board.component';
import { DoughnutCanvComponent } from './doughnut-canv/doughnut-canv.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'boards'}
  },
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'User List' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'User Details' }
  },
  /*
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: { title: 'Create User' }
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent,
    data: { title: 'Edit User' }
  },
  */
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    VerBoardComponent,
    DoughnutCanvComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
