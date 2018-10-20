import { Routes } from "@angular/router";

export const userRoutes: Routes = [
  
    {
        path: 'foods',
        loadChildren: './pages/foods/foods.module#FoodsModule'
      },
    
      {
        path: 'cart',
        loadChildren: './pages/cart/cart.module#CartModule'
      },
    
        
    
  ];
  