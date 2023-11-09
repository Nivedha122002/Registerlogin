import { ComponentFixture, TestBed } from '@angular/core/testing';
'./login.component';
// import { ActivatedRoute, Router } from '@angular/router';
import {HttpTestingController } from '@angular/common/http/testing';


import { LoginComponent } from './login.component';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
