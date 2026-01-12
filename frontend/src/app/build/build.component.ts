import { Component } from "@angular/core";

import { CartService } from "../cart.service";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-build",
  styleUrls: ["./build.component.css"],
  templateUrl: "./build.component.html",
})
export class BuildComponent {
  public ingridents: any = [];
  public totalCost = 0;

  constructor(private ps: PizzaService, private cs: CartService) {}

  public ngOnInit() {
    this.getIngridients();
    this.updateTotal();
  }

  public getIngridients() {
    this.ps.getIngridientsInfo().subscribe((res) => {
      this.ingridents = res;
    });
  }

  public isChecked(name: string): boolean {
    return this.cs.ingridientList.some((i) => i.name === name);
  }

  public addCost(checked: boolean, price: number, name: string) {
    if (checked) {
      const exists = this.cs.ingridientList.some((i) => i.name === name);
      if (!exists) {
        this.cs.ingridientList.push({ name, price });
      }
    } else {
      this.cs.ingridientList =
        this.cs.ingridientList.filter((i) => i.name !== name);
    }

    this.cs.saveToStorage();
    this.updateTotal();
  }

  public updateTotal() {
    this.totalCost = this.cs.ingridientList.reduce(
      (sum, item) => sum + item.price,
      0,
    );
  }

  public sendIg() {
    this.cs.saveToStorage();
  }
}
