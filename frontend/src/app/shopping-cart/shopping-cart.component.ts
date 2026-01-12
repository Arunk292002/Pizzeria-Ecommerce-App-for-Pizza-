import { Component } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-shopping-cart",
  styleUrls: ["./shopping-cart.component.css"],
  templateUrl: "./shopping-cart.component.html",
})
export class ShoppingCartComponent {
  public igList: any = [];
  public pzaList: any = [];

  public pizzaCost = 0;
  public ingredientsCost = 0;

  public totalCost = 0;

  public isPaid = false;
  constructor( private cs: CartService ) {
  }
  public ngOnInit() {
    this.loadData();
    this.updateTotal();
  }
  public loadData() {
    this.igList = this.cs.ingridientList;
    this.pzaList = this.cs.pizzaList;
  }
  public igCost() {
    this.ingredientsCost = this.igList.reduce(
      ( tot: any, item: any ) => tot + Number(item.price), 0 );
  }
  public decrementQty( pizza: any ) {
    pizza.qty--;
    if ( pizza.qty === 0 ) {
      this.pzaList = this.pzaList.filter(( p: any ) => p.name !== pizza.name);
      this.cs.pizzaList = this.pzaList;
      this.cs.cartNo -= 1;
      this.cs.saveToStorage();
    }
    this.updateTotal();
    this.cs.saveToStorage();
  }

  public incrementQty(pizza: any) {
    pizza.qty++;
    this.updateTotal();
    this.cs.saveToStorage();
  }

  public pzaCost() {
    this.pizzaCost = this.pzaList.reduce(
      ( tot: any, item: any ) => tot + (item.price * item.qty)
    , 0 );
  }

  public updateTotal() {
    this.igCost();
    this.pzaCost();
    this.totalCost = this.pizzaCost + this.ingredientsCost;
  }

  public removePizza( name: string ) {
    this.cs.removePizza(name);
    this.loadData();
    this.pzaCost();
    this.updateTotal();
  }
  public payAmount() {
    this.isPaid = true;
    this.cs.cartNo = 0;
    this.clearCart();
  }

  public clearCart() {
    this.cs.pizzaList = [];
    this.cs.ingridientList = [];
    this.pzaList = [];
    this.igList = [];
    this.cs.cartNo = 0;
    this.cs.saveToStorage();
  }
}
