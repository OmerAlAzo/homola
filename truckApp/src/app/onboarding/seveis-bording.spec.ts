import { TestBed } from '@angular/core/testing';

import { SeveisBording } from './seveis-bording';

describe('SeveisBording', () => {
  let service: SeveisBording;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeveisBording);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
