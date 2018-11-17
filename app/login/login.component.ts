import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { User } from "../user";
import { UserService } from "../common/user.service";
@Component({
    selector:"login",
    templateUrl:"./login.component.html",
    styleUrls: ['../app.component.css']
})
export class LoginComponent{
    user:User;
    constructor(private us:UserService,private router:Router){
        this.user = new User();
    }
    login(){
        
        this.us.loginUser(this.user).subscribe((data)=>{
            if(data){
                this.router.navigate(['/dashboard']);
            }
        })
    }
}