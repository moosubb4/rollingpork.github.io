import { TestBed } from '@angular/core/testing';

import { MonsterHunterService } from './monster-hunter.service';

describe('MonsterHunterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonsterHunterService = TestBed.get(MonsterHunterService);
    expect(service).toBeTruthy();
  });
});
