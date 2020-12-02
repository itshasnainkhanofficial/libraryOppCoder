import { Component, OnInit } from '@angular/core';
import { faSignInAlt , faSignOutAlt , faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  faHome = faHome;

  
  constructor() { }

  ngOnInit(): void {
  }

}
