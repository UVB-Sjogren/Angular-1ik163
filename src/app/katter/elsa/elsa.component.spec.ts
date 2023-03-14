import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsaComponent } from './elsa.component';

describe('ElsaComponent', () => {
  let component: ElsaComponent;
  let fixture: ComponentFixture<ElsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElsaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
