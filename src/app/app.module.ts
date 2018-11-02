import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsModule } from './pages/foods/foods.module';
import { AuthModule } from './pages/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { FoodsService } from './services/foods.service';
import { ApiService } from './services/api.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserLayoutComponent,
    GuestLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FoodsModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [HttpClientModule, AuthenticationService,AuthGuardService,ApiService, FoodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
