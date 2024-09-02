import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularlifecycleComponent } from './angularlifecycle.component';

describe('AngularlifecycleComponent', () => {
  let component: AngularlifecycleComponent;
  let fixture: ComponentFixture<AngularlifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularlifecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularlifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
