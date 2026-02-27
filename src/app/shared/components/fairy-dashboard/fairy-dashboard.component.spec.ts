import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairyDashboardComponent } from './fairy-dashboard.component';

describe('FairyDashboardComponent', () => {
  let component: FairyDashboardComponent;
  let fixture: ComponentFixture<FairyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
