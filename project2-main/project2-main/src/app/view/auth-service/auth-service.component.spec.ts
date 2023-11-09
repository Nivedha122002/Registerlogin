import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthServiceComponent } from './auth-service.component';

describe('AuthServiceComponent', () => {
  let component: AuthServiceComponent;
  let fixture: ComponentFixture<AuthServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthServiceComponent]
    });
    fixture = TestBed.createComponent(AuthServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
