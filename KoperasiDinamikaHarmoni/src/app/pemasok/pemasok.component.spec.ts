import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemasokComponent } from './pemasok.component';

describe('PemasokComponent', () => {
  let component: PemasokComponent;
  let fixture: ComponentFixture<PemasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemasokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
