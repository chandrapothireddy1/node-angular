
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminRoutes } from './admin.routes';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin.home';
import { AdminLoginComponent } from './admin.login.component';
import { AdminRegisterComponent } from './admin.register.component';
import { RouterModule } from '@angular/router';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AdminService } from './admin.service';
import { AdminDashboardComponent } from './admin.dashboard.component';



@NgModule({
    imports: [CommonModule,RouterModule.forChild(AdminRoutes),FormsModule,HttpClientModule],
    exports: [],
    declarations: [AdminComponent,AdminHomeComponent,AdminLoginComponent,AdminRegisterComponent,AdminDashboardComponent],
    providers: [AdminService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AdminModule { }
