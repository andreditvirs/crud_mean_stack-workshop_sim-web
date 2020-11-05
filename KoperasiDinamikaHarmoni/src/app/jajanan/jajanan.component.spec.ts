import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JajananComponent } from './jajanan.component';

describe('JajananComponent', () => {
  let component: JajananComponent;
  let fixture: ComponentFixture<JajananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JajananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JajananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
