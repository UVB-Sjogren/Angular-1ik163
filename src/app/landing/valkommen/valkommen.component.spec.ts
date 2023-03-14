import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValkommenComponent } from './valkommen.component';

describe('ValkommenComponent', () => {
  let component: ValkommenComponent;
  let fixture: ComponentFixture<ValkommenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValkommenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValkommenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
