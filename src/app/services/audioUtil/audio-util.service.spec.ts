import { TestBed } from '@angular/core/testing';

import { AudioUtilService } from './audio-util.service';

describe('AudioUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioUtilService = TestBed.get(AudioUtilService);
    expect(service).toBeTruthy();
  });
});
