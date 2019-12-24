import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserFormComponent } from './users/user-form/user-form.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PageBlankComponent } from './page-blank/page-blank.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from '../layout/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { PageLoaderComponent } from '../layout/page-loader/page-loader.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserProfileComponent } from './users/user-profile/user-profile.component';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    PageLoaderComponent,
    PageBlankComponent,

    UsersComponent,
    PagesComponent,

    DashboardComponent,
    UserProfileComponent,
    UserFormComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    PageLoaderComponent,
    RouterModule,
    NgbModule
  ]
})
export class PagesModule {}
