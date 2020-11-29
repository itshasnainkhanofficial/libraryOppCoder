import { Component, OnInit } from '@angular/core';
import { faSignInAlt , faSignOutAlt , faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title : string = 'libraryOppCoder';
  
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  faHome = faHome;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  
}
