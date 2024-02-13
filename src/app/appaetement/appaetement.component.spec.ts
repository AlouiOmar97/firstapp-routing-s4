import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppaetementComponent } from './appaetement.component';

describe('AppaetementComponent', () => {
  let component: AppaetementComponent;
  let fixture: ComponentFixture<AppaetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppaetementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppaetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
