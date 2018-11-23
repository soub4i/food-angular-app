import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-cart-show",
  templateUrl: "./cart-show.component.html",
  styleUrls: ["./cart-show.component.scss"]
})
export class CartShowComponent implements OnInit {
  @Input("cart") cart;

  constructor() {}

  ngOnInit() {
    console.log(this.cart);
  }

  update() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  }

  remove(index) {
    this.cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
