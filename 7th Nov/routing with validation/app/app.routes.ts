import { Component } from '@angular/core';
import { LoginComponent } from "./login.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { RegisterComponent } from "./register.component";

export const routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"",component:HomeComponent}
]