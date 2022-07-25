import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerdeDeComponent } from './acerde-de.component';

describe('AcerdeDeComponent', () => {
  let component: AcerdeDeComponent;
  let fixture: ComponentFixture<AcerdeDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcerdeDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcerdeDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
