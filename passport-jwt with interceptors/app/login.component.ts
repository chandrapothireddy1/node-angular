import { Router } from '@angular/router';
import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    user:User;
    data1:User;
    token:string;
    constructor(private cs:UserService,private router:Router) {
        this.user = new User();
     }

    ngOnInit() { }
    login(){
        this.cs.loginUser(this.user).subscribe((data)=>{
            if(data){
                this.data1 = <User>(data as any).user;
                this.token = (data as any).token;
                localStorage.setItem("id_token",this.token);
                this.router.navigate(['/userList']);
            }
        })
    }
}