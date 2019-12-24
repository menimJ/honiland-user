import { NgModule } from '@angular/core';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { PageRegisterComponent } from './page-register/page-register.component';
import { PageLockscreenComponent } from './page-lockscreen/page-lockscreen.component';
import { PageForgotPasswordComponent } from './page-forgot-password/page-forgot-password.component';
import { CommonModule } from '@angular/common';
import { PagesModule } from '../pages.module';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CommonElementsModule } from '../../common-elements/common-elements.module';

@NgModule({
  declarations: [
    PageLoginComponent,
    AuthenticationComponent,
    PageRegisterComponent,
    PageLockscreenComponent,
    PageForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    PagesModule,
    FormsModule,
    AuthenticationRoutingModule,
    CommonElementsModule
  ]
})
export class AuthenticationModule {}
