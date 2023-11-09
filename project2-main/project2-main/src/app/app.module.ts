import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AppRoutingModule } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './view/registration/registration.component';
import { AuthServiceComponent } from './view/auth-service/auth-service.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        RegistrationComponent,
        AuthServiceComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
       
    ]
})
export class AppModule { }
