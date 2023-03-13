import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatterComponent } from './katter.component';

describe('KatterComponent', () => {
  let component: KatterComponent;
  let fixture: ComponentFixture<KatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
