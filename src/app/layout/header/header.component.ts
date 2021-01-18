import { Component, OnInit } from '@angular/core';
import { faHome , faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthLinkViewModal, selectAuthLinkViewModal } from "src/app/store/selectors/auth.selectors";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faCart = faCartPlus;
  vm$ : Observable<AuthLinkViewModal>;

  constructor(private store : Store) { }

  ngOnInit(): void {
     this.vm$ = this.store.pipe(select(selectAuthLinkViewModal))

  }

}
