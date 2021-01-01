import { Component, OnInit } from '@angular/core';
import { faSignInAlt , faSignOutAlt , faUserCircle , faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authlinks',
  templateUrl: './authlinks.component.html',
  styleUrls: ['./authlinks.component.scss']
})
export class AuthlinksComponent implements OnInit {
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  userCircle = faUserCircle;
  userRegister = faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
