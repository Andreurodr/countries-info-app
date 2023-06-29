/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserdbService } from './userdb.service';

describe('Service: Userdb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdbService]
    });
  });

  it('should ...', inject([UserdbService], (service: UserdbService) => {
    expect(service).toBeTruthy();
  }));
});
