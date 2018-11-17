import { Router } from '@angular/router';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

import { AdminService } from './admin.service';

@Component({
    selector: 'admin-login',
    templateUrl:'admin-login.component.html'
})

export class AdminLoginComponent implements OnInit {
    user:User;
    constructor(private ad:AdminService,private router:Router) { 
        this.user = new User();
    }

    ngOnInit() { }
    login(){
        this.ad.loginAdmin(this.user).subscribe((data)=>{
            if(data){
                this.router.navigate(['/admin/dashboard']);
            }
        })
    }
    
}