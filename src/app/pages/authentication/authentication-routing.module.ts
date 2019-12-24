import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLockscreenComponent } from './page-lockscreen/page-lockscreen.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: PageLoginComponent,
        data: { title: 'Login' }
      },
      {
        path: 'register',
        component: PageRegisterComponent,
        data: { title: 'Register :: Diamond Bitcoin Exchange' }
      },
      {
        path: 'lockscreen',
        component: PageLockscreenComponent,
        data: { title: 'Lock Screen :: Diamond Bitcoin Exchange' }
      },
      {
        path: 'forgot-password',
        component: PageForgotPasswordComponent,
        data: { title: 'Forgot Password :: Diamond Bitcoin Exchange' }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
