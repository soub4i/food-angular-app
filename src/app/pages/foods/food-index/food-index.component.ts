import { Component, OnInit, Input } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';


@Component({
  selector: 'app-food-index',
  templateUrl: './food-index.component.html',
  styleUrls: ['./food-index.component.scss']
})
export class FoodIndexComponent implements OnInit {



  constructor(private foodService:FoodsService) { }

  ngOnInit() {

  }

 
}
