import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";
@Component({
    selector: "register",
    templateUrl: "register.component.html"
})
export class RegisterComponent {
    user: User;
    constructor(private us: UserService) {
        this.user = new User();
    }
    register() {
        this.us.registerUser(this.user).subscribe((data) => {
            if (data) {
                alert("data inserted successfully");
            }
        })

    }
}