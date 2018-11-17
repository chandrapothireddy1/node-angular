import { AdminHomeComponent } from "./admin.home";
import { AdminLoginComponent } from "./admin.login.component";
import { AdminRegisterComponent } from "./admin.register.component";
import { AdminDashboardComponent } from "./admin.dashboard.component";

export const AdminRoutes = [
    {path:"admin/home",component:AdminHomeComponent},
    {path:"admin/login",component:AdminLoginComponent},
    {path:"admin/register",component:AdminRegisterComponent},
    {path:"admin/dashboard",component:AdminDashboardComponent},
]
