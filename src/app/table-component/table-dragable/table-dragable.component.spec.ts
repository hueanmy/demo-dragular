import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDragableComponent } from './table-dragable.component';

describe('TableDragableComponent', () => {
  let component: TableDragableComponent;
  let fixture: ComponentFixture<TableDragableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDragableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDragableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
