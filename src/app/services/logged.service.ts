import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggedService {
  public logged: boolean = false;

  constructor() {}
}
