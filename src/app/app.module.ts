import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './userpages/new-user/new-user.component';
import { UserListComponent } from './userpages/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes=[
  {
    path:'newuser',
    component:NewUserComponent
  },
  {
    path:'newuser/:index',
    component:NewUserComponent
  },
  {
    path:'userslist',
    component:UserListComponent
  },
  {
    path:'**',
    component:NewUserComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
