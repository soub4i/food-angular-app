import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodRoutingModule } from './food-routting.module';
import { FoodIndexComponent } from './food-index/food-index.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { FoodsService } from 'src/app/services/foods.service';
import { CartShowComponent } from '../cart/cart-show/cart-show.component';

@NgModule({
  imports: [
    CommonModule,
    FoodRoutingModule,
    
  ],
  declarations: [FoodListComponent, FoodDetailComponent,FoodIndexComponent,CartShowComponent],
  providers: [ FoodsService],

})
export class FoodsModule { }
