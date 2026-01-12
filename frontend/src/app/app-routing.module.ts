import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BuildComponent } from "./build/build.component";
import { HomeComponent } from "./home/home.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { OrderComponent } from "./order/order.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

const routes: Routes = [
  {path: "" , component : HomeComponent},
  {path: "order" , component : OrderComponent},
  {path: "build", component : BuildComponent},
  {path: "cart", component : ShoppingCartComponent},
  {path: "**", component : NotfoundComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
