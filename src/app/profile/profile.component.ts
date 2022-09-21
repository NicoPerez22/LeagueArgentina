import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  saveButton: boolean = false;
  userProfile;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    var userId = 1
    this.userService.getUserProfile(userId).subscribe((res) =>{
      this.userProfile = res;
    })
  }

}
