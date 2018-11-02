import { Component, OnInit } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

 foods: Array<any> = []
 cart: Array<any> = []
  constructor(private foodService:FoodsService) { }

  ngOnInit() {

    let cart = JSON.parse(localStorage.getItem('cart'));

    this.cart = cart || [];


    this.foodService.getAll().subscribe(res => {


      let data =  JSON.parse(res._body);
      this.foods =  data.food;


    }, err => console.log(err));

  }

  addToCart(index){

    console.log(index);

    this.cart.push(this.foods[index]);

    localStorage.setItem('cart', JSON.stringify(this.cart));

    console.log(this.cart);

  }


}
