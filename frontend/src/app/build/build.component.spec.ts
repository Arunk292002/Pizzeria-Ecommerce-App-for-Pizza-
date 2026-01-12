import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PizzaService } from "../pizza.service";
import { BuildComponent } from "./build.component";

describe("BuildComponent", () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildComponent],
      imports: [HttpClientTestingModule],
      providers: [PizzaService],
    });
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
