
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceComponent } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

 
  saveDataToLocalStorage(): void {
    // Convert data to JSON string and store it in local storage
    localStorage.setItem('name', 'nivedha');

  }

  form: FormGroup = new FormGroup({

    firstName: new FormControl(''),
    lastName: new FormControl(''),
    newpassword: new FormControl(''),
    confirmpassword: new FormControl(''),
    email: new FormControl(''),
    
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private authServiceComponent: AuthServiceComponent) {

    console.log("Constructor Called..");
  }

 
 
 

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {

        email: ['', [Validators.required, Validators.email]],
        newpassword: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],],

        confirmpassword: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ]

        ],
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],

      }
    )
  }

  userRegistration() {
    console.log("userRegistration Called..");
    
    console.log(this.form.value.firstName);
    console.log(this.form.value.lastName);
    console.log(this.form.value.newpassword);
    console.log(this.form.value.confirmpassword);
    
    console.log(this.form.value.email);
    console.log(this.form.get("this.firstName"));
    // const queryParams: Params = {'username': 'karthi',password:'karthi@123'};
    //this.router.navigate(['/dashboard'], {queryParams: {'username': 'karthi',password:'karthi@123'}});

  }
 
}

