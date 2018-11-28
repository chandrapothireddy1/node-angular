import { CanDeactivate } from '@angular/router';
import { Component } from '@angular/core';
import { LoginComponent } from "./login.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { RegisterComponent } from "./register.component";
import { UserListComponent } from './userList.component';
import { EditUserComponent } from './editUser.component';
import { ProtectDataGaurd } from './protectData.gaurd';
import { AuthGaurd } from './auth.gaurd';

export const routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"register",component:RegisterComponent,canDeactivate:[ProtectDataGaurd]},
    {path:"login",component:LoginComponent},
    {path:"userList",component:UserListComponent,canActivate:[AuthGaurd]},
    {path:"edituser/:userId",component:EditUserComponent,canActivate:[AuthGaurd]},
    {path:"",component:HomeComponent}
]