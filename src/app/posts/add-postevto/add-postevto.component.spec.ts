import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostevtoComponent } from './add-postevto.component';

describe('AddPostevtoComponent', () => {
  let component: AddPostevtoComponent;
  let fixture: ComponentFixture<AddPostevtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPostevtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostevtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
