import { ClientsComponent } from './clients.component';
import { HomeComponent } from "./home.component";
import { ContactComponent } from "./contact.component";
import { LoginComponent } from './login.component';

export const routes=[
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"clients",component:ClientsComponent},
    {path:"login",component:LoginComponent},
    {path:"",component:HomeComponent}
]