import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Admin } from './admin';
import { AdminService } from './admin.service';

@Component({
    selector: 'admin-register',
    templateUrl:'./admin.register.component.html'
})

export class AdminRegisterComponent implements OnInit {
    admin:Admin;
    constructor(private ad:AdminService,private router:Router) {
        this.admin = new Admin();
     }

    ngOnInit() { }

    register(){
        
    }


}