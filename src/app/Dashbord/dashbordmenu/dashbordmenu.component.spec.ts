import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordmenuComponent } from './dashbordmenu.component';

describe('DashbordmenuComponent', () => {
  let component: DashbordmenuComponent;
  let fixture: ComponentFixture<DashbordmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
