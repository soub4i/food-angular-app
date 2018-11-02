import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodIndexComponent } from './food-index/food-index.component';



const routes: Routes = [
  
    {
        path: 'list',
        component: FoodListComponent
      },
      {
        path: '',
        component: FoodIndexComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
