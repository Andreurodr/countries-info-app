import { Injectable } from '@angular/core';
import { UserLogin, UserRegister } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserdbService {
  public userDbArray: UserRegister[] = [];

  constructor() {}

  userPushDb(user: UserRegister) {
    this.userDbArray.push(user);
    console.log(this.userDbArray);
  }
}
