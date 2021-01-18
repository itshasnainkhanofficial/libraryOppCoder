import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/models/user';
import { LibraryState } from 'src/app/store';
import { browserReload } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private store : Store<LibraryState>) { }

  ngOnInit(): void {
    const user : User = JSON.parse(localStorage.getItem("user"));
    
    if(user){
      this.store.dispatch(browserReload({user : user}))
    }
  }

}
