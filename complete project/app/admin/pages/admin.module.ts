import { AdminComponent } from './admin.component';
import { adminRoutes } from './admin.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminHomeComponent } from './adminhome.component';
import { AdminMenuComponent } from './admin.menu.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminContactComponent } from './admin.contact.component';
@NgModule({
    declarations:[AdminHomeComponent,AdminMenuComponent,AdminComponent,AdminContactComponent],
    imports:[CommonModule,BrowserModule,RouterModule.forChild(adminRoutes)],
    providers:[],
    exports:[]
})
export class AdminModule{
    
}