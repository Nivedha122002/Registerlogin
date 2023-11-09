import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  validUsers = {
    'karvatech@email.com': 'sample@123',
  
  };


  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router: Router, private formBuilder: FormBuilder) {

    console.log("Constructor Called..");
  }
  login() {

      console.log(this.form.value.email);
      console.log(this.form.value.password);
   
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
      email: [''],
        password: ['']
      },
    );

  }
  
  userLogin(): void {
    console.log("userLogin Called..");
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    
  }
}



