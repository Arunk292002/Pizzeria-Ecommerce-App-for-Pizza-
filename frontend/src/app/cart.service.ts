import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartService {
  public ingridientList: { name: string; price: number }[] = [];
  public pizzaList: { name: string; type: string; price: number; image: string; qty: number }[] = [];

  public cartNo = 0;

  constructor() {
    this.loadStorage();
    window.addEventListener("storage", () => {
      this.loadStorage();
    });
  }

  public saveToStorage() {
    localStorage.setItem("pizzas", JSON.stringify(this.pizzaList));
    localStorage.setItem("ingredients", JSON.stringify(this.ingridientList));
    localStorage.setItem("cartNo", JSON.stringify(this.pizzaList.length));
  }

  public loadStorage() {
    const pizzas = localStorage.getItem("pizzas");
    const ingredients = localStorage.getItem("ingredients");
    const cart = localStorage.getItem("cartNo");

    this.pizzaList = pizzas ? JSON.parse(pizzas) : [];
    this.ingridientList = ingredients ? JSON.parse(ingredients) : [];
    this.cartNo = cart ? Number(JSON.parse(cart)) : 0;
  }

  public addIngredient(ig: { name: string; price: number } |{ name: string; price: number }[]) {
    if (Array.isArray(ig)) {
      ig.forEach((item) => {
        if (!this.ingridientList.some( (p) => p.name === item.name)) {
          this.ingridientList.push(item);
        }
      });
    } else {
      if (!this.ingridientList.some( (p) => p.name === ig.name)) {
        this.ingridientList.push(ig);
      }
    }
    this.saveToStorage();
  }

  public addPizza(pza: { name: string; type: string; price: number; image: string; qty?: number }) {
    const exists = this.pizzaList.some( (p) => p.name === pza.name);
    if (!exists) {
      this.pizzaList.push({ ...pza, qty: 1 });
      this.cartNo = this.pizzaList.length;
      this.saveToStorage();
    }
  }

  public removePizza(name: string) {
    this.pizzaList = this.pizzaList.filter( (item) => item.name !== name);
    this.cartNo = this.pizzaList.length;
    this.saveToStorage();
  }
}
