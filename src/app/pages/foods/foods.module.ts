import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodRoutingModule } from './food-routting.module';

@NgModule({
  imports: [
    CommonModule,
    FoodRoutingModule
  ],
  declarations: [FoodListComponent, FoodDetailComponent]
})
export class FoodsModule { }
