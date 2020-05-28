import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularShortcutsComponent } from './angular-shortcuts.component';

describe('AngularShortcutsComponent', () => {
  let component: AngularShortcutsComponent;
  let fixture: ComponentFixture<AngularShortcutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularShortcutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
