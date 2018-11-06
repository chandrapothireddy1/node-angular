import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { RegisterComponent } from "./register.component";

export const routes = [
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"register",component:RegisterComponent},
    {path:"",component:HomeComponent}
]