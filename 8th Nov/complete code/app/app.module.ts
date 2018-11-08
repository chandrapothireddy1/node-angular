import { LoginComponent } from './login.component';
import { FooterComponent } from './footer.component';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { RegisterComponent } from './register.component';
import { MenuComponent } from './menu';
import { UserService } from './user.service';
import { UserListComponent } from './userList.component';
import { EditUserComponent } from './editUser.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,AboutComponent,RegisterComponent,MenuComponent,FooterComponent,LoginComponent,UserListComponent,EditUserComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
