import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimaAdminComponent } from './dima-admin.component';

describe('DimaAdminComponent', () => {
  let component: DimaAdminComponent;
  let fixture: ComponentFixture<DimaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DimaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
