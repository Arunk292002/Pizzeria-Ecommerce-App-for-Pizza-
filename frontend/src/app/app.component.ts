import { Component } from "@angular/core";
import { CartService } from "./cart.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  templateUrl: "./app.component.html",
})
export class AppComponent {
  public title = "frontend";
  constructor(private cs: CartService ) {
  }
  get cartLength() {
    return this.cs.cartNo;
  }
}
