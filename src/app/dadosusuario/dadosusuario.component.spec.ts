import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosusuarioComponent } from './dadosusuario.component';

describe('DadosusuarioComponent', () => {
  let component: DadosusuarioComponent;
  let fixture: ComponentFixture<DadosusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosusuarioComponent]
    });
    fixture = TestBed.createComponent(DadosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
