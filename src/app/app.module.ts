import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsModule } from './pages/foods/foods.module';
import { AuthModule } from './pages/auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';

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
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
