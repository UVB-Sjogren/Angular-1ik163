import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktaComponent } from './kontakta.component';

describe('KontaktaComponent', () => {
  let component: KontaktaComponent;
  let fixture: ComponentFixture<KontaktaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontaktaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontaktaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
