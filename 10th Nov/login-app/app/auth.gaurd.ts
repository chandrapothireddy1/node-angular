import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private router:Router){}
    canActivate():boolean{
        var data = localStorage.getItem("user");
        if(data){
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
    }

}