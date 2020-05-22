import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateAnimalComponent } from './crate-animal.component';

describe('CrateAnimalComponent', () => {
  let component: CrateAnimalComponent;
  let fixture: ComponentFixture<CrateAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrateAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
