import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http:HttpClient) { }

    registerUser(user:User){
        return this.http.post("/api/registerUser",user);
    }
    listUsers():Observable<User[]>{
        return this.http.get<User[]>("/api/listusers");
    }
    editUser(id:number){
        return this.http.get("/api/editUser/"+id);
    }
    updateUser(user:User){
        return this.http.put("/api/updateUser",user);
    }
    deleteUser(id:number){
        return this.http.delete("/api/deleteUser/"+id);
    }
    loginUser(user:User){
        return this.http.post("/api/loginUser",user);
    }
    
}