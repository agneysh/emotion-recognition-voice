import { TestBed } from '@angular/core/testing';

import { WebEmpathService } from './web-empath.service';

describe('WebEmpathService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebEmpathService = TestBed.get(WebEmpathService);
    expect(service).toBeTruthy();
  });
});
