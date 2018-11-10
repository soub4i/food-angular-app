import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart-show',
  templateUrl: './cart-show.component.html',
  styleUrls: ['./cart-show.component.scss'],

})
export class CartShowComponent implements OnInit  {


  private eventsSubscription: any

  @Input('cart') cart: Array<any> = [];

  @Input() events: Observable<void>;

  constructor() { }


  ngOnInit() {


   this.eventsSubscription = this.events.subscribe(() => {

    let audio = new Audio();
    audio.src = "../../../assets/beep.wav";
    audio.load();
    audio.play();
    console.log('added to cart');

   });


  }

 
  


  update(){

    this.cart = JSON.parse(localStorage.getItem('cart'));

  }

  remove(index){

    this.cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cart));


  }
}
