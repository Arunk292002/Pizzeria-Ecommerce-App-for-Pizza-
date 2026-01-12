import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { PizzaService } from "../pizza.service";

describe("PizzaService", () => {
  let service: PizzaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PizzaService],
    });

    service = TestBed.inject(PizzaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should fetch pizzas", () => {
    service.getPizzaInfo().subscribe( (pizzas) => {
      expect(pizzas.length).toBe(2);
      expect(pizzas[0].name).toBe("Margherita");
    });

    const req = httpMock.expectOne("http://localhost:3000/api/pizzas");
    expect(req.request.method).toBe("GET");

    req.flush([
      { name: "Margherita" },
      { name: "Pepperoni" },
    ]);
  });
});
