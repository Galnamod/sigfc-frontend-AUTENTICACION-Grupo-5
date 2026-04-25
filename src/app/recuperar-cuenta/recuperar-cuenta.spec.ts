import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarCuenta } from './recuperar-cuenta';

describe('RecuperarCuenta', () => {
  let component: RecuperarCuenta;
  let fixture: ComponentFixture<RecuperarCuenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarCuenta],
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarCuenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
