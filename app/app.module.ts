import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { ClientsComponent } from './clients.component';
import { LoginComponent } from './login.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,ClientsComponent,LoginComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
