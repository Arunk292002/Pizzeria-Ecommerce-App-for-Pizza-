import { Component } from "@angular/core";
import { PizzaService } from "../pizza.service";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.css"],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  constructor( private ps: PizzaService ) {}
}
