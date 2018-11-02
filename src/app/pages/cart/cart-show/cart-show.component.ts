import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-show',
  templateUrl: './cart-show.component.html',
  styleUrls: ['./cart-show.component.scss']
})
export class CartShowComponent implements OnInit {


  @Input('cart') cart: Array<any> = [];


  constructor() { }

  ngOnInit() {

    let cart = JSON.parse(localStorage.getItem('cart'));

    this.cart = cart || [];



  }

  remove(index){

    this.cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cart));


  }
}
