import { Component } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "./user";

@Component({
    selector:"userList",
    templateUrl:"./userList.component.html",
    styleUrls:['./userList.component.css']
})
export class UserListComponent{
    users:User
    constructor(private cs:UserService){
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
}