import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PizzaService {

  private URL = "http://localhost:3000/api";

  constructor( private http: HttpClient ) { }

  public getPizzaInfo() {
    return this.http.get<any[]>(`${this.URL}/pizzas`);
  }

  public getIngridientsInfo() {
    return this.http.get<any[]>(`${this.URL}/ingridients`);
  }
}
