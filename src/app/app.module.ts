import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/header/header.component';

import { NotificationComponent } from './shared/header/notification/notification.component';

import { UsrAccountComponent } from './shared/header/user-account/user-account.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { FooterComponent } from './shared/footer/footer.component';

import { LoginComponent } from './features/login.component';
import { HomeComponent } from './features/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdCheckboxModule, MdInputModule, MdIconModule, MdRadioModule } from '@angular/material';

import 'hammerjs';
import { AppRouterModule } from "./app.routes";
import { UserSetupComponent } from "./features/user/user-setup.component";
import { AngularDualListBoxModule } from 'angular-dual-listbox';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NotificationComponent,
    UsrAccountComponent,
    LoginComponent, HomeComponent, UserSetupComponent

  ],
  imports: [
    BrowserModule, RouterModule,
    BrowserAnimationsModule, AppRouterModule,
    MdButtonModule, MdCheckboxModule, MdInputModule, MdIconModule, MdRadioModule,
    AngularDualListBoxModule
  ],
  exports: [
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
