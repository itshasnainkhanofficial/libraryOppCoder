import { Component, OnInit } from '@angular/core';
import { faSignInAlt , faSignOutAlt , faUserCircle , faUser , faShieldAlt} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/modal.service';
import { LibraryState } from 'src/app/store';
import { logout } from 'src/app/store/actions/auth.actions';
import { AuthLinkViewModal, selectAuthLinkViewModal } from 'src/app/store/selectors/auth.selectors';
import { LoginComponent } from '../login/login.component';

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
  faShieldAlt = faShieldAlt;
  vm$ : Observable<AuthLinkViewModal>;


  constructor(private modalservice : ModalService , private store : Store<LibraryState> ) { }

  ngOnInit(): void {
     this.vm$ = this.store.pipe(select(selectAuthLinkViewModal))
  }


  openModal(){
    this.modalservice.show(LoginComponent);
  }
  logout(){
    this.store.dispatch(logout())
  }
}
