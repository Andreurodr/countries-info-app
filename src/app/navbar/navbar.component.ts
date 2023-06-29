import { Component } from '@angular/core';
import { LoggedService } from '../services/logged.service';
import { UserdbService } from '../services/userdb.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public loggedService: LoggedService,
    public userdbService: UserdbService) {}

  ngOnInit() {

  }

  logOut(){
    this.loggedService.logged = false;
  }

}
