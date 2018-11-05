import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Component({
    selector: 'userForm',
    templateUrl: 'userForm.component.html'
})

export class UserFormComponent implements OnInit {
    user:User;
    constructor(private hc:HttpClient) {
        this.user = new User();
     }

    ngOnInit() { }
    register(){
        this.hc.post("/register",this.user).subscribe((data)=>{
            console.log(data);
        })
    }
}