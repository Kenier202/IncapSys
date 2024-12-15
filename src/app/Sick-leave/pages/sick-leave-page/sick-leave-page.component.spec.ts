import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SickLeavePageComponent } from './sick-leave-page.component';

describe('SickLeavePageComponent', () => {
  let component: SickLeavePageComponent;
  let fixture: ComponentFixture<SickLeavePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SickLeavePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SickLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
