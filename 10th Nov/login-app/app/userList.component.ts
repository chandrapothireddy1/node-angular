import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "./user";
import { Router } from "@angular/router";

@Component({
    selector:"userList",
    templateUrl:"./userList.component.html",
    styleUrls:['./userList.component.css']
})
export class UserListComponent{
    users:User
    constructor(private cs:UserService,private router:Router){
        this.cs.listUsers().subscribe((data)=>{
            if(data){
                this.users = <User>data;
            }
        })
    }
    delete(userId){
        this.cs.deleteUser(userId).subscribe((data)=>{
            if(data){
                this.cs.listUsers().subscribe((data)=>{
                    if(data){
                        this.users = <User>data;
                    }
                })
            }
        })
    }
    logout(){
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
    }
}