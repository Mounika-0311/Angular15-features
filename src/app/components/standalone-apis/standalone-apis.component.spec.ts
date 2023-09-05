import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneAPIsComponent } from './standalone-apis.component';

describe('StandaloneAPIsComponent', () => {
  let component: StandaloneAPIsComponent;
  let fixture: ComponentFixture<StandaloneAPIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandaloneAPIsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneAPIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
