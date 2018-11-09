import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart-show',
  templateUrl: './cart-show.component.html',
  styleUrls: ['./cart-show.component.scss'],

})
export class CartShowComponent implements OnInit ,OnChanges {


  private eventsSubscription: any
  @Input('cart') cart: Array<any> = [];

  @Input() events: Observable<void>;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    
    // changes.prop contains the old and the new value...

    this.cart = JSON.parse(localStorage.getItem('cart'));
    
  }

  ngOnInit() {


   this.eventsSubscription = this.events.subscribe(() => console.log('notified') );


  }

 
  


  update(){

    this.cart = JSON.parse(localStorage.getItem('cart'));

  }

  remove(index){

    this.cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(this.cart));


  }
}
