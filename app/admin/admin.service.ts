import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { User } from '../user';

@Injectable()
export class AdminService {

    constructor(private http:HttpClient) { }



    registerAdmin(user:User){
        return this.http.post("/api/registerAdmin",user);
    }

    loginAdmin(user:User){
        return this.http.post("/api/loginAdmin",user);
    }
    listUsersAdmin(){
        return this.http.get("/api/getUsersadmin");
    }

    listUsersPage(page:number,perpage:number){
        return this.http.get("/api/listusersPage/"+page+'/'+perpage);
    }


    logoutUser(){
        return this.http.get("/api/logout");
    }


}