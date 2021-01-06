import { Component, OnInit } from '@angular/core';
import { faSignInAlt , faSignOutAlt , faUserCircle , faUser } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/shared/modal.service';
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
  constructor(private modalservice : ModalService) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalservice.show(LoginComponent);
  }
}
