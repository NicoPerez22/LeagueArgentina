import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  saveButton: boolean = false;
  showButtonFllow: boolean = false;
  showEditProfile: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onFllowed(){
    this.showButtonFllow = true;
  }

  notFollow(){
    this.showButtonFllow = false;
  }

  editProfile(){
    this.showEditProfile = !this.showEditProfile;
    this.saveButton = !this.saveButton;
  }

}
