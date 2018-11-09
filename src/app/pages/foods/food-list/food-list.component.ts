import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter  } from '@angular/core';
import { FoodsService } from 'src/app/services/foods.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default


})
export class FoodListComponent implements OnInit  {

 foods: Array<any> = [];
 cart: Array<any> = [];

 private eventsSubject: Subject<void> = new Subject<void>();

 

  constructor(private foodService:FoodsService) { }

 

  ngOnInit() {

    let cart = JSON.parse(localStorage.getItem('cart'));

    this.cart = cart || [];


    this.foodService.getAll().subscribe(res => {



      let data =  JSON.parse(res._body);

      console.log(data)


      this.foods =  data.food;


    }, err => console.log(err));

  }

  addToCart(index){

    console.log(index);

    this.cart.push(this.foods[index]);

    localStorage.setItem('cart', JSON.stringify(this.cart));

    this.eventsSubject.next()

  }


}
