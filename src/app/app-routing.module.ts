import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestLayoutComponent } from './layouts/guest-layout/guest-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { userRoutes } from './routes/user-layout.routes';
import { guestRoutes } from './routes/guest-layout.routes';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [

  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

  {
    path: '',
    component: GuestLayoutComponent,
    children: guestRoutes,
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: userRoutes,
    canActivate: [AuthGuardService] 

  },
  {
    path: '**',
    redirectTo: '/auth/login'
 },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false,useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
