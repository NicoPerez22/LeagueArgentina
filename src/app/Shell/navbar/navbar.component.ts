import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Models/User-Model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  user: User;
  users: User[];
  token;
  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
    // this.users = new Array<User>();
    //   this.currentUserSubscription = this.authenticationService.currentUser.subscribe(resp => {
    //       this.token = resp.token
    //     console.log(this.token)
    //     const decoded: any = jwt_decode(this.token); 
    //     console.log(decoded)
    //     this.users.push(decoded.user);
    //     this.user = decoded.user

    //   });
  }

  ngOnInit() {
  }

  // loadAllUsers() {
  //   this.userService.getAll().pipe(first()).subscribe(users => {
  //       this.users = users;
  //   });
  // }

}
