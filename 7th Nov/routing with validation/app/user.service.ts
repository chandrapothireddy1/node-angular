import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';

@Injectable()
export class UserService {

    constructor(private http:HttpClient) { }

    registerUser(user:User){
        return this.http.post("/api/registerUser",user);
    }
    
}