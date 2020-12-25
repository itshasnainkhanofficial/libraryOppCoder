import { Component } from '@angular/core';
import { faSignInAlt , faSignOutAlt , faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faSignIn = faSignInAlt;
  faSignOut = faSignOutAlt;
  userCircle = faUserCircle;
  title : string = 'libraryOppCoder';


}
