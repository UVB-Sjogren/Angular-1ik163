import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuvaComponent } from './tuva.component';

describe('TuvaComponent', () => {
  let component: TuvaComponent;
  let fixture: ComponentFixture<TuvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuvaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
