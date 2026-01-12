import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BuildComponent } from "./build/build.component";
import { HomeComponent } from "./home/home.component";
import { JoinPipe } from "./join.pipe";
import { NotfoundComponent } from "./notfound/notfound.component";
import { OrderComponent } from "./order/order.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BuildComponent,
    HomeComponent,
    JoinPipe,
    NotfoundComponent,
    OrderComponent,
    ShoppingCartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule { }
