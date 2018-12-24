import { AdminHomeComponent } from "./adminhome.component";
import { HomeComponent } from "../../pages/home/components/home.component";
import { AdminContactComponent } from "./admin.contact.component";

export const adminRoutes=[
    {path:"adminHome",component:AdminHomeComponent},
    {path:"admincontact",component:AdminContactComponent},
    {path:"",component:AdminHomeComponent},
    {path:"home",component:HomeComponent}
]