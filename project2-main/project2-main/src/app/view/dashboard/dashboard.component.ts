import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  [x: string]: any;



  constructor(private routes: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.routes.queryParams.subscribe(params =>{
      console.log(params['username']);
      console.log(params['password']);
    })
  }
  userLogin(){
    //console.log("userLogin Called..");
    // const queryParams: Params = {'username': 'karthi',password:'karthi@123'};
    // const queryParams: Params = {'username': 'karthi',password:'karthi@123'};
    this['router'].navigate(['/dashboard'], {queryParams: {'username': 'karthi',password:'karthi@123'}});

  }
}
