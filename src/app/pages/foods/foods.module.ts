import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FoodListComponent, FoodDetailComponent]
})
export class FoodsModule { }
