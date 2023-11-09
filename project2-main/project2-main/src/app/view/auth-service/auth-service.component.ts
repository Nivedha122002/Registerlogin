import { Component } from '@angular/core';
import { Injectable } from '@angular/core'; 
 
@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class AuthServiceComponent {
  validUsers:any = {
    'karvatech@email.com': 'sample@123',
    // Add more email-password pairs as needed
  };
  login(email: string, password: string): boolean {
    return this.validUsers[email] === password;
  }
  
  form(email: string, password: string): boolean {
    if (this.validUsers[email]) {
      this.validUsers[email] = password;
      return true;
    }
    return false;
  }
}

  

  