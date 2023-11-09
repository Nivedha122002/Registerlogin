
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { RegistrationComponent } from './view/registration/registration.component';
import { AuthServiceComponent } from './view/auth-service/auth-service.component';
export const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: 'authservicecomponent',
    component: AuthServiceComponent
  },
  { 
    path: '', redirectTo: '/login', pathMatch: 'full'
   }
   

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  static forRoot(RoutingModule: typeof AppRoutingModule): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
