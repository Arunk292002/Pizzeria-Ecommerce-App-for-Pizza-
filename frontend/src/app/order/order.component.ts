import { Component } from "@angular/core";

import { CartService } from "../cart.service";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-order",
  styleUrls: ["./order.component.css"],
  templateUrl: "./order.component.html",
})
export class OrderComponent {
  public pizzas: any;
  constructor(private ps: PizzaService, private cs: CartService) { }

  public ngOnInit() {
    this.getPizzas();
  }

  public getPizzas() {
    this.ps.getPizzaInfo().subscribe((res: any) => {
      this.pizzas = res.map((pizza: any) => ({
        ...pizza,
      }));
    });
  }

  public isInCart(pizza: any): boolean {
    return this.cs.pizzaList.some((p: any) => p.name === pizza.name);
  }

  public addToCart(pizza: any) {
    this.cs.addPizza(pizza);
  }

  public removefromCart(pizza: any) {
    this.cs.removePizza(pizza.name);
  }
}
