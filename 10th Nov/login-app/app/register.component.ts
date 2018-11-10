import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
@Component({
    selector: "register",
    templateUrl: "register.component.html"
})
export class RegisterComponent {
    user: User;
    access:boolean = true;
    constructor(private us: UserService,private router:Router) {
        this.user = new User();
    }
    register() {
        this.access = false;
        this.us.registerUser(this.user).subscribe((data) => {
            if (data) {
                alert("data inserted successfully");
                this.router.navigate(['/login']);
            }
        })

    }
}