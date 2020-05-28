import { TestBed } from '@angular/core/testing';

import { AngularShortcutsService } from './angular-shortcuts.service';

describe('AngularShortcutsService', () => {
  let service: AngularShortcutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularShortcutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
