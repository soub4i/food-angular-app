import { Routes } from "@angular/router";

export const guestRoutes: Routes = [
  
    {
        path: 'auth',
        loadChildren: './pages/auth/auth.module#AuthModule'
      },

        
    
  ];
  