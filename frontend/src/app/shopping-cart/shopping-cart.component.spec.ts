import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShoppingCartComponent } from "./shopping-cart.component";

describe("ShoppingCartComponent", () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingCartComponent],
    });
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should calculate total cost correctly", () => {
  component.igList = [
    { name:'Cheese',price: 200 },
    { name:'Black Olives',price: 300 },
  ];
  component.igCost();
  expect(component.ingredientsCost).toBe(500);
});
it("should display NaN", () => {
  component.pzaList = [
    { price: 200, qty:1 },
    { price: 300, qty:1 },
  ];

  component.pzaCost();
  expect(component.pizzaCost).toBe(500);
});
it('should remove from cart', ()=>{
  component.pzaList = [
    { name:'Cheese Pizza', price: 200, qty:1 },
    { name: 'Panneer Pizza', price: 300, qty:1 },
  ];
  component.clearCart();
  expect(component.pzaList).toEqual([]);
})

});
